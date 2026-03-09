import { NextRequest } from "next/server";
import { writeFile, mkdir } from "fs/promises";
import path from "path";
import { apiSuccess, apiError } from "@/lib/api/response";
import { UPLOADS_PUBLIC_BASE } from "@/lib/constants/uploads";

// Allowed types for upload
const UPLOAD_TYPES = ["categories", "products", "certificates"] as const;

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData();
    const file = formData.get("file") as File | null;
    const type = formData.get("type") as string | null;

    if (
      !file ||
      !type ||
      !UPLOAD_TYPES.includes(type as (typeof UPLOAD_TYPES)[number])
    ) {
      return apiError(
        "Invalid file or type. Use type: categories | products | certificates",
      );
    }

    const bytes = await file.arrayBuffer();
    const buffer = Buffer.from(bytes);
    const ext = path.extname(file.name) || ".jpg";
    const baseName = formData.get("name")?.toString() ?? `${Date.now()}${ext}`;
    const fileName = baseName.endsWith(ext) ? baseName : `${baseName}${ext}`;
    console.log("Uploading file:", fileName, "to type:", type);
    const uploadDir = path.join(process.cwd(), "public", "uploads", type);
    await mkdir(uploadDir, { recursive: true });
    const filePath = path.join(uploadDir, fileName);
    await writeFile(filePath, buffer);

    const url = `${UPLOADS_PUBLIC_BASE}/${type}/${fileName}`;
    console.log("File uploaded successfully:", url);
    return apiSuccess({ url, path: url }, 201);
  } catch (e) {
    console.error("Upload failed:", e);
    return apiError("Upload failed", 500);
  }
}
