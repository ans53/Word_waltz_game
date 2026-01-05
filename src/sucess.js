const successMessages = [
  "💯 {lang} just gained +10 000 aura.",
  "✨ {lang} stands tall.",
  "🌌 {lang} endures the storm.",
  "🔥 {lang} refuses to fade.",
  "🕶️ {lang} stays untouched.",
  "⚡ {lang} holds its ground.",
  "🌑 {lang} survives another round.",
  "👁️ {lang} remains unshaken.",
  "🏆 {lang} lives on.",
  "🚀 {lang} still in the game."
];
export function getSuccess(language) {
  const msg = successMessages[Math.floor(Math.random() * successMessages.length)];
  return msg.replace("{lang}", `${language.name}`); // simple highlight
}
