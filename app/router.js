import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
});

Router.map(function () {
  this.route('sign-up');
  this.route('sign-in');
  this.route('change-password');
  this.route('users');
  this.route('foods');
  this.route('food', function() {
    this.route('freezer');
    this.route('fridge');
  });
});

export default Router;
