const card = document.querySelector('.card');

card.addEventListener('click', function (e) {
     e.preventDefault();
     card.classList.toggle('is-flipped');
});

const flashcards = [
     {
          topic: 'fruits',
          image: '../images/apple.jpg',
          word: 'apple',
          ipa: '[ˈæp.əl]',
     },
     {
          topic: 'fruits',
          image: '../images/banana.jpg',
          word: 'banana',
          ipa: '[bəˈnæn.ə]',
     },
     {
          topic: 'fruits',
          image: '../images/orange.jpg',
          word: 'orange',
          ipa: '[ˈɔːr.ɪndʒ]',
     },
     {
          topic: 'colors',
          image: '../images/orange_color.jpg',
          word: 'orange',
          ipa: '[ˈɔːr.ɪndʒ]',
     },
     {
          topic: 'colors',
          image: '../images/blue_color.jpg',
          word: 'blue',
          ipa: '[bluː]',
     },
     {
          topic: 'colors',
          image: '../images/brown_color.jpg',
          word: 'brown',
          ipa: '[braʊn]',
     },
     {
          topic: 'colors',
          image: '../images/gold_color.jpg',
          word: 'gold',
          ipa: '[ɡoʊld]',
     },
     {
          topic: 'colors',
          image: '../images/gray_color.jpg',
          word: 'gray',
          ipa: '[ɡreɪ]',
     },
     {
          topic: 'colors',
          image: '../images/green_color.jpg',
          word: 'green',
          ipa: '[ɡriːn]',
     },
     {
          topic: 'colors',
          image: '../images/pink_color.jpg',
          word: 'pink',
          ipa: '[pɪŋk]',
     },
     {
          topic: 'colors',
          image: '../images/purple_color.jpg',
          word: 'purple',
          ipa: '[ˈpɝː.pəl]',
     },
     {
          topic: 'colors',
          image: '../images/red_color.jpg',
          word: 'red',
          ipa: '[red]',
     },
     {
          topic: 'colors',
          image: '../images/silver_color.jpg',
          word: 'silver',
          ipa: '[ˈsɪl.vɚ]',
     },
     {
          topic: 'colors',
          image: '../images/yellow_color.jpg',
          word: 'yellow',
          ipa: '[ˈjel.oʊ]',
     },
];

console.log(flashcards[0]);
