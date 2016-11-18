
const assert = require('assert')
var fromWhere = function(regNumber){
switch (regNumber.substring(0,2)) {

  case ('CY'):
  return 'Bellville';
  break;
case ('CJ'):
return 'Paarl';
break;
case ('CA'):
  return 'Cape Town';
  break;
  default :
  return Some

}
}
assert.equal(fromWhere('CY'),'Bellville');
assert.equal(fromWhere('CJ'),'Paarl');
assert.equal(fromWhere('CA'),'Cape Town');
