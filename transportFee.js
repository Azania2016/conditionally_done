const assert = require('assert');
var transportFee = function(shift){
  if(shift == 'Morning'){
    return 'R20';
  }
   else if(shift == 'Afternoon' ){
    return 'R10';
  }
  else {
    return 'Pay nothing';
  }
};
assert.equal(transportFee('Morning'),'R20');
assert.equal(transportFee('Afternoon'),'R10');
