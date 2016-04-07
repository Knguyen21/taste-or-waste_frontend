import Ember from 'ember';

export default Ember.Route.extend({
  model: function(){
    return {
      food: this.store.findAll('food'),
    };
  },
});
