const card = document.querySelector('.card');

card.addEventListener('click', function (e) {
     e.preventDefault();
     card.classList.toggle('is-flipped');
});

const flashcards = [
     {
          topic: 'fruits',
          image: 'assets/images/apple.jpg',
          word: 'apple',
          ipa: '[ˈæp.əl]',
     },
     {
          topic: 'fruits',
          image: 'assets/images/banana.jpg',
          word: 'banana',
          ipa: '[bəˈnæn.ə]',
     },
     {
          topic: 'fruits',
          image: 'assets/images/orange.jpg',
          word: 'orange',
          ipa: '[ˈɔːr.ɪndʒ]',
     },
     {
          topic: 'colors',
          image: 'assets/images/orange_color.jpg',
          word: 'orange',
          ipa: '[ˈɔːr.ɪndʒ]',
     },
     {
          topic: 'colors',
          image: 'assets/images/blue_color.jpg',
          word: 'blue',
          ipa: '[bluː]',
     },
     {
          topic: 'colors',
          image: 'assets/images/brown_color.jpg',
          word: 'brown',
          ipa: '[braʊn]',
     },
     {
          topic: 'colors',
          image: 'assets/images/gold_color.jpg',
          word: 'gold',
          ipa: '[ɡoʊld]',
     },
     {
          topic: 'colors',
          image: 'assets/images/gray_color.jpg',
          word: 'gray',
          ipa: '[ɡreɪ]',
     },
     {
          topic: 'colors',
          image: 'assets/images/green_color.jpg',
          word: 'green',
          ipa: '[ɡriːn]',
     },
     {
          topic: 'colors',
          image: 'assets/images/pink_color.jpg',
          word: 'pink',
          ipa: '[pɪŋk]',
     },
     {
          topic: 'colors',
          image: 'assets/images/purple_color.jpg',
          word: 'purple',
          ipa: '[ˈpɝː.pəl]',
     },
     {
          topic: 'colors',
          image: 'assets/images/red_color.jpg',
          word: 'red',
          ipa: '[red]',
     },
     {
          topic: 'colors',
          image: 'assets/images/silver_color.jpg',
          word: 'silver',
          ipa: '[ˈsɪl.vɚ]',
     },
     {
          topic: 'colors',
          image: 'assets/images/yellow_color.jpg',
          word: 'yellow',
          ipa: '[ˈjel.oʊ]',
     },
];

/**
 *
 * Generate random index for the FC
 */

const createRandom = function () {
     return Math.floor(Math.random() * flashcards.length);
};

createRandom();
