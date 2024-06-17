const YOUTUBE_PLAYLIST_ITEMS_API = "https://www.googleapis.com/youtube/v3/playlistItems";
const YOUTUBE_VIDEO_DETAILS_API = "https://www.googleapis.com/youtube/v3/videos";

export const fetchPlaylistData = async (playlistId: string, playlistName: string) => {
    try {
        const res = await fetch(`${YOUTUBE_PLAYLIST_ITEMS_API}?part=snippet&maxResults=50&playlistId=${playlistId}&key=${process.env.NEXT_PUBLIC_YOUTUBE_API_KEY}`);
        const playlistItems = await res.json();

        const videos = await Promise.all(playlistItems.items.map(async (item: any) => {
            const { id, snippet } = item;
            const { title, thumbnails, resourceId } = snippet;

            const videoDetailsRes = await fetch(`${YOUTUBE_VIDEO_DETAILS_API}?part=snippet,statistics&id=${resourceId.videoId}&key=${process.env.NEXT_PUBLIC_YOUTUBE_API_KEY}`);
            const videoDetails = await videoDetailsRes.json();

            const { viewCount, likeCount, commentCount } = videoDetails.items[0].statistics;

            return {
                id: id,
                title: title,
                thumbnailUrl: thumbnails.medium.url,
                videoId: resourceId.videoId,
                views: parseInt(viewCount),
                likes: parseInt(likeCount),
                commentCount: parseInt(commentCount),
            };
        }));
        return {
            playlistId,
            playlistName,
            videos,
        };
    } catch (error) {
        console.error(`Error fetching playlist data for ${playlistName}:`, error);
        return null;
    }
};