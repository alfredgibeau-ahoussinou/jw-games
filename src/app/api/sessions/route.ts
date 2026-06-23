import { NextRequest, NextResponse } from "next/server";
import { recordGameSession } from "@/lib/db";
import type { GameSessionInput } from "@/lib/db/types";

export async function POST(request: NextRequest) {
  try {
    const body = (await request.json()) as GameSessionInput;

    if (!body.deviceId || !body.mode) {
      return NextResponse.json(
        { error: "deviceId et mode requis" },
        { status: 400 }
      );
    }

    const session = await recordGameSession(body);
    if (!session) {
      return NextResponse.json(
        { error: "Profil introuvable" },
        { status: 404 }
      );
    }

    return NextResponse.json(session);
  } catch {
    return NextResponse.json(
      { error: "Erreur lors de l'enregistrement" },
      { status: 500 }
    );
  }
}
