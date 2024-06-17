import mongoose, { Document, Model, Schema } from 'mongoose';

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

const VideoSchema = new Schema<VideoData>({
    id: { type: String, required: true },
    title: { type: String, required: true },
    thumbnailUrl: { type: String, required: true },
    videoId: { type: String, required: true },
    views: { type: Number, required: true },
    likes: { type: Number, required: true },
    commentCount: { type: Number, required: true },
});

const PlaylistSchema = new Schema<PlaylistData>({
    playlistId: { type: String, required: true, unique: true },
    playlistName: { type: String, required: true },
    videos: [VideoSchema],
});

const Playlist: Model<PlaylistData> = mongoose.models.Playlist || mongoose.model<PlaylistData>('Playlist', PlaylistSchema);

export default Playlist;
