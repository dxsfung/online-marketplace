import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr(),
  cost: DS.attr('number'),
  description: DS.attr(),
  other: DS.attr(),
  image: DS.attr(),
  stock: DS.attr(),
  feedbacks: DS.hasMany('feedback', {
    async: true
  }),
});
