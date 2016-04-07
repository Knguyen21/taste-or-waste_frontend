import Ember from 'ember';

export function formatDate(params) {
  let date = new Date(params[0]);
  return `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate() + 1}`;
}

export default Ember.Helper.helper(formatDate);
