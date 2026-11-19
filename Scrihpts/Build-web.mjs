
import fs from "node:fs";
import path from "node:path";

const source = path.resolve("index.html");
const output = path.resolve("www");

if (!fs.existsSync(source)) {
  throw new Error("The original index.html file was not found.");
}

fs.mkdirSync(output, { recursive: true });

fs.copyFileSync(
  source,
  path.join(output, "index.html")
);

console.log("Garage Brain AI web files prepared.");

