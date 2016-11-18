const assert = require('assert')
var myDecision = function(eatWhat){
  switch(eatWhat){
case "Fish":
return "expensive";

case "Bread":
return "unhealthy";
default:
"cheap and unhealthy";
  }
}
assert.equal(myDecision("Fish"),"expensive");
