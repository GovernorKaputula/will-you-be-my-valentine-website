const question = document.querySelector("#question-area");
const answer = document.querySelector("#answer-area");
const title = document.querySelector("#answer-title");
const photo = document.querySelector("#main-image");
const celebrateButton = document.querySelector("#celebrate-button");
const particles = document.querySelector("#confetti");
const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
let cleanupTimer;
let answerChosen = false;
function clearCelebration() {
  clearTimeout(cleanupTimer);
  particles.replaceChildren();
}
function celebrate() {
  clearCelebration();
  if (reducedMotion.matches || document.hidden) return;
  const fragment = document.createDocumentFragment();
  for (let i = 0; i < 26; i++) {
    const heart = document.createElement("span");
    heart.className = "heart-particle";
    heart.textContent = i % 2 ? "♡" : "♥";
    heart.style.left = `${Math.random() * 96}%`;
    heart.style.setProperty("--delay", `${Math.random() * 0.7}s`);
    heart.style.setProperty("--drift", `${Math.random() * 100 - 50}px`);
    heart.style.setProperty("--spin", `${Math.random() * 100 - 50}deg`);
    heart.style.fontSize = `${14 + Math.random() * 18}px`;
    fragment.appendChild(heart);
  }
  particles.appendChild(fragment);
  cleanupTimer = setTimeout(clearCelebration, 4300);
}
function chooseAnswer(accepted) {
  if (answerChosen) return;
  answerChosen = true;
  question.hidden = true;
  answer.hidden = false;
  document.querySelector("#answer-eyebrow").textContent = accepted
    ? "Well, you just made my day."
    : "A little note, a lot of love.";
  title.innerHTML = accepted
    ? "It’s a <em>yes!</em><br>Lucky me."
    : "Maybe another<br><em>time.</em>";
  document.querySelector("#answer-copy").textContent = accepted
    ? "Here’s to more little moments together. I can’t wait to see you."
    : "That’s okay. Thank you for reading my little love note. You’re still pretty wonderful.";
  photo.src = accepted ? "valentine2.jpg" : "valentine.jpg";
  photo.alt = accepted
    ? "A second favourite photograph of you"
    : "A favourite photograph of you on the beach";
  document.querySelector("#photo-caption").textContent = accepted
    ? "My favourite answer. My favourite person."
    : "A little note, sent with love.";
  celebrateButton.hidden = !accepted;
  title.focus({ preventScroll: true });
  if (accepted) celebrate();
  else clearCelebration();
}
document
  .querySelector("#yes-button")
  .addEventListener("click", () => chooseAnswer(true));
document
  .querySelector("#no-button")
  .addEventListener("click", () => chooseAnswer(false));
celebrateButton.addEventListener("click", celebrate);
document.querySelector("#replay-button").addEventListener("click", () => {
  clearCelebration();
  answerChosen = false;
  question.hidden = false;
  answer.hidden = true;
  photo.src = "valentine.jpg";
  photo.alt = "A favourite photograph of you on the beach";
  document.querySelector("#photo-caption").textContent =
    "You, me & a little bit of magic.";
  document.querySelector("#yes-button").focus({ preventScroll: true });
});
document.addEventListener("visibilitychange", () => {
  if (document.hidden) clearCelebration();
});
reducedMotion.addEventListener("change", () => {
  if (reducedMotion.matches) clearCelebration();
});
