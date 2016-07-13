import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return [
      {
        id: 1,
        creator: 'Lydia',
        name: 'Tropical',
        colors: [
          {r: 217, g: 33, b: 32},
          {r: 231, g: 116, b: 47},
          {r: 223, g: 165, b: 58},
          {r: 117, g: 190, b: 78},
          {r: 109, g: 179, b: 136}
        ]
      },
      {
        id: 2,
        creator: 'Lydia',
        name: 'Cool',
        colors: [
          {r: 70, g: 131, b: 193},
          {r: 63, g: 78, b: 161},
          {r: 120, g: 28, b: 129},
          {r: 0, g: 0, b: 0},
          {r: 238, g: 238, b: 238}
        ]
      },
    ];
  }
});
