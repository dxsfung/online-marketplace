import Ember from 'ember';

export default Ember.Service.extend({
  items: [],
  total: 0,
  count: 0,
  add(item) {
    var n = this.get('total');
    this.set('total', n + item.get('cost'));
    console.log(n, item.get('cost'));
    // debugger;
    this.get('items').pushObject(item);
  }
});
