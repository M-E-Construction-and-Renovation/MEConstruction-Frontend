import { NextResponse } from "next/server";
import supabase from "../../client";

// CRITICAL: This prevents Vercel from serving a cached response
export const dynamic = "force-dynamic";

export async function GET(request) {
  // Fail closed. Without this guard, an unset CRON_SECRET makes the expected
  // header the literal string "Bearer undefined", which anyone can send.
  const secret = process.env.CRON_SECRET;
  if (!secret) {
    console.error("CRON_SECRET is not configured");
    return new Response("Unauthorized", { status: 401 });
  }

  const authHeader = request.headers.get("authorization");
  if (authHeader !== `Bearer ${secret}`) {
    return new Response("Unauthorized", { status: 401 });
  }

  try {
    // 2. Perform a "Write" operation
    // Using an UPDATE is better than a SELECT because it's harder
    // for any layer to cache a database write.

    // const { error } = await supabase
    //   .from("heartbeat") // Make sure this table exists!
    //   .update({ last_ping: new Date().toISOString() })
    //   .eq("id", 1);

    const { error } = await supabase.rpc("wake_up_db");

    if (error) throw error;

    return NextResponse.json({
      success: true,
      // message: "Supabase heartbeat updated",
      message: "Supabase RPC Heartbeat executed successfully",
    });
  } catch (err) {
    return NextResponse.json(
      {
        success: false,
        // error: err.message || "Error updating Supabase heartbeat.",
        error: err.message || "Error executing Supabase RPC heartbeat.",
      },
      { status: 500 },
    );
  }
}
