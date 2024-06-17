import mongoose from 'mongoose';
import { NextApiRequest, NextApiResponse } from 'next';
import Playlist from '../../../../app/models/playList'; // Adjust the import path based on your project structure
import { fetchPlaylistData } from '../../../../lib/fetchPlayListData';
import { NextResponse } from 'next/server';

export async function POST(req: Request) {
    try {
        const connectionStr = process.env.NEXT_PUBLIC_MONGO_URI;

        // Validate environment variable
        if (!connectionStr) {
            console.error('MongoDB connection string is not set in environment variables.');
            return NextResponse.json({ error: 'MongoDB connection string is not set in environment variables.' });
        }

        await mongoose.connect(connectionStr);
        console.log("MongoDB connected successfully");

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
        const allPlaylistData = await Promise.all(playlistDataPromises);
        console.log("Fetched playlist data:", allPlaylistData);

        // Clear the collection before inserting new data
        await Playlist.deleteMany({});
        console.log("Cleared existing playlists");

        // Validate and insert each playlist into MongoDB
        const insertedPlaylists = await Promise.all(
            allPlaylistData.map(async (playlistData, index) => {
                if (playlistData) {
                    const { playlistId, playlistName, videos } = playlistData;

                    try {
                        // Validate video comment count
                        const validatedVideos = videos.map(video => {
                            if (isNaN(video.commentCount)) {
                                console.warn(`Invalid commentCount for video: ${video.title}, setting to 0.`);
                                video.commentCount = 0;
                            }
                            return video;
                        });

                        // Create new playlist document
                        const newPlaylist = new Playlist({
                            playlistId,
                            playlistName,
                            videos: validatedVideos,
                        });
                        return newPlaylist.save();
                    } catch (dbError) {
                        console.error(`Error handling playlist ${playlistName}:`, dbError);
                        throw dbError;
                    }
                } else {
                    console.log(`Playlist data not found for ${playlistNames[index]}.`);
                    return null;
                }
            })
        );

        console.log("Inserted playlists:", insertedPlaylists);

        // return res.status(200).json({ message: "All playlists inserted successfully", insertedPlaylists });
        return NextResponse.json({ insertedPlaylists, success: true });
    } catch (error) {
        console.error('Error saving playlists:', error);
        return NextResponse.json({ error: 'Failed to save playlists', success: false });
    } finally {
        mongoose.connection.close();
    }
}
