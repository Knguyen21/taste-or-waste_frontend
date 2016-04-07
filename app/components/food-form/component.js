import Ember from 'ember';

export default Ember.Component.extend({
  form: {},
  foodProperties: Ember.computed('form', function(){
    return {
      storage: this.get('form.storage'),
      disposal: this.get('form.disposal'),
      name: this.get('form.name'),
      description: this.get('form.description'),
      purchasedDate: new Date(this.get('form.purchasedDate')),
      expirationDate: new Date(this.get('form.expirationDate')),
      remindDate: new Date(this.get('form.remindDate')),
    };
  }),
  actions: {
    createFood: function(){
      console.log('Component Action : createFood');

      this.sendAction('routeCreateFood', this.get('foodProperties'));
      this.set('form', {});
    },
    selectValue () {
      this.set('form.storage', Ember.$('select').val());
      console.log(this);
    },
  }
});
