// app/api/prismaList/fetch/route.ts
import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function GET(req: Request) {
    try {
        // Fetch all playlists and their related videos from the database
        const playlists = await prisma.playlist.findMany({
            include: {
                videos: true,
            },
        });

        return NextResponse.json(playlists, { status: 200 });
    } catch (error) {
        console.error("[GET PLAYLISTS]", error);
        return new NextResponse("Internal Server Error", { status: 500 });
    }
}
