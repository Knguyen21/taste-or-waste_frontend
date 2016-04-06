import DS from 'ember-data';
import Ember from 'ember';


export default DS.Model.extend({
  storage: DS.attr('string'),
  disposal: DS.attr('string'),
  category: DS.attr('string'),
  name: DS.attr('string'),
  description: DS.attr('string'),
  purchasedDate: DS.attr('date', {defaultValue: new Date()}),
  expirationDate: DS.attr('date', {defaultValue: new Date()}),
  remindDate: DS.attr('date', {defaultValue: new Date()}),
  counter: 0,
  count: Ember.computed(function(){
    let total= this.get('counter');
    total++;
    let newtotal= this.set('counter', total);
    return newtotal;

  })
});
