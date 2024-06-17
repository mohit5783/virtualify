"use client";
import React, { useEffect, useState } from "react";
import { fetchPlaylistData } from "@/lib/fetchPlayListData";


interface VideoData {
  id: string;
  title: string;
  thumbnailUrl: string;
  videoId: string;
  views: number;
  likes: number;
  commentCount: number;
}
interface PlaylistData extends Document {
  playlistId: string;
  playlistName: string;
  videos: VideoData[];
}

const page = () => {
  const [playlistData, setPlaylistData] = useState<PlaylistData[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [showAllVideos, setShowAllVideos] = useState<boolean>(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch('/api/prismaList/get');
        if (!res.ok) {
          throw new Error('Failed to fetch playlist data');
        }
        const data = await res.json();
        setPlaylistData(data);
      } catch (error) {
        console.error('Error fetching playlist data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const toggleShowAllVideos = () => {
    setShowAllVideos(!showAllVideos);
  };

  if (loading) {
    return <div className="container mx-auto px-4 py-8">Loading...</div>;
  }

  if (playlistData.length === 0) {
    return (
      <div className="container mx-auto px-4 py-8">
        Failed to load playlist data
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      {playlistData.map((playlist) => (
        <div key={playlist.playlistId} className="mb-8">
          <h2 className="text-2xl font-bold mb-4">{playlist.playlistName}</h2>
          <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {playlist.videos.slice(0, showAllVideos ? undefined : 4).map((video) => (
              <li
                key={video.id}
                className="border rounded-lg overflow-hidden shadow-lg flex flex-col"
                style={{ maxWidth: "320px" }}
              >
                <div className="p-4 flex-1">
                  <h3 className="text-lg font-semibold mb-4">{video.title}</h3>
                  <div className="aspect-w-16 aspect-h-9 mb-4">
                    <iframe
                      width="100%"
                      height="100%"
                      src={`https://www.youtube.com/embed/${video.videoId}`}
                      title={video.title}
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      className="w-full h-full"
                    ></iframe>
                  </div>
                  <div className="flex justify-between">
                    <p className="text-sm text-gray-500">
                      {video.views} views • {video.likes} likes •{" "}
                      {video.commentCount} comments
                    </p>
                  </div>
                </div>
              </li>
            ))}
          </ul>
          {playlist.videos.length > 4 && (
            <div className="text-right mt-4">
              <button
                className="text-blue-500 hover:text-blue-700 cursor-pointer"
                onClick={toggleShowAllVideos}
              >
                {showAllVideos ? "Show less" : "View more"}
              </button>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default page;
