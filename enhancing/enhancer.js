module.exports = {
  succeed,
  fail,
  repair,
  get,
};

function succeed(item) {
  let enhancementLevel = item.enhancement;

  (enhancementLevel !== 20) ? enhancementLevel += 1 : null;

  return { ...item, enhancement: enhancementLevel };
}

function fail(item) {
  let enhancementLevel = item.enhancement;
  let reducedDurability = item.durability;

  (enhancementLevel < 15) ? reducedDurability -= 5 : null;
  (enhancementLevel > 15) ? reducedDurability -= 10 : null;
  (enhancementLevel > 16) ? enhancementLevel -= 1 : null;

  return { ...item, enhancement: enhancementLevel, durability: reducedDurability };
}

function repair(item) {
  return { ...item, durability: 100 };
}

function get(item) {
  return { ...item };
}
