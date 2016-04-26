import Ember from 'ember';

export default Ember.Route.extend({
  model: function(){
    return {
      food: this.store.findAll('food'),
    };
  },
  actions: {
    updateFood: function(food) {
      console.log('Route Action : updateFood');
      food.save().then(() => this.refresh());
    },
    destroyFood: function(food){
      console.log('Route Action : destroyFood');
      food.destroyRecord();
    }
  }
  });
