import Ember from 'ember';

export default Ember.Component.extend({
  isEditable: false,
  isDispose: false,
  actions: {
    updateFood: function(){
      console.log('Component Action : updateFood');
      this.set('food.storage', Ember.$('select').val());
      this.set('food.disposal', Ember.$('select').val());
      this.set('food.expirationDate', new Date(this.get('food.expirationDate')));
      this.sendAction('routeUpdateFood', this.get('food'));
      this.set('isEditable', false);
      this.set('isDispose', false);
    },
    destroyFood: function(){
      console.log('Component Action : destroyFood');
      this.sendAction('routeDestroyFood', this.get('food'));
    },
    editClick: function(){
      this.toggleProperty('isEditable');
    },
    disposeClick: function(){
      this.toggleProperty('isDispose');
    }
  }
});
