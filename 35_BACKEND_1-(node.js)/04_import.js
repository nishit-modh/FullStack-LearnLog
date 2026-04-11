// We can't selectively load only the pieces we need with require but with import, we can selectively load only the pieces we need, which can save memory.
// Loading is synchronous for 'require' but can be asynchronous for 'import'.

import {sum, PI} from "./04_math.js";

console.log(PI);
console.log(sum(10,11));