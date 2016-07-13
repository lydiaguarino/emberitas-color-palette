import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    // add a new palette to our local store
    var newPalette = this.store.createRecord('palette', {});
    // isolate the colors property of our new palette
    var colors = newPalette.get('colors');
    // add five empty color records to the palette
    for (var i=0; i<5; i++) {
      colors.addObject(this.store.createRecord('color', {}));
    }
    return newPalette;
  },
  afterModel(model) {
    // select the first color and make that the active color for editing
    this.controllerFor('palettes.new').set('focusColor', model.get('colors.firstObject'));
  }
});
