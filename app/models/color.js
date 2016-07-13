import Ember from 'ember';
import Model from 'ember-data/model';
import attr from 'ember-data/attr';
import { belongsTo, hasMany } from 'ember-data/relationships';

export default Model.extend({
  r: attr(),
  g: attr(),
  b: attr(),
  palette: belongsTo('palette'),
  style: Ember.computed('r', 'g', 'b', function() {
    let r = this.get('r');
    let g = this.get('g');
    let b = this.get('b');
    if (r && g && b) {
      return `background-color=rgb(${this.get('r')}, ${this.get('g')}, ${this.get('b')})`;
    } else {
      return 'background-color=transparent';
    }
  }),
  label: Ember.computed('r', 'g', 'b', function() {
    let r = this.get('r');
    let g = this.get('g');
    let b = this.get('b');
    if (r && g && b) {
      return `${this.get('r')}, ${this.get('g')}, ${this.get('b')}`;
    } else {
      return '';
    }
  }),
});
