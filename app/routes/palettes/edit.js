import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    return this.get('store').findRecord('palette', params.palette_id);
  },
  afterModel(model) {
    this.controllerFor('palettes.edit').set('focusColor', model.get('colors.firstObject'));
  }
});
