import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const query = searchParams.get("query") ?? "";
  const location = searchParams.get("location") ?? "";

  const res = await fetch(
    `https://jobs.worldcitizensalliance.org/jobs?query=${encodeURIComponent(
      query
    )}&location=${encodeURIComponent(location)}`
  );
  const data = await res.json();
  return NextResponse.json(data);
}
