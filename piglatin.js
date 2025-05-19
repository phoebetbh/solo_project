const consonantRegex = /^[^aeiou]+/i; //^ meant for not included the vowel, refer to [^aeiou], another ^ asserts position at start of the string
const input = process.argv[2];

function createPigLatin(str_input) {
  let consonants = str_input.match(consonantRegex); //match is search the string for consonant at the beginning up until the first vowel
  if (consonants != null) {
    let output = str_input.replace(consonants, ""); //could also use the consonantRegex
    output = output + consonants + "ay";
    return output;
  } else {
    return str_input + "way";
  }
}

console.log(createPigLatin(input));
