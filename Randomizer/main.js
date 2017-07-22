rule = require('../Rules/main')

const RULE = 0;
const SEED = 1;

function readSeed(seed){
  seedArray = seed.split("-");
  rule.displayRuleSeed(seedArray[RULE]);
  let data = {"seed": seedArray[SEED]};
  return data;
}

function writeSeed(data){
  let rule = "rule";
  return rule + "-"+ data['seed'];
}

module.exports = {
  readSeed,
  writeSeed
};
