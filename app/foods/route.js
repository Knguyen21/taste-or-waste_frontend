import Ember from 'ember';

export default Ember.Route.extend({
  model: function(){
  return {
    food: this.store.findAll('food'),
  };
},
actions: {
  createFood: function(properties){
    console.log('Route Action : createFood');
    this.store.createRecord('food', properties)
      .save().then(()=>console.log('record created'));
  },
  updateFood: function(food) {
    console.log('Route Action : updateFood');
    food.save();
  },
  destroyFood: function(food){
    console.log('Route Action : destroyFood');
    food.destroyRecord();
  }
}
});
