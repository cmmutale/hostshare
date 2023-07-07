import { NextResponse } from "next/server";

import listingData from '../../../data/data.json';

export async function GET(req) {
    return NextResponse.json(listingData)
}