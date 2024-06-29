// app/api/webhook/route.ts
"use server";
import { NextResponse } from 'next/server';
import { POST as createOrUpdatePlaylists } from '../../api/prismaList/create/route';

export async function POST(req: Request) {
    try {
        // Call the createOrUpdatePlaylists function to handle the playlist creation/updating logic
        const response = await createOrUpdatePlaylists(req);

        // Return the response from the playlist function
        return response;
    } catch (error) {
        console.error("[POST WEBHOOK]", error);
        return new NextResponse("Internal Server Error", { status: 500 });
    }
}
