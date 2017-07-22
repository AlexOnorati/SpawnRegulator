rule = require('../Rules/main');
format = require('../Format/main');

const RULE = 0;
const SEED = 1;
const FORMAT = 2;

function readSeed(seed){
  seedArray = seed.split("-");
  rule.displayRuleSeed(seedArray[RULE]);
  let data = {"seed": seedArray[SEED]};
  format.displayFormatSeed(seedArray[FORMAT]);
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
