import { NextRequest, NextResponse } from "next/server";
import { upsertProfile, getProfile } from "@/lib/db";
import type { ProfileUpsertInput } from "@/lib/db/types";

export async function GET(request: NextRequest) {
  const deviceId = request.nextUrl.searchParams.get("deviceId");
  if (!deviceId) {
    return NextResponse.json({ error: "deviceId requis" }, { status: 400 });
  }

  const profile = await getProfile(deviceId);
  if (!profile) {
    return NextResponse.json({ error: "Profil introuvable" }, { status: 404 });
  }

  return NextResponse.json(profile);
}

export async function POST(request: NextRequest) {
  try {
    const body = (await request.json()) as ProfileUpsertInput;

    if (!body.deviceId || !body.displayName) {
      return NextResponse.json(
        { error: "deviceId et displayName requis" },
        { status: 400 }
      );
    }

    const profile = await upsertProfile(body);
    return NextResponse.json(profile);
  } catch {
    return NextResponse.json(
      { error: "Erreur lors de la sauvegarde" },
      { status: 500 }
    );
  }
}
