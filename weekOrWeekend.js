const assert = require('assert');
var weekOrWeekend = function(day){
if(day.startsWith("W")){
  return "week";
}
  else {
    return "weekend";
}
};
console.log(weekOrWeekend("Wedsnesday"));
assert.equal(weekOrWeekend("Wedsnesday"),'week');
assert.equal(weekOrWeekend("Sunday"),"weekend");
