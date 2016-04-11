import Ember from 'ember';

export default Ember.Component.extend({
  filteredFoods: Ember.computed.filter('foods', function(food){
    return food.get('disposal') === this.get('disposalType');
  }),
  listTitle: Ember.computed('disposalType', function(){
    let string = this.get('disposalType');
    return string.charAt(0).toUpperCase() + string.slice(1);
  }),
  actions: {
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
