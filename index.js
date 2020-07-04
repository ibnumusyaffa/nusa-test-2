function test1(myNumber) {
  let myString = null;
  for (let i = 0; i < myNumber; i++) {
    let mod1 = i % 3;
    let mod2 = i % 5;
    let mod3 = i % 15;

    if (mod3 === 0) {
      myString = "fish bash";
    } else if (mod2 === 0) {
      myString = "bash";
    } else if (mod1 === 0) {
      myString = "fish";
    } else {
      myString = "";
    }

    console.log(i, myString);
  }
}

// test1(100);
// test1(5);
// test1(100);

function sorting1(myNumbers) {
  let first = myNumbers;
  for (let i = 0; i < first.length; i++) {
    for (let j = 0; j < first.length; j++) {
      if (first[j] > first[j + 1]) {
        let temp = first[j];
        first[j] = first[j + 1];
        first[j + 1] = temp;
      }
    }
  }
  let second = [...myNumbers];
  for (let i = 0; i < second.length; i++) {
    for (let j = 0; j < second.length; j++) {
      if (second[j] < second[j + 1]) {
        let temp = second[j];
        second[j] = second[j + 1];
        second[j + 1] = temp;
      }
    }
  }

  console.log(first);
  console.log(second);
}

// sorting1([5, 4, 3, 1, 9]);

function checkString(input) {
  let temp = input;
  let newString = "";
  for (let i = input.length; i > 0; i--) {
    const element = input[i - 1];
    newString = newString + element;
  }

  if (temp == newString) {
    return true;
  }

  return false;
}

console.log(checkString("kasurrusak"));
console.log(checkString("bunga"));
