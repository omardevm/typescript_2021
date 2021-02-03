type numstr = number | string;

function combine(n1: numstr, n2: numstr): numstr {
  let result: numstr;
  if (typeof n1 === "number" && typeof n2 === "number") {
    result = n1 + n2;
  } else {
    result = n1.toString() + n2.toString();
  }
  return result;
}

const combinedAges = combine(30, 26);
console.log(combinedAges);

const combinedNames = combine("Omar", "Claire");
console.log(combinedNames);
