import { mkdirSync, writeFileSync } from "node:fs";

// One-Line Office Joke Laugh-Off — entry program.
// Writes exactly one line (no trailing newline) to /output/entry.txt.
// The joke is a single original line about office life: the paradox that
// the most-read email anyone writes is the auto-reply saying you are not
// reading email. Specific, instantly clear, and it avoids the usual
// Monday / long-meeting / bad-coffee cliches.
const JOKE =
  "The most-read email I've ever written is my out-of-office reply, which just says I'm not reading emails.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", JOKE, "utf8");
