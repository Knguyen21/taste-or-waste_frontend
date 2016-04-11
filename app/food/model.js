import DS from 'ember-data';


export default DS.Model.extend({
  storage: DS.attr('string'),
  disposal: DS.attr('string'),
  category: DS.attr('string'),
  name: DS.attr('string'),
  description: DS.attr('string'),
  purchasedDate: DS.attr('date'),
  expirationDate: DS.attr('date'),
  remindDate: DS.attr('date')
});
