interpreter = require('../Interpreter/main');

function displayRuleSeed(ruleSeed){
  console.log("Current rule seed: " + ruleSeed);
}

function GenerateRulesBySeed(seed){
  return "script";
}

function GenerateRulesSeedByData(data){
  return "RulesSeed";
}

module.exports = {
  displayRuleSeed,
  GenerateRulesBySeed,
  GenerateRulesSeedByData
};
