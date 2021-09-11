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
          topic: 'fruits',
          image: 'assets/images/grapes.jpg',
          word: 'grapes',
          ipa: '[ɡreɪps]',
     },
     {
          topic: 'fruits',
          image: 'assets/images/peach.jpg',
          word: 'peach',
          ipa: '[piːtʃ]',
     },
     {
          topic: 'fruits',
          image: 'assets/images/pear.jpg',
          word: 'pear',
          ipa: '[per]',
     },
     {
          topic: 'fruits',
          image: 'assets/images/strawberry.jpg',
          word: 'strawberry',
          ipa: '[ˈstrɑːˌber.i]',
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
          image: 'assets/images/white_color.jpg',
          word: 'white',
          ipa: '[waɪt]',
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
     {
          topic: 'actions',
          image: 'assets/images/collect_pencils.jpg',
          word: 'collect pencils',
          ipa: '[kəˈlekt ˈpen.səls]',
     },
     {
          topic: 'actions',
          image: 'assets/images/go_fishing.jpg',
          word: 'go fishing',
          ipa: '[ɡoʊ ˈfɪʃ.ɪŋ]',
     },
     {
          topic: 'actions',
          image: 'assets/images/go_roller_skating.jpg',
          word: 'go roller-skating',
          ipa: '[ɡoʊ ˈroʊ.lɚ.skeɪ.t̬ɪŋ]',
     },
     {
          topic: 'actions',
          image: 'assets/images/go_skiing.jpg',
          word: 'go skiing',
          ipa: '[ɡoʊ ˈskiː.ɪŋ]',
     },
     {
          topic: 'actions',
          image: 'assets/images/go_swimming.jpg',
          word: 'go swimming',
          ipa: '[ɡoʊ ˈswɪm.ɪŋ]',
     },
     {
          topic: 'actions',
          image: 'assets/images/go_to_the_park.jpg',
          word: 'go to the park',
          ipa: '[ɡoʊ tə ðə pɑːrk]',
     },
     {
          topic: 'actions',
          image: 'assets/images/go_to_the_museum.jpg',
          word: 'go to the museum',
          ipa: '[ɡoʊ tə ðə mjuːˈziː.əm]',
     },
     {
          topic: 'actions',
          image: 'assets/images/open_the_window.jpg',
          word: 'open the window',
          ipa: '[ˈoʊ.pən ðə ˈwɪn.doʊ]',
     },
     {
          topic: 'actions',
          image: 'assets/images/close_the_window.jpg',
          word: 'close the window',
          ipa: '[kloʊz ðə ˈwɪn.doʊ]',
     },
     {
          topic: 'actions',
          image: 'assets/images/do_puzzles.jpg',
          word: 'do puzzles',
          ipa: '[duː ˈpʌz.əls]',
     },
     {
          topic: 'actions',
          image: 'assets/images/play_ball_games.jpg',
          word: 'play ball games',
          ipa: '[pleɪ bɑːl ɡeɪms]',
     },
     {
          topic: 'actions',
          image: 'assets/images/play_chess.jpg',
          word: 'play chess',
          ipa: '[pleɪ chess]',
     },
     {
          topic: 'actions',
          image: 'assets/images/play_tennis.jpg',
          word: 'play tennis',
          ipa: '[pleɪ ˈten.ɪs]',
     },
     {
          topic: 'actions',
          image: 'assets/images/play_football.jpg',
          word: 'play football',
          ipa: '[pleɪ ˈfʊt.bɑːl]',
     },
     {
          topic: 'actions',
          image: 'assets/images/play_basketball.jpg',
          word: 'play basketball',
          ipa: '[pleɪ ˈbæs.kət.bɑːl/]',
     },
     {
          topic: 'actions',
          image: 'assets/images/play_baseball.jpg',
          word: 'play baseball',
          ipa: '[pleɪ ˈbeɪs.bɑːl]',
     },
     {
          topic: 'actions',
          image: 'assets/images/write_words.jpg',
          word: 'write words',
          ipa: '[raɪt wɝːd]',
     },
     {
          topic: 'actions',
          image: 'assets/images/play_the_piano.jpeg',
          word: 'play the piano',
          ipa: '[pleɪ ðə piˈæn.oʊ]',
     },
     {
          topic: 'actions',
          image: 'assets/images/play_the_flute.jpg',
          word: 'play the flute',
          ipa: '[pleɪ ðə fluːt]',
     },
     {
          topic: 'actions',
          image: 'assets/images/play_the_fiddle.jpg',
          word: 'play the flute',
          ipa: '[pleɪ ðə ˈfɪd.əl]',
     },
     {
          topic: 'actions',
          image: 'assets/images/play_the_violin.jpg',
          word: 'play the violin',
          ipa: '[pleɪ ðə ˌvaɪəˈlɪn]',
     },
     {
          topic: 'actions',
          image: 'assets/images/draw_a_picture.jpg',
          word: 'draw a picture',
          ipa: '[drɑː ə ˈpɪk.tʃɚ]',
     },
     {
          topic: 'actions',
          image: 'assets/images/play_the_accordion.jpg',
          word: 'play the accordion',
          ipa: '[pleɪ ðə əˈkɔːr.di.ən/]',
     },
     {
          topic: 'actions',
          image: 'assets/images/play_with_balloons.jpg',
          word: 'play with balloons',
          ipa: '[pleɪ wɪð bəˈluːns]',
     },
     {
          topic: 'actions',
          image: 'assets/images/play_with.jpg',
          word: 'play with',
          ipa: '[pleɪ wɪð]',
     },
     {
          topic: 'actions',
          image: 'assets/images/relay_race.jpg',
          word: 'relay race',
          ipa: '[ˈriː.leɪ reɪs]',
     },
     {
          topic: 'actions',
          image: 'assets/images/turn_green.jpg',
          word: 'turn green',
          ipa: '[tɝːn ɡriːn]',
     },
     {
          topic: 'actions',
          image: 'assets/images/listen_to_music.jpg',
          word: 'listen to music',
          ipa: '[ˈlɪs.ən tə ˈmjuː.zɪk]',
     },
     {
          topic: 'actions',
          image: 'assets/images/turn_red.jpg',
          word: 'turn red',
          ipa: '[tɝːn red]',
     },
     {
          topic: 'actions',
          image: 'assets/images/play_games.jpg',
          word: 'play games',
          ipa: '[pleɪ ɡeɪms]',
     },
     {
          topic: 'actions',
          image: 'assets/images/play_cards.jpg',
          word: 'play cards',
          ipa: '[pleɪ kɑːrds]',
     },
     {
          topic: 'actions',
          image: 'assets/images/come_out.jpg',
          word: 'come out',
          ipa: '[kʌm aʊt]',
     },
     {
          topic: 'actions',
          image: 'assets/images/watch_a_movie.jpg',
          word: 'watch a movie',
          ipa: '[wɑːtʃ ə ˈmuː.vi]',
     },
     {
          topic: 'actions',
          image: 'assets/images/do_the_homework.jpg',
          word: 'do homework',
          ipa: '[duː ˈhoʊm.wɝːk]',
     },
     {
          topic: 'actions',
          image: 'assets/images/fly_a_kite.jpg',
          word: 'fly a kite',
          ipa: '[flaɪ ə kaɪt]',
     },
     {
          topic: 'actions',
          image: 'assets/images/go_skating.jpg',
          word: 'go skating',
          ipa: '[ɡoʊ ˈskeɪ.t̬ɪŋ]',
     },
     {
          topic: 'actions',
          image: 'assets/images/go_boating.jpg',
          word: 'go boating',
          ipa: '[ɡoʊ ˈboʊ.t̬ɪŋ]',
     },
     {
          topic: 'actions',
          image: 'assets/images/make_a_card.jpg',
          word: 'make a card',
          ipa: '[meɪk ə card]',
     },
     {
          topic: 'actions',
          image: 'assets/images/plant_trees.jpg',
          word: 'plant trees',
          ipa: '[plænt triːs]',
     },
     {
          topic: 'animals',
          image: 'assets/images/cat.jpg',
          word: 'cat',
          ipa: '[kæt]',
     },
     {
          topic: 'animals',
          image: 'assets/images/dog.jpg',
          word: 'dog',
          ipa: '[dɑːɡ]',
     },
     {
          topic: 'animals',
          image: 'assets/images/cow.jpg',
          word: 'cow',
          ipa: '[kaʊ]',
     },
     {
          topic: 'animals',
          image: 'assets/images/kitten.jpg',
          word: 'kitten',
          ipa: '[ˈkɪt̬.ən]',
     },
     {
          topic: 'animals',
          image: 'assets/images/mouse.jpg',
          word: 'mouse',
          ipa: '[maʊs]',
     },
     {
          topic: 'animals',
          image: 'assets/images/tiger.jpg',
          word: 'tiger',
          ipa: '[ˈtaɪ.ɡɚ]',
     },
     {
          topic: 'animals',
          image: 'assets/images/fish.jpg',
          word: 'fish',
          ipa: '[fɪʃ]',
     },
     {
          topic: 'animals',
          image: 'assets/images/rabbit.jpg',
          word: 'rabbit',
          ipa: '[ˈræb.ɪt]',
     },
     {
          topic: 'animals',
          image: 'assets/images/snake.jpg',
          word: 'snake',
          ipa: '[sneɪk]',
     },
     {
          topic: 'animals',
          image: 'assets/images/lion.jpg',
          word: 'lion',
          ipa: '[ˈlaɪ.ən]',
     },
     {
          topic: 'animals',
          image: 'assets/images/deer.jpg',
          word: 'deer',
          ipa: '[dɪr]',
     },
     {
          topic: 'animals',
          image: 'assets/images/fox.jpg',
          word: 'fox',
          ipa: '[fɑːks]',
     },
     {
          topic: 'animals',
          image: 'assets/images/zebra.jpg',
          word: 'zebra',
          ipa: '[ˈziː.brə]',
     },
     {
          topic: 'animals',
          image: 'assets/images/ox.jpg',
          word: 'ox',
          ipa: '[ɑːks]',
     },
     {
          topic: 'animals',
          image: 'assets/images/bee.jpg',
          word: 'bee',
          ipa: '[biː]',
     },
     {
          topic: 'animals',
          image: 'assets/images/elephant.jpg',
          word: 'elephant',
          ipa: '[ˈel.ə.fənt]',
     },
     {
          topic: 'animals',
          image: 'assets/images/turtle.jpg',
          word: 'turtle',
          ipa: '[ˈtɝː.t̬əl]',
     },
     {
          topic: 'animals',
          image: 'assets/images/monkey.jpg',
          word: 'monkey',
          ipa: '[ˈmʌŋ.ki]',
     },
     {
          topic: 'animals',
          image: 'assets/images/duck.jpg',
          word: 'duck',
          ipa: '[dʌk]',
     },
     {
          topic: 'animals',
          image: 'assets/images/bird.jpg',
          word: 'bird',
          ipa: '[bɝːd]',
     },
     {
          topic: 'animals',
          image: 'assets/images/panda.jpg',
          word: 'panda',
          ipa: '[ˈpæn.də]',
     },
     {
          topic: 'animals',
          image: 'assets/images/horse.jpg',
          word: 'horse',
          ipa: '[hɔːrs]',
     },
     {
          topic: 'clothes',
          image: 'assets/images/sweater.jpg',
          word: 'sweater',
          ipa: '[ˈswet̬.ɚ]',
     },
     {
          topic: 'clothes',
          image: 'assets/images/cap.jpg',
          word: 'cap',
          ipa: '[kæp]',
     },
     {
          topic: 'clothes',
          image: 'assets/images/coat.jpg',
          word: 'coat',
          ipa: '[koʊt]',
     },
     {
          topic: 'clothes',
          image: 'assets/images/tie.jpg',
          word: 'tie',
          ipa: '[taɪ]',
     },
     {
          topic: 'clothes',
          image: 'assets/images/shoe.jpg',
          word: 'shoe',
          ipa: '[ʃuː]',
     },
     {
          topic: 'clothes',
          image: 'assets/images/shoes.jpg',
          word: 'shoes',
          ipa: '[ʃuːs]',
     },
     {
          topic: 'clothes',
          image: 'assets/images/jacket.jpg',
          word: 'jacket',
          ipa: '[ˈdʒæk.ɪt]',
     },
     {
          topic: 'clothes',
          image: 'assets/images/jeans.jpg',
          word: 'jeans',
          ipa: '[dʒiːnz]',
     },
     {
          topic: 'clothes',
          image: 'assets/images/pants.jpg',
          word: 'pants',
          ipa: '[pænts]',
     },
     {
          topic: 'clothes',
          image: 'assets/images/scarf.jpg',
          word: 'scarf',
          ipa: '[skɑːrf]',
     },
     {
          topic: 'clothes',
          image: 'assets/images/shirt.jpg',
          word: 'shirt',
          ipa: '[ʃɝːt]',
     },
     {
          topic: 'clothes',
          image: 'assets/images/skirt.jpg',
          word: 'skirt',
          ipa: '[skɝːt]',
     },
     {
          topic: 'clothes',
          image: 'assets/images/socks.jpg',
          word: 'socks',
          ipa: '[sɑːks]',
     },
     {
          topic: 'clothes',
          image: 'assets/images/vest.jpg',
          word: 'vest',
          ipa: '[vest]',
     },
     {
          topic: 'clothes',
          image: 'assets/images/uniform.jpg',
          word: 'uniform',
          ipa: '[ˈjuː.nə.fɔːrm]',
     },
     {
          topic: 'clothes',
          image: 'assets/images/gloves.jpg',
          word: 'gloves',
          ipa: '[ɡlʌvs]',
     },
     {
          topic: 'seasons',
          image: 'assets/images/summer.jpg',
          word: 'summer',
          ipa: '[ˈsʌm.ɚ]',
     },
     {
          topic: 'seasons',
          image: 'assets/images/winter.jpg',
          word: 'winter',
          ipa: '[ˈwɪn.t̬ɚ]',
     },
     {
          topic: 'seasons',
          image: 'assets/images/spring.jpg',
          word: 'spring',
          ipa: '[sprɪŋ]',
     },
     {
          topic: 'seasons',
          image: 'assets/images/fall.jpg',
          word: 'fall/autumn',
          ipa: '[fɑːl / ˈɑː.t̬əm]',
     },
     {
          topic: 'countries',
          image: 'assets/images/china.jpg',
          word: 'China',
          ipa: '[ˈtʃaɪ.nə]',
     },
     {
          topic: 'countries',
          image: 'assets/images/canada.jpg',
          word: 'Canada',
          ipa: '[ˈkæn.ə.də]',
     },
     {
          topic: 'countries',
          image: 'assets/images/america.jpg',
          word: 'America',
          ipa: '[əˈmer.ɪ.kə]',
     },
     {
          topic: 'countries',
          image: 'assets/images/britain.jpg',
          word: 'Britain',
          ipa: '[ˈbrɪt.ən]',
     },
     {
          topic: 'countries',
          image: 'assets/images/japan.jpg',
          word: 'Japan',
          ipa: '[dʒəˈpæn]',
     },
     {
          topic: 'food',
          image: 'assets/images/biscuits.jpg',
          word: 'biscuits',
          ipa: '[ˈbɪs.kɪts]',
     },
     {
          topic: 'food',
          image: 'assets/images/bread.jpg',
          word: 'bread',
          ipa: '[bred]',
     },
     {
          topic: 'food',
          image: 'assets/images/cherry_pie.jpg',
          word: 'cherry pie',
          ipa: '[ˈtʃer.i paɪ]',
     },
     {
          topic: 'food',
          image: 'assets/images/chicken.jpg',
          word: 'chicken',
          ipa: '[ˈtʃɪk.ɪn]',
     },
     {
          topic: 'food',
          image: 'assets/images/chocolate.jpg',
          word: 'chocolate',
          ipa: '[ˈtʃɑːk.lət]',
     },
     {
          topic: 'food',
          image: 'assets/images/cookbook.jpg',
          word: 'cookbook',
          ipa: '[ˈkʊk.bʊk]',
     },
     {
          topic: 'food',
          image: 'assets/images/cooked_fish.jpg',
          word: 'fish',
          ipa: '[fɪʃ]',
     },
     {
          topic: 'food',
          image: 'assets/images/egg.jpg',
          word: 'egg',
          ipa: '[eɡ]',
     },
     {
          topic: 'food',
          image: 'assets/images/hot_dog.jpg',
          word: 'hot dog',
          ipa: '[ˈhɑːt ˌdɑːɡ]',
     },
     {
          topic: 'food',
          image: 'assets/images/ice_cream.jpg',
          word: 'ice cream',
          ipa: '[ˈaɪs ˌkriːm]',
     },
     {
          topic: 'food',
          image: 'assets/images/jam.jpg',
          word: 'jam',
          ipa: '[jæm]',
     },
     {
          topic: 'food',
          image: 'assets/images/noodles.jpg',
          word: 'noodles',
          ipa: '[ˈnuː.dəls]',
     },
     {
          topic: 'food',
          image: 'assets/images/nuts.jpg',
          word: 'nuts',
          ipa: '[nʌts]',
     },
     {
          topic: 'food',
          image: 'assets/images/oil.jpg',
          word: 'oil',
          ipa: '[ɔɪl]',
     },
     {
          topic: 'food',
          image: 'assets/images/pizza.jpg',
          word: 'pizza',
          ipa: '[ˈpiːt.sə]',
     },
     {
          topic: 'food',
          image: 'assets/images/rice.jpg',
          word: 'rice',
          ipa: '[raɪs]',
     },
     {
          topic: 'food',
          image: 'assets/images/sweet_potatoes.jpg',
          word: 'sweet potatoes',
          ipa: '[ˌswiːt pəˈteɪ.t̬oʊs]',
     },
     {
          topic: 'food',
          image: 'assets/images/tofu.jpg',
          word: 'tofu',
          ipa: '[ˈtoʊ.fuː]',
     },
     {
          topic: 'weekdays',
          image: 'assets/images/monday.jpg',
          word: 'Monday',
          ipa: '[ˈmʌn.deɪ]',
     },
     {
          topic: 'weekdays',
          image: 'assets/images/tuesday.jpg',
          word: 'Tuesday',
          ipa: '[ˈtuːz.deɪ]',
     },
     {
          topic: 'weekdays',
          image: 'assets/images/wednesday.jpg',
          word: 'Wednesday',
          ipa: '[ˈwenz.deɪ]',
     },
     {
          topic: 'weekdays',
          image: 'assets/images/thursday.jpg',
          word: 'Thursday',
          ipa: '[ˈθɝːz.deɪ]',
     },
     {
          topic: 'weekdays',
          image: 'assets/images/friday.jpg',
          word: 'Friday',
          ipa: '[ˈfraɪ.deɪ]',
     },
     {
          topic: 'weekends',
          image: 'assets/images/saturday.jpg',
          word: 'Saturday',
          ipa: '[ˈsæt̬.ɚ.deɪ]',
     },
     {
          topic: 'weekends',
          image: 'assets/images/sunday.jpg',
          word: 'Sunday',
          ipa: '[ˈsʌn.deɪ]',
     },
     {
          topic: 'months',
          image: 'assets/images/april.jpg',
          word: 'April',
          ipa: '[ˈeɪ.prəl]',
     },
     {
          topic: 'months',
          image: 'assets/images/august.jpg',
          word: 'August',
          ipa: '[ɑːˈɡʌst]',
     },
     {
          topic: 'months',
          image: 'assets/images/january.jpg',
          word: 'January',
          ipa: '[ˈdʒæn.ju.er.i]',
     },
     {
          topic: 'months',
          image: 'assets/images/july.jpg',
          word: 'July',
          ipa: '[dʒʊˈlaɪ]',
     },
     {
          topic: 'months',
          image: 'assets/images/june.jpg',
          word: 'June',
          ipa: '[dʒuːn]',
     },
     {
          topic: 'months',
          image: 'assets/images/february.jpg',
          word: 'February',
          ipa: '[ˈfeb.ruː.er.i]',
     },
     {
          topic: 'months',
          image: 'assets/images/december.jpg',
          word: 'December',
          ipa: '[dɪˈsem.bɚ]',
     },
     {
          topic: 'months',
          image: 'assets/images/march.jpg',
          word: 'March',
          ipa: '[mɑːrtʃ]',
     },
     {
          topic: 'months',
          image: 'assets/images/may.jpg',
          word: 'May',
          ipa: '[meɪ]',
     },
     {
          topic: 'months',
          image: 'assets/images/november.jpg',
          word: 'November',
          ipa: '[noʊˈvem.bɚ]',
     },
     {
          topic: 'months',
          image: 'assets/images/october.jpg',
          word: 'October',
          ipa: '[ɑːkˈtoʊ.bɚ]',
     },
     {
          topic: 'months',
          image: 'assets/images/september.jpg',
          word: 'September',
          ipa: '[sepˈtem.bɚ]',
     },
     {
          topic: 'drinks',
          image: 'assets/images/apple_juice.jpg',
          word: 'apple juice',
          ipa: '[ˈæp.əl dʒuːs]',
     },
     {
          topic: 'drinks',
          image: 'assets/images/orange_juice.jpg',
          word: 'orange juice',
          ipa: '[ˈɔːr.ɪndʒ dʒuːs]',
     },
     {
          topic: 'drinks',
          image: 'assets/images/coffee.jpg',
          word: 'coffee',
          ipa: '[ˈkɑː.fi]',
     },
     {
          topic: 'drinks',
          image: 'assets/images/tea.jpg',
          word: 'tea',
          ipa: '[tiː]',
     },
     {
          topic: 'drinks',
          image: 'assets/images/coke.jpg',
          word: 'coke',
          ipa: '[koʊk]',
     },
     {
          topic: 'drinks',
          image: 'assets/images/juice.jpg',
          word: 'juice',
          ipa: '[dʒuːs]',
     },
     {
          topic: 'drinks',
          image: 'assets/images/lemonade.jpg',
          word: 'lemonade',
          ipa: '[ˌlem.əˈneɪd]',
     },
     {
          topic: 'drinks',
          image: 'assets/images/milk.jpg',
          word: 'milk',
          ipa: '[mɪlk]',
     },
     {
          topic: 'drinks',
          image: 'assets/images/soy_milk.jpg',
          word: 'soy milk',
          ipa: '[ˌsɔɪ mɪlk]',
     },
     {
          topic: 'drinks',
          image: 'assets/images/yogurt.jpg',
          word: 'yogurt',
          ipa: '[ˈjoʊ.ɡɚt]',
     },
     {
          topic: 'school',
          image: 'assets/images/backpack.jpg',
          word: 'backpack',
          ipa: '[ˈbæk.pæk]',
     },
     {
          topic: 'school',
          image: 'assets/images/bag.jpg',
          word: 'bag',
          ipa: '[bæɡ]',
     },
     {
          topic: 'school',
          image: 'assets/images/blackboard.jpg',
          word: 'blackboard',
          ipa: '[ˈblækbɔːrd]',
     },
     {
          topic: 'school',
          image: 'assets/images/book.jpg',
          word: 'book',
          ipa: '[bʊk]',
     },
     {
          topic: 'school',
          image: 'assets/images/eraser.jpg',
          word: 'eraser',
          ipa: '[ɪˈreɪ.sɚ]',
     },
     {
          topic: 'school',
          image: 'assets/images/brush.jpg',
          word: 'brush',
          ipa: '[brʌʃ]',
     },
     {
          topic: 'school',
          image: 'assets/images/dictionary.jpg',
          word: 'dictionary',
          ipa: '[ˈdɪk.ʃən.er.i]',
     },
     {
          topic: 'school',
          image: 'assets/images/glue.jpg',
          word: 'glue',
          ipa: '[ɡluː]',
     },
     {
          topic: 'school',
          image: 'assets/images/calculator.jpg',
          word: 'calculator',
          ipa: '[ˈkæl.kjə.leɪ.t̬ɚ]',
     },
     {
          topic: 'school',
          image: 'assets/images/desk.jpg',
          word: 'desk',
          ipa: '[desk]',
     },
     {
          topic: 'school',
          image: 'assets/images/map.jpg',
          word: 'map',
          ipa: '[mæp]',
     },
     {
          topic: 'school',
          image: 'assets/images/flag.jpg',
          word: 'flag',
          ipa: '[flæg]',
     },
     {
          topic: 'school',
          image: 'assets/images/marker.jpg',
          word: 'marker',
          ipa: '[ˈmɑːr.kɚ]',
     },
     {
          topic: 'school',
          image: 'assets/images/pen.jpg',
          word: 'pen',
          ipa: '[pen]',
     },
     {
          topic: 'school',
          image: 'assets/images/pencil.jpg',
          word: 'pencil',
          ipa: '[ˈpen.səl]',
     },
     {
          topic: 'school',
          image: 'assets/images/pencil_case.jpg',
          word: 'pensil case',
          ipa: '[ˈpen.səl ˌkeɪs]',
     },
     {
          topic: 'school',
          image: 'assets/images/ruler.jpg',
          word: 'ruler',
          ipa: '[ˈruː.lɚ]',
     },
     {
          topic: 'school',
          image: 'assets/images/scissors.jpg',
          word: 'scissors',
          ipa: '[ˈsɪz.ɚz]',
     },
     {
          topic: 'school',
          image: 'assets/images/stickers.jpg',
          word: 'stickers',
          ipa: '[ˈstɪk.ɚ]',
     },
     {
          topic: 'holidays',
          image: 'assets/images/army_day.jpg',
          word: 'Army Day',
          ipa: '[ˈɑːr.miˌdeɪ]',
     },
     {
          topic: 'holidays',
          image: 'assets/images/new_year_day.jpg',
          word: "New Year's Day",
          ipa: '[ˌnuː ˈjɪrsˌdeɪ]',
     },
     {
          topic: 'holidays',
          image: 'assets/images/earth_day.jpg',
          word: 'Tree-planting Day/ The Earth Day',
          ipa: '[ˈtriːˌplæntɪŋˌdeɪ / ðiːˈɝːθˌdeɪ]',
     },
     {
          topic: 'holidays',
          image: 'assets/images/national_day.jpg',
          word: 'National Day',
          ipa: '[ˈnæʃ.nəlˌdeɪ]',
     },
     {
          topic: 'holidays',
          image: 'assets/images/women_day.jpg',
          word: "Women's Day",
          ipa: '[ˈwɪm.ɪnsˌdeɪ]',
     },
     {
          topic: 'holidays',
          image: 'assets/images/teachers_day.jpg',
          word: "Teachers' Day",
          ipa: '[ˈtiː.tʃɚsˌdeɪ]',
     },
     {
          topic: 'holidays',
          image: 'assets/images/thanksgiving.jpg',
          word: 'Thanksgiving',
          ipa: '[ˌθæŋksˈɡɪv.ɪŋ]',
     },
     {
          topic: 'holidays',
          image: 'assets/images/mothers_day.jpg',
          word: "Mother's Day",
          ipa: '[ˈmʌð.ɚsˌdeɪ]',
     },
     {
          topic: 'holidays',
          image: 'assets/images/may_day.jpg',
          word: 'May Day/ Labor Day',
          ipa: '[ˈmeɪˌdeɪ /ˈleɪ.bɚˌdeɪ]',
     },
     {
          topic: 'holidays',
          image: 'assets/images/fathers_day.jpg',
          word: "Father's Day",
          ipa: '[ˈfɑː.ðɚsˌdeɪ]',
     },
     {
          topic: 'holidays',
          image: 'assets/images/children_day.jpg',
          word: "Children's Day",
          ipa: '[ˈtʃɪl.drənˌdeɪ]',
     },
     {
          topic: 'holidays',
          image: 'assets/images/christmas_day.jpg',
          word: 'Christmas Day',
          ipa: '[ˈkrɪs.məsˌdeɪ]',
     },
     {
          topic: 'holidays',
          image: 'assets/images/chinese_new_year.jpg',
          word: 'Chinese New Year',
          ipa: '[ˌtʃaɪ.niːz ˌnuː ˈjɪr]',
     },
     {
          topic: 'vegetables',
          image: 'assets/images/vegetables.jpg',
          word: 'vegetables',
          ipa: '[ˈvedʒ.tə.bəls]',
     },
     {
          topic: 'vegetables',
          image: 'assets/images/tomato.jpg',
          word: 'tomato',
          ipa: '[təˈmeɪ.t̬oʊ]',
     },
     {
          topic: 'vegetables',
          image: 'assets/images/potato.jpg',
          word: 'potato',
          ipa: '[pəˈteɪ.t̬oʊ]',
     },
     {
          topic: 'vegetables',
          image: 'assets/images/carrot.jpg',
          word: 'carrot',
          ipa: '[ˈker.ət]',
     },
     {
          topic: 'vegetables',
          image: 'assets/images/cucumber.jpg',
          word: 'cucumber',
          ipa: '[ˈkjuː.kʌm.bɚ]',
     },
];

const card = document.querySelector('.card');
const cardNextButton = document.querySelector('#card__next');
const btnVoiceUs = document.querySelector("#voice__option--US");
const btnVoiceGb = document.querySelector("#voice__option--GB");

// Flip card on the click

card.addEventListener('click', function (e) {
     e.preventDefault();
     card.classList.toggle('is-flipped');
});

let currentWord;
btnVoiceUs.addEventListener('click', clickHandlerUs);
btnVoiceGb.addEventListener('click', clickHandlerGb);

/**
 * Add voice on click
 * for US
 */

function clickHandlerUs(event) {
     event.stopPropagation()
     let msg = new SpeechSynthesisUtterance();
     msg.lang = 'en-US';
     msg.text = currentWord;
     speechSynthesis.speak(msg);
}

/**
 * Add voice on click
 * for GB
 */

function clickHandlerGb(event) {
     event.stopPropagation()
     let msg = new SpeechSynthesisUtterance();
     msg.lang = 'en-GB';
     msg.text = currentWord;
     speechSynthesis.speak(msg);
}


// Wait for the DOM to finish loading before running the quiz

document.addEventListener('DOMContentLoaded', function () {
     generateCard();

     // Change Card on click

     cardNextButton.addEventListener('click', generateCard);

     // Click enter to go to another card

     cardNextButton.addEventListener('keydown', function (event) {
          if (event.key === 'Enter') {
               generateCard();
          }
     });
     
});



/**
 *
 * Generate random index for the FC
 */

const createRandom = function () {
     return Math.floor(Math.random() * flashcards.length);
};

/**
 * Function generates the Flash Card for the user
 * with all visible elements
 */

let temporaryCardsArray = [];


const generateCard = function () {
     if (flashcards.length === 0) {
          flashcards.push.apply(flashcards, temporaryCardsArray);
     }

     let cardTopic = document.getElementsByClassName('topic')[0];
     let cardImage = document.getElementsByClassName('image')[0];
     let cardWord = document.getElementsByClassName('english__word')[0];
     let CardIpa = document.getElementsByClassName('english__ipa')[0];

     let randomIndex = createRandom();

     cardTopic.innerText = flashcards[randomIndex].topic;
     cardImage.innerHTML = `<img src = ${flashcards[randomIndex].image}>`;

     cardWord.innerText = flashcards[randomIndex].word;
     CardIpa.innerText = flashcards[randomIndex].ipa;

     currentWord = flashcards[randomIndex].word;
     



     card.classList.remove('is-flipped');
     document.querySelector('.image').style.border = '1px solid #200549';
     document.querySelector('.image').style.width = '50%';
     document.querySelector('.image').style.borderRadius = '0.7em';
     temporaryCardsArray.push(flashcards[randomIndex]);
     flashcards.splice([randomIndex], 1);
};



