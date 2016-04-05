import Ember from 'ember';

export default Ember.Component.extend({
  isEditable: false,
  actions: {
    updateFood: function(){
      console.log('Component Action : updateFood');
      this.sendAction('routeUpdateFood', this.get('food'));
      this.set('isEditable', false);
    },
    destroyFood: function(){
      console.log('Component Action : destroyFood');
      this.sendAction('routeDestroyFood', this.get('food'));
    }
  },
  doubleClick: function(){
    this.toggleProperty('isEditable');
  }
});
