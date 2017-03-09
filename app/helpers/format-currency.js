import Ember from 'ember';

export function formatCurrency(params/*, hash*/) {
  let value = params[0]

 //     dollars = Math.floor(value / 100),
 //     cents = value % 100,
 //     sign = '$';
 //
 // if (cents.toString().length === 1) { cents = '0' + cents; }
 // return `${sign}${dollars}.${cents}`;
 return '$'+ value.toFixed(2);
}

export default Ember.Helper.helper(formatCurrency);
