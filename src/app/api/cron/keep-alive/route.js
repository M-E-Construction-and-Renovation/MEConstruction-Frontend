import { NextResponse } from "next/server";
import supabase from "../../client";

// CRITICAL: This prevents Vercel from serving a cached response
export const dynamic = "force-dynamic";

export async function GET(request) {
  // 1. Check the Vercel Cron Secret (Standard Security)
  const authHeader = request.headers.get("authorization");
  if (authHeader !== `Bearer ${process.env.CRON_SECRET}`) {
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
