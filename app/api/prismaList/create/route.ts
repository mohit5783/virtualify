// app/api/playlist/create/route.ts
"use server"
import { db } from "@/lib/db";
import { NextResponse } from "next/server";
import { fetchPlaylistData } from "@/lib/fetchPlayListData";

// Define types for playlist and video data
interface VideoData {
    title: string;
    thumbnailUrl: string;
    videoId: string;
    views: number;
    likes: number;
    commentCount: number;
}

interface PlaylistData {
    playlistId: string;
    playlistName: string;
    videos: VideoData[];
}

export async function POST(req: Request) {
    try {
        const playlistIds = [
            "PLw9dqMP7HQV5FMgud-d8uDj2cIWmMhBVH",
            "PL_y4QDHwq6eR2JLj8wns20bty8roXavYj",
            "PL_y4QDHwq6eTcUBLaGVTI179LqrdtMsLQ",
        ];
        const playlistNames = ["ReactJS Course", "Innovation", "Motivation"];

        // Fetch playlist data for all playlists asynchronously
        const playlistDataPromises = playlistIds.map((id, index) =>
            fetchPlaylistData(id, playlistNames[index])
        );

        // Wait for all playlist data to be fetched
        const fetchedPlaylists = await Promise.all(playlistDataPromises);

        // Filter out any null values
        const allPlaylistData: PlaylistData[] = fetchedPlaylists.filter((data): data is PlaylistData => data !== null);

        // Insert or update each playlist in the database
        const processedPlaylists = await Promise.all(
            allPlaylistData.map(async (playlistData) => {
                const { playlistId, playlistName, videos } = playlistData;

                try {
                    // Check if playlist already exists
                    const existingPlaylist = await db.playlist.findUnique({
                        where: { playlistId },
                    });

                    if (existingPlaylist) {
                        // Update existing playlist
                        const updatedPlaylist = await db.playlist.update({
                            where: { playlistId },
                            data: {
                                playlistName,
                                videos: {
                                    deleteMany: {}, // Delete existing videos
                                    create: videos.map((video) => ({
                                        title: video.title,
                                        thumbnailUrl: video.thumbnailUrl,
                                        videoId: video.videoId,
                                        views: video.views,
                                        likes: video.likes,
                                        commentCount: video.commentCount | 0,
                                        // Don't set the `id` field, let MongoDB generate it
                                    })),
                                },
                            },
                        });

                        return updatedPlaylist;
                    } else {
                        // Create new playlist
                        const newPlaylist = await db.playlist.create({
                            data: {
                                playlistId,
                                playlistName,
                                videos: {
                                    create: videos.map((video) => ({
                                        title: video.title,
                                        thumbnailUrl: video.thumbnailUrl,
                                        videoId: video.videoId,
                                        views: video.views,
                                        likes: video.likes,
                                        commentCount: video.commentCount | 0,
                                        // Don't set the `id` field, let MongoDB generate it
                                    })),
                                },
                            },
                        });

                        return newPlaylist;
                    }
                } catch (dbError) {
                    console.error(`Error handling playlist ${playlistName}:`, dbError);
                    throw dbError;
                }
            })
        );

        // const cronJobId = '12345'; // Replace with your actual cron job ID
        // await updateCronJob(cronJobId);


        return NextResponse.json(processedPlaylists, { status: 200 });
    } catch (error) {
        console.error("[POST PLAYLIST]", error);
        return new NextResponse("Internal Server Error", { status: 500 });
    }
}
