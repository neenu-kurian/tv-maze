import type { CategorizedShows } from '@/types';

export const showsByCategory: CategorizedShows = {
  Music: [
    {
      id: 8,
      name: 'Glee',
      genres: ['Drama', 'Music', 'Romance'],
      status: 'Ended',
      rating: { average: 6.7 },
      image: {
        original: 'https://static.tvmaze.com/uploads/images/original_untouched/0/73.jpg',
      },
      cast: [],
      runtime: 60,
      premiered: '2009-05-19',
      summary:
        '<p><b>Glee </b>is a musical comedy about a group of ambitious and talented young adults in search of strength, acceptance and, ultimately, their voice.</p>',
    },
    {
      id: 53,
      name: 'Nashville',
      genres: ['Drama', 'Music', 'Romance'],
      status: 'Ended',
      rating: { average: 7.4 },
      image: {
        original: 'https://static.tvmaze.com/uploads/images/original_untouched/89/224913.jpg',
      },
      cast: [],
      runtime: 60,
      premiered: '2012-10-10',
      summary:
        "<p><b>Nashville</b> is set against the backdrop of the city's music scene and follows Rayna Jaymes and Juliette Barnes. Both women face personal and professional challenges as they navigate their paths as artists and individuals. Surrounding them, and often complicating their lives, are their family, friends and, in some cases, lovers, as well as the up-and-coming performers and songwriters trying to get ahead in the business. Music City can mean so many things to different people. In Nashville, musicians and songwriters are at the heart of the storm driven by their own ambitions. Some are fueled by their creativity and passion for fame. Others struggle to cope with the pressures of success and are doing everything in their power to stay on top.</p>",
    },
  ],
};

export const showDetails = {
  id: 179,
  url: 'https://www.tvmaze.com/shows/179/the-wire',
  name: 'The Wire',
  language: 'English',
  genres: ['Drama', 'Crime'],
  status: 'Ended',
  rating: { average: 8.9 },
  image: {
    medium: 'https://static.tvmaze.com/uploads/images/medium_portrait/504/1260189.jpg',
    original: 'https://static.tvmaze.com/uploads/images/original_untouched/504/1260189.jpg',
  },
  summary:
    "<p>The first season of <b>The Wire</b> (2002) concentrated on the often-futile efforts of police to infiltrate a West Baltimore drug ring headed by Avon Barksdale and his lieutenant, Stringer Bell. In Seasons Two and Three, as the Barksdale investigation escalated, new storylines involving pressures on the working class and the city's political leadership were introduced. Season Four focused on the stories of several young boys in the public school system, struggling with problems at home and the lure of the corner - set against the rise of a new drug empire in West Baltimore and a new Mayor in City Hall. The fifth and final season of <i>The Wire</i> centers on the media's role in addressing - or failing to address - the fundamental political, economic and social realities depicted over the course of the series, while also resolving storylines of the numerous characters woven throughout the narrative arc of the show.</p>",
  cast: [
    {
      person: {
        id: 9696,
        url: 'https://www.tvmaze.com/people/9696/lance-reddick',
        name: 'Lance Reddick',

        image: {
          medium: 'https://static.tvmaze.com/uploads/images/medium_portrait/147/369752.jpg',
          original: 'https://static.tvmaze.com/uploads/images/original_untouched/147/369752.jpg',
        },
      },
      character: {
        id: 48960,
        url: 'https://www.tvmaze.com/characters/48960/the-wire-lt-cedric-daniels',
        name: 'Lt. Cedric Daniels',
        image: {
          medium: 'https://static.tvmaze.com/uploads/images/medium_portrait/94/237209.jpg',
          original: 'https://static.tvmaze.com/uploads/images/original_untouched/94/237209.jpg',
        },
      },
    },
    {
      person: {
        id: 20082,
        url: 'https://www.tvmaze.com/people/20082/sonja-sohn',
        name: 'Sonja Sohn',
        image: {
          medium: 'https://static.tvmaze.com/uploads/images/medium_portrait/4/10304.jpg',
          original: 'https://static.tvmaze.com/uploads/images/original_untouched/4/10304.jpg',
        },
      },
      character: {
        id: 48965,
        url: 'https://www.tvmaze.com/characters/48965/the-wire-det-shakima-kima-greggs',
        name: 'Det. Shakima "Kima" Greggs',
      },
    },
  ],
};

export const CastMemberProp = {
  person: {
    id: 20082,
    url: 'https://www.tvmaze.com/people/20082/sonja-sohn',
    name: 'Sonja Sohn',
    image: {
      medium: 'https://static.tvmaze.com/uploads/images/medium_portrait/4/10304.jpg',
      original: 'https://static.tvmaze.com/uploads/images/original_untouched/4/10304.jpg',
    },
  },
  character: {
    id: 48965,
    url: 'https://www.tvmaze.com/characters/48965/the-wire-det-shakima-kima-greggs',
    name: 'Det. Shakima "Kima" Greggs',
  },
};

export const sortOptions = [
  { value: 'rating-desc', label: 'Rating: High to Low' },
  { value: 'rating-asc', label: 'Rating: Low to High' },
];
