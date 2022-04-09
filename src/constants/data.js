import images from './images';

const wines = [
  {
    title: 'Chapel Hill Shiraz',
    price: '$56',
    tags: 'AU | Bottle',
  },
  {
    title: 'Catena Malbee',
    price: '$59',
    tags: 'AU | Bottle',
  },
  {
    title: 'La Vieillw Rose',
    price: '$44',
    tags: 'FR | 750 ml',
  },
  {
    title: 'Rhino Pale Ale',
    price: '$31',
    tags: 'CA | 750 ml',
  },
  {
    title: 'Irish Guinness',
    price: '$26',
    tags: 'IE | 750 ml',
  },
];

const cocktails = [
  {
    title: 'Aperol Sprtiz',
    price: '$20',
    tags: 'Aperol | Villa Marchesi prosecco | soda | 30 ml',
  },
  {
    title: "Dark 'N' Stormy",
    price: '$16',
    tags: 'Dark rum | Ginger beer | Slice of lime',
  },
  {
    title: 'Daiquiri',
    price: '$10',
    tags: 'Rum | Citrus juice | Sugar',
  },
  {
    title: 'Old Fashioned',
    price: '$31',
    tags: 'Bourbon | Brown sugar | Angostura Bitters',
  },
  {
    title: 'Negroni',
    price: '$26',
    tags: 'Gin | Sweet Vermouth | Campari | Orange garnish',
  },
];

const awards = [
  {
    imgUrl: images.award02,
    title: 'Michael Cowgill',
    subtitle: 'Best Hookah in town, cozy and comfortable. I love it!',
  },
  {
    imgUrl: images.award01,
    title: 'Hani Alani',
    subtitle: 'Very nice and cozy place. You will enjoy the hookah and drinks. They have a very nice service as well 🤍🌸.',
  },
  {
    imgUrl: images.award05,
    title: 'AAA Hospitality',
    subtitle: 'Interior is amazing, art collection takes you somewhere else...',
  },
  {
    imgUrl: images.award03,
    title: 'Semen Gagarin',
    subtitle: 'Been in a city for a while now... Keep coming back to this place.',
  },
];

export default { wines, cocktails, awards };
