/*
Takes in a flattened one dimensional array
representing two-dimensional pixel values
and returns an array of arrays.
*/
function tableate(values, options) {
  const debug = (options && options.debug) || false;
  if (debug) console.log("[tableate] options:", options);
  const len = values.length;
  if (debug) console.log("[tableate] len:", len);

  const width =
    options && options.width
      ? options.width
      : options && options.height
      ? Math.ceil(len / options.height)
      : Math.floor(Math.sqrt(len));
  if (debug) console.log("[tableate] width:", width);
  const height = (options && options.height) || Math.ceil(len / width);
  if (debug) console.log("[tableate] height:", height);
  const table = [];

  for (let y = 0; y < height; y++) {
    const start = y * width;
    const end = start + width;
    table.push(values.slice(start, end));
  }
  if (debug) console.log("[tableate] table:", table);
  return table;
}

module.exports = tableate;
