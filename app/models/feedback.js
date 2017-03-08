import DS from 'ember-data';

export default DS.Model.extend({
  author: DS.attr(),
  ratingItem: DS.attr(),
  ratingStore: DS.attr(),
  content: DS.attr(),
  date: DS.attr(),
  product: DS.belongsTo('product', { async: true })
});
