import Model from 'ember-data/model';
import attr from 'ember-data/attr';
import Ember from 'ember';
import { belongsTo, hasMany } from 'ember-data/relationships';

export default Model.extend({
  palette: belongsTo('palette', { async: false }),
  r: attr({ defaultValue: 0 }),
  g: attr({ defaultValue: 0 }),
  b: attr({ defaultValue: 0 }),
  styleString: Ember.computed('r', 'g', 'b', function() {
    var r = this.get('r');
    var g = this.get('g');
    var b = this.get('b');
    if (r || g || b) {
      return Ember.String.htmlSafe(`background-color:rgb(${r}, ${g}, ${b})`);
    } else {
      return Ember.String.htmlSafe('background-color:transparent; border:1px solid #586073');
    }
  }),
  labelString: Ember.computed('r', 'g', 'b', function() {
    var r = this.get('r');
    var g = this.get('g');
    var b = this.get('b');
    if (r || g || b) {
      return Ember.String.htmlSafe(`${this.get('r')}, ${this.get('g')}, ${this.get('b')}`);
    } else {
      return '';
    }
  }),
});
