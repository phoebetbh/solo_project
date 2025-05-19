function caesarCipher(str, num) {
  const charMovement = parseInt(num, 10); //parseInt is a method to convert string to int, radix (optional):  10 for decimal, 2 for binary, 16 for hexadecimal.
  const lowerCaseStr = str.toLowerCase();
  const lowerCase = lowerCaseStr.split("");
  const alphabet = "abcdefghijklmnopqrstuvwxyz".split("");

  if (Math.abs(charMovement) > alphabet.length) {
    return "Error: Given Shift Number is bigger than the alphabet length"; //restricted user to give > 26 pos, user can provide max -26 or +26 pos only
  }

  let result = new Array();

  for (let i = 0; i < lowerCase.length; i++) {
    //iterate over user input which we convert to an array
    let char = lowerCase[i]; // extract char from user input to lower case
    let charPos = alphabet.indexOf(char);
    if (charPos == -1) {
      //any special character != 26 EN char, it will execute to the input of result, eg space, $%$/.>
      result[i] = char; //eg a space will pass to a char
    } else {
      let newCharPos = charPos + charMovement; // create a new variable = pos of char + how the char convey to new var, eg a convey to c if based on movement of 2
      if (newCharPos > alphabet.length - 1) {
        // condition statement, if pos of newChar is greater than the length of EN alphabet, then minus 1, eg: z, then it moves to the front
        newCharPos = newCharPos - alphabet.length; // restructure the char pos, as end of char there is no more alphabet, use length - pos of char and move to the front
      } else if (newCharPos < 0) {
        newCharPos = alphabet.length + newCharPos; //due to negative pos, so need to move to the end, we use + (negative pos for calculaton)
      }
      result[i] = alphabet[newCharPos];
    }
  }

  return result.join("");
}
console.log(caesarCipher(process.argv[2], process.argv[3])); //as we got 2 argument, argument start frm 2, so we need to print 2 & 3 instead
