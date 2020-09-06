# unflat
Unflatten an Array of Numbers into a Two-Dimensional Array, a Table of Rows and Columns

# install
```bash
npm install tableate
```

# usage
```javascript
const tableate = require("tableate");

const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const table = tableate(nums, { height: 3, width: 3 });
// table is [ [ 1, 2, 3 ], [ 4, 5, 6 ], [ 7, 8, 9 ] ]
```

# table dimensions
If you don't pass in a height or width, tableate will try to create a square table with
nearly equal height and width.  If you pass in a height (but no width), it will automatically
calculate the width from the height.  If you pass in a width (but no height), it will automatically
calculate the height from the width.
