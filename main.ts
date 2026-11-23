import { mkdirSync, writeFileSync } from "node:fs";

const joke =
  "My agent demoed its own fix live, crashed on the first click, and filed a postmortem blaming my keyboard.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", joke + "\n", "utf8");
