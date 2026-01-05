// FarewellMessages.js
const farewells = [
  "💀 Omg… you just got {lang} canceled. This is so embarrassing.",
  "😭 Not {lang} getting cooked because you couldn’t handle it.",
  "🔥 Sheeesh—{lang} just got deleted. You’re different (in a bad way).",
  "🙃 Bruh, {lang} is gone. That’s kinda mid of you.",
  "😂 You ratioed {lang} straight outta existence. Wild.",
  "🤡 Not you putting {lang} in their flop era.",
  "😬 Oop—{lang} just got yeeted. This one’s on you bestie.",
  "📉 {lang} went straight downhill. You’re down bad for this.",
  "👀 Dang, {lang} vanished. This is giving villain arc energy.",
  "✨ Congrats, {lang} is over. Pack it up, you’re done.",
];

export function getFarewell(language) {
  const msg = farewells[Math.floor(Math.random() * farewells.length)];
  return msg.replace("{lang}", `🪦${language.name}🪦`); // simple highlight
}

