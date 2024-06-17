// app/api/playlists/get.ts
import { NextRequest, NextResponse } from 'next/server';
import clientPromise from '../../../../lib/mongodb';

export async function GET(req: NextRequest) {
    try {
        const client = await clientPromise;
        const db = client.db('playlist');
        const playlists = await db
            .collection('playlists')
            .find({})
            .toArray();

        return NextResponse.json(playlists);
    } catch (error) {
        console.error('Error fetching playlists:', error);
        return NextResponse.json({ error: 'Failed to fetch playlists' }, { status: 500 });
    }
}


// import mongoose from 'mongoose';
// import { NextApiRequest, NextApiResponse } from 'next';
// import Playlist from '@/app/models/playList';

// export async function POST(req: NextApiRequest, res: NextApiResponse) {
//     try {
//         const connectionStr = process.env.NEXT_PUBLIC_MONGO_URI; // Ensure you have this environment variable set
//         await mongoose.connect(connectionStr as string);

//         // const { name, price, color, company, category } = req.body;

//         let product = new Playlist({
//             "playlistId": "PLw9dqMP7HQV5FMgud-d8uDj2cIWmMhBVH",
//             "playlistName": "ReactJS Course 1",
//             "videos": [
//                 {
//                     "id": "1",
//                     "title": "ReactJS Tutorial for Beginners",
//                     "thumbnailUrl": "https://i.ytimg.com/vi/abcd1234/mqdefault.jpg",
//                     "videoId": "abcd1234",
//                     "views": 12345,
//                     "likes": 678,
//                     "commentCount": 90
//                 },
//                 {
//                     "id": "2",
//                     "title": "Advanced ReactJS Concepts",
//                     "thumbnailUrl": "https://i.ytimg.com/vi/efgh5678/mqdefault.jpg",
//                     "videoId": "efgh5678",
//                     "views": 23456,
//                     "likes": 789,
//                     "commentCount": 100
//                 }
//             ]

//         });

//         const result = await product.save();

//         return NextResponse.json({ result, success: true });
//     } catch (error) {
//         console.error('Error saving product:', error);
//         return NextResponse.json({ error: 'Failed to save product', success: false });
//     }
// }
