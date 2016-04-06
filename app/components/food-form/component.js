import Ember from 'ember';

export default Ember.Component.extend({
  form: {},
  actions: {
    createFood: function(){
      console.log('Component Action : createFood');
      this.sendAction('routeCreateFood', this.get('form'));
      this.set('form', {});
    },
    selectValue () {
    this.set('form.storage', Ember.$('select').val());
    console.log(this);
  },
  dateValue () {
  this.set('form.storage', Ember.$('select').val());
  console.log(this);
},
  }

});
