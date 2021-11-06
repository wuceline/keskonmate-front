/*
 On veut afficher les séries dans :
  - page d'accueil
  - page des listes
  - page catalogue
  - page détails d'une série
*/

export default [
  {
    id: 1,
    title: 'Game of Thrones',
    synopsis: 'Il y a très longtemps, à une époque oubliée, une force a détruit l\'équilibre des saisons. Dans un pays où l\'été peut durer plusieurs années et l\'hiver toute une vie, des forces sinistres et surnaturelles se pressent aux portes du Royaume des Sept Couronnes.',
    releaseDate: '2011-01-01',
    image: 'src/assets/pictures/series/game-of-thrones.jpg',
    director: 'D.B. Weiss, David Benioff',
    numberOfSeasons: 8,
    home_order: 4,
    createdAt: '2021-10-27T15:18:38+02:00',
    updatedAt: null,
    genre: [
      {
        id: 1,
        name: 'Drame',
      },
      {
        id: 2,
        name: 'Fantastique',
      },
    ],
    season: [
      {
        id: 1,
        seasonNumber: 1,
      },
      {
        id: 2,
        seasonNumber: 2,
      },
      {
        id: 3,
        seasonNumber: 3,
      },
      {
        id: 4,
        seasonNumber: 4,
      },
      {
        id: 5,
        seasonNumber: 5,
      },
      {
        id: 6,
        seasonNumber: 6,
      },
      {
        id: 7,
        seasonNumber: 7,
      },
      {
        id: 8,
        seasonNumber: 8,
      },
    ],
    actor: [
      {
        id: 1,
        firstname: 'Kit',
        lastname: 'Harrington',
        image: 'src/assets/pictures/actors/kit-harrington.jpg',
      },
      {
        id: 2,
        firstname: 'Emilia',
        lastname: 'Clarke',
        image: 'src/assets/pictures/actors/emilia-clarke.jpg',
      },
      {
        id: 3,
        firstname: 'Peter',
        lastname: 'Dinklage',
        image: 'src/assets/pictures/actors/peter-dinklage.jpg',
      },
    ],
  },
  {
    id: 2,
    title: 'The Office',
    synopsis: 'Le quotidien d\'un groupe d\'employés de bureau dans une fabrique de papier en Pennsylvanie. Michael, le responsable régional, pense être le mec le plus drôle du bureau.',
    releaseDate: '2005-01-01',
    image: 'src/assets/pictures/series/the-office.jpg',
    director: 'Greg Daniels, Paul Lieberstein, Ricky Gervais',
    numberOfSeasons: 9,
    home_order: 1,
    createdAt: '2021-10-27T15:18:38+02:00',
    updatedAt: null,
    genre: [
      {
        id: 3,
        name: 'Humour',
      },
    ],
    season: [
      {
        id: 9,
        seasonNumber: 1,
      },
      {
        id: 10,
        seasonNumber: 2,
      },
      {
        id: 11,
        seasonNumber: 3,
      },
      {
        id: 12,
        seasonNumber: 4,
      },
      {
        id: 13,
        seasonNumber: 5,
      },
      {
        id: 14,
        seasonNumber: 6,
      },
      {
        id: 15,
        seasonNumber: 7,
      },
      {
        id: 16,
        seasonNumber: 8,
      },
      {
        id: 17,
        seasonNumber: 9,
      },
    ],
    actor: [
      {
        id: 4,
        firstname: 'Steve',
        lastname: 'Carell',
        image: 'src/assets/pictures/actors/steve-carell.jpg',
      },
      {
        id: 5,
        firstname: 'Rainn',
        lastname: 'Wilson',
        image: 'src/assets/pictures/actors/rainn-wilson.jpg',
      },
      {
        id: 6,
        firstname: 'Jenna',
        lastname: 'Fischer',
        image: 'src/assets/pictures/actors/jenna-fischer.jpg',
      },
    ],
  },
  {
    id: 3,
    title: 'La Casa de Papel',
    synopsis: 'Huit voleurs font une prise d\'otages dans la Maison royale de la Monnaie d\'Espagne, tandis qu\'un génie du crime manipule la police pour mettre son plan à exécution.',
    releaseDate: '2017-01-01',
    image: 'src/assets/pictures/series/la-casa-de-papel.jpg',
    director: 'Alex Pina',
    numberOfSeasons: 5,
    home_order: 2,
    createdAt: '2021-10-27T15:18:38+02:00',
    updatedAt: null,
    genre: [
      {
        id: 1,
        name: 'Drame',
      },
      {
        id: 4,
        name: 'Thriller',
      },
    ],
    season: [
      {
        id: 18,
        seasonNumber: 1,
      },
      {
        id: 19,
        seasonNumber: 2,
      },
      {
        id: 20,
        seasonNumber: 3,
      },
      {
        id: 21,
        seasonNumber: 4,
      },
      {
        id: 22,
        seasonNumber: 5,
      },
    ],
    actor: [
      {
        id: 7,
        firstname: 'Alvaro',
        lastname: 'Morte',
        image: 'src/assets/pictures/actors/alvaro-morte.jpg',
      },
      {
        id: 8,
        firstname: 'Ursula',
        lastname: 'Corbero',
        image: 'src/assets/pictures/actors/ursula-corbero.jpg',
      },
      {
        id: 9,
        firstname: 'Pedro',
        lastname: 'Alonso',
        image: 'src/assets/pictures/actors/pedro-alonso.jpg',
      },
    ],
  },
  {
    id: 4,
    title: 'The Big Bang Theory',
    synopsis: 'Leonard et Sheldon pourraient vous dire tout ce que vous voudriez savoir à propos de la physique quantique. Mais ils seraient bien incapables de vous expliquer quoi que ce soit sur la vie "réelle", le quotidien ou les relations humaines...',
    releaseDate: '2007-01-01',
    image: 'src/assets/pictures/series/the-big-bang-theory.jpg',
    director: 'Bill Prady, Chuck Lorre',
    numberOfSeasons: 12,
    home_order: 0,
    createdAt: '2021-10-27T15:18:38+02:00',
    updatedAt: null,
    genre: [
      {
        id: 3,
        name: 'Humour',
      },
    ],
    season: [
      {
        id: 23,
        seasonNumber: 1,
      },
      {
        id: 24,
        seasonNumber: 2,
      },
      {
        id: 25,
        seasonNumber: 3,
      },
      {
        id: 26,
        seasonNumber: 4,
      },
      {
        id: 27,
        seasonNumber: 5,
      },
      {
        id: 28,
        seasonNumber: 6,
      },
      {
        id: 29,
        seasonNumber: 7,
      },
      {
        id: 30,
        seasonNumber: 8,
      },
      {
        id: 31,
        seasonNumber: 9,
      },
      {
        id: 32,
        seasonNumber: 10,
      },
      {
        id: 33,
        seasonNumber: 11,
      },
      {
        id: 34,
        seasonNumber: 12,
      },
    ],
    actor: [
      {
        id: 10,
        firstname: 'Jim',
        lastname: 'Parsons',
        image: 'src/assets/pictures/actors/jim-parsons.jpg',
      },
      {
        id: 11,
        firstname: 'Johnny',
        lastname: 'Galecki',
        image: 'src/assets/pictures/actors/johnny-galecki.jpg',
      },
      {
        id: 12,
        firstname: 'Kaley',
        lastname: 'Cuoco',
        image: 'src/assets/pictures/actors/kaley-cuoco.jpg',
      },
    ],
  },
  {
    id: 5,
    title: 'Squid Game',
    synopsis: 'Tentés par un prix alléchant en cas de victoire, des centaines de joueurs désargentés acceptent de s\'affronter lors de jeux pour enfants aux enjeux mortels.',
    releaseDate: '2021-01-01',
    image: 'src/assets/pictures/series/squid-game.jpg',
    director: 'Hwang Dong-hyuk',
    numberOfSeasons: 1,
    home_order: 5,
    createdAt: '2021-10-27T15:18:38+02:00',
    updatedAt: null,
    genre: [
      {
        id: 1,
        name: 'Drame',
      },
      {
        id: 5,
        name: 'Science-Fiction',
      },
      {
        id: 4,
        name: 'Thriller',
      },
    ],
    season: [
      {
        id: 35,
        seasonNumber: 1,
      },
    ],
    actor: [
      {
        id: 13,
        firstname: 'Jung-jae',
        lastname: 'lee',
        image: 'src/assets/pictures/actors/jung-jae-lee.jpg',
      },
      {
        id: 14,
        firstname: 'Park',
        lastname: 'Hae-Soo',
        image: 'src/assets/pictures/actors/park-hae-soo.jpg',
      },
      {
        id: 15,
        firstname: 'Jung',
        lastname: 'Ho-Yeon',
        image: 'src/assets/pictures/actors/jung-ho-yeon.jpg',
      },
    ],
  },
  {
    id: 6,
    title: 'Death Note',
    synopsis: 'Light Yagami, un jeune étudiant surdoué, ramasse un jour le "Death Note", un carnet abandonné par un dieu de la mort, Ryuk, qui apparemment s\'ennuyait dans son monde. Il suffit d\'écrire le nom d\'une personne dans ce carnet, et celle-ci meurt.',
    releaseDate: '2006-01-01',
    image: 'src/assets/pictures/series/death-note.jpg',
    director: '',
    numberOfSeasons: 1,
    home_order: 3,
    createdAt: '2021-10-27T15:18:38+02:00',
    updatedAt: null,
    genre: [
      {
        id: 2,
        name: 'Fantastique',
      },
      {
        id: 4,
        name: 'Thriller',
      },
      {
        id: 6,
        name: 'Animation',
      },
    ],
    season: [
      {
        id: 36,
        seasonNumber: 1,
      },
    ],
    actor: [
      {
        id: 16,
        firstname: 'Mamoru',
        lastname: 'Miyano',
        image: 'src/assets/pictures/actors/unknown-actor.jpg',
      },
      {
        id: 17,
        firstname: 'Shido',
        lastname: 'Nakamura',
        image: 'src/assets/pictures/actors/unknown-actor.jpg',
      },
      {
        id: 18,
        firstname: 'Kappei',
        lastname: 'Yamaguchi',
        image: 'src/assets/pictures/actors/unknown-actor.jpg',
      },
    ],
  },
];
