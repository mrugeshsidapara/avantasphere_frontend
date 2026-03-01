import { createClient } from "@supabase/supabase-js";
import fs from "fs";
import { fileURLToPath } from "url";
import path from "path";

// manual load .env so we can inspect values
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const envPath = path.resolve(__dirname, "../.env");
if (fs.existsSync(envPath)) {
  const raw = fs.readFileSync(envPath, "utf-8");
  raw.split(/\r?\n/).forEach((line) => {
    const m = line.match(/^\s*([^=]+)=\s*(.*)$/);
    if (m) {
      const key = m[1];
      let val = m[2];
      // strip quotes
      if (val.startsWith('"') && val.endsWith('"')) {
        val = val.slice(1, -1);
      }
      process.env[key] = val;
    }
  });
}

type Any = any;
(async () => {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const key = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
  console.log("env url", url);
  console.log("env key", key?.slice(0, 20));
  const supabase = createClient(url ?? "", key ?? "");
  const { data, error } = await supabase
    .from("products_with_specs")
    .select("*")
    .limit(1);
  console.log("error", error);
  console.log("data", data);
})();
