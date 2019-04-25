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
  return { ...item };
}

function repair(item) {
  return { ...item, durability: 100 };
}

function get(item) {
  return { ...item };
}
