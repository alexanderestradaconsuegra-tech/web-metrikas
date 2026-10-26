import { readFile } from "node:fs/promises";
import path from "node:path";

// Serves the demo recordings in media/demo with byte-range support.
// The static file server sends videos without a video MIME type and ignores
// Range, and Safari (iPhone included) refuses to play video without 206 responses.

const DIR = path.join(process.cwd(), "media", "demo");
const TYPES: Record<string, string> = { ".mp4": "video/mp4", ".webm": "video/webm" };

async function serve(request: Request, file: string, withBody: boolean) {
  const type = TYPES[path.extname(file)];
  if (!type || !/^[a-z0-9-]+\.(mp4|webm)$/.test(file)) return new Response("Not found", { status: 404 });

  let data: Buffer;
  try {
    data = await readFile(path.join(DIR, file));
  } catch {
    return new Response("Not found", { status: 404 });
  }

  const size = data.length;
  const headers = new Headers({ "Content-Type": type, "Accept-Ranges": "bytes", "Cache-Control": "public, max-age=86400" });
  const range = /^bytes=(\d*)-(\d*)$/.exec(request.headers.get("range") ?? "");
  if (!range) {
    headers.set("Content-Length", String(size));
    return new Response(withBody ? new Uint8Array(data) : null, { status: 200, headers });
  }

  // "bytes=a-b", "bytes=a-" or the last n bytes with "bytes=-n".
  let start = range[1] ? Number(range[1]) : Math.max(0, size - Number(range[2]));
  let end = range[1] && range[2] ? Number(range[2]) : size - 1;
  end = Math.min(end, size - 1);
  if (!range[1] && !range[2]) start = 0;
  if (start > end || start >= size) {
    headers.set("Content-Range", `bytes */${size}`);
    return new Response(null, { status: 416, headers });
  }
  headers.set("Content-Range", `bytes ${start}-${end}/${size}`);
  headers.set("Content-Length", String(end - start + 1));
  return new Response(withBody ? new Uint8Array(data.subarray(start, end + 1)) : null, { status: 206, headers });
}

type Params = { params: Promise<{ file: string }> };

export async function GET(request: Request, { params }: Params) {
  return serve(request, (await params).file, true);
}

export async function HEAD(request: Request, { params }: Params) {
  return serve(request, (await params).file, false);
}
