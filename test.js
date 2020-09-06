const test = require("ava");
const tableate = require("./index");

test("converting array of numbers into a table", (t) => {
  const nums = [0, 1, 2, 3, 4, 5, 6, 7, 8];
  const table = tableate(nums, { debug: false });
  t.deepEqual(table, [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
  ]);
});

test("converting array of numbers into a table with a given height", (t) => {
  const nums = [0, 1, 2, 3, 4, 5, 6, 7, 8];
  const table = tableate(nums, { debug: false, height: 2 });
  t.deepEqual(table, [
    [0, 1, 2, 3, 4],
    [5, 6, 7, 8],
  ]);
});

test("converting array of numbers into a table with a given width", (t) => {
  const nums = [0, 1, 2, 3, 4, 5, 6, 7, 8];
  const table = tableate(nums, { debug: false, width: 2 });
  t.deepEqual(table, [[0, 1], [2, 3], [4, 5], [6, 7], [8]]);
});

test("converting array of numbers into a table with a given height and width", (t) => {
  const nums = [0, 1, 2, 3, 4, 5, 6, 7, 8];
  const table = tableate(nums, { debug: false, height: 5, width: 2 });
  t.deepEqual(table, [[0, 1], [2, 3], [4, 5], [6, 7], [8]]);
});

test("converting interleaved pixels", (t) => {
  const pixels = [
    "R0",
    "G0",
    "B0",
    "R1",
    "G1",
    "B1",
    "R2",
    "G2",
    "B2",
    "R3",
    "G3",
    "B3",
  ];
  const table = tableate(pixels, { debug: false, height: 2, width: 6 });
  t.deepEqual(table, [
    ["R0", "G0", "B0", "R1", "G1", "B1"],
    ["R2", "G2", "B2", "R3", "G3", "B3"],
  ]);
});
