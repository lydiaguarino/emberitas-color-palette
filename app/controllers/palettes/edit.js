import Ember from 'ember';

export default Ember.Controller.extend({
  focusColor: null,
  actions: {
    setFocusColor(color) {
      this.set('focusColor', color);
    },
    savePalette() {
      var palette = this.get('model');
      palette.save().then(() => {this.transitionToRoute('palettes.index');}, (err) => {Ember.Logger.log(err);});
    },
    cancel() {
      var palette = this.get('model');
      palette.rollbackAttributes();
      var colors = palette.get('colors');
      colors.forEach((color)=>{
        color.rollbackAttributes();
      });
      this.transitionToRoute('palettes');
    },
    deletePalette() {
      var palette = this.get('model');
      palette.destroyRecord();
      this.transitionToRoute('palettes');
    }
  }
});
