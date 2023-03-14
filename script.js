const flipButton = document.getElementById('flip');
const flashcard = document.getElementById('flashcard');

flipButton.addEventListener('click', () => {
  flashcard.classList.toggle('flipped');
});
