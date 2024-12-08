
function saturdayFun(activity = "roller-skate") {
    return `This Saturday, I want to ${activity}!`;
  }
  

  const mondayWork = function(activity = "go to the office") {
    return `This Monday, I will ${activity}.`;
  };
  

  function wrapAdjective(wrapper = "*") {
    return function(adj = "special") {
      return `You are ${wrapper}${adj}${wrapper}!`;
    };
  }

  // Test saturdayFun function
console.log(saturdayFun()); 
console.log(saturdayFun("bake a cake"));

// Test wrapAdjective function
console.log(mondayWork());
console.log(mondayWork("work from home"));
const excitedAdjective = wrapAdjective("||");
console.log(excitedAdjective())
console.log(excitedAdjective("amazing")); 

  
  

  
