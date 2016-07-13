import Ember from 'ember';

export function styleString(params/*, hash*/) {
  var color = params[0];
  if (color) {
    var r = color.get('r');
    var g = color.get('g');
    var b = color.get('b');
    if (r && g && b) {
      return Ember.String.htmlSafe(`background-color:rgb(${r},${g},${b})`);
    }
  }
  return Ember.String.htmlSafe('background-color: transparent; border: 1px solid #586073');
}

export default Ember.Helper.helper(styleString);
