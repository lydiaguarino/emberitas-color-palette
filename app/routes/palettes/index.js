import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    var m = this.store.query('palette', {creator:'Lydia'});
    console.log(m);
    return m;
  }
});
