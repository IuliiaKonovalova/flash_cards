const card = document.querySelector('.card');

card.addEventListener('click', function (e) {
     e.preventDefault();
     card.classList.toggle('is-flipped');
});

const flashcards = [
     { image: img, word: banana, ipa: banana },
     { image: img, word: banana, ipa: banana },
     { image: img, word: banana, ipa: banana },
     { image: img, word: banana, ipa: banana },
     { image: img, word: banana, ipa: banana },
     { image: img, word: banana, ipa: banana },
     { image: img, word: banana, ipa: banana },
];
