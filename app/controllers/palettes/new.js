import Ember from 'ember';

export default Ember.Controller.extend({
  focusColor: null,
  actions: {
    setFocusColor(color) {
      this.set('focusColor', color);
    },
    savePalette() {
      var palette = this.get('model');
      palette.save().then(() => {this.transitionToRoute('palettes.index');}, (err) => {console.log(err);});
    }
  }
});
