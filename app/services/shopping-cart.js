import Ember from 'ember';

export default Ember.Service.extend({
  items: [],
  total: 0,
  count: 0,
  add(item) {
    var total = this.get('total');
    this.set('total', total+item.get('cost'));
    console.log(total);    this.get('items').pushObject(item);
  }
});
