import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('palettes', function() {
    this.route('new');
    this.route('edit', { path: '/palettes/:palette_id' });
  });
});

export default Router;
