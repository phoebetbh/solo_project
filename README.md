Programs to Create:

✍️Description: 
Implement a basic 🪨 📰✂️ game.
Requirements:
The program should take the player’s move as an input from process.argv.
The program should randomly generate a move for the computer.
Determine the winner based on the rules of 🪨 📰✂️.
Output the result (win, lose, or draw) to the console.

Example: node rockPaperScissors.js rock # Output: You chose 🪨. Computer chose ✂️. You win!

English to Pig Latin Translator 
Description: Create a program that translates English text to Pig Latin.
Requirements:
The program should take an English phrase as an input from process.argv.
Convert each word to Pig Latin:
If a word starts with a consonant and a vowel, put the first letter of the word at the end of the word and add “ay.”
Example: Happy = appyh + ay = appyhay
If a word starts with two consonants move the two consonants to the end of the word and add “ay.”
Example: Child = Ildch + ay = Ildchay
If a word starts with a vowel add the word “way” at the end of the word.
Example: Awesome = Awesome +way = Awesomeway
Output the translated phrase to the console.
Example: node pigLatin.js "Pig Latin is hard to speak" # Output: Igpay Atinlay isway ardhay otay eakspay

Caesar Cipher
Description: Implement a basic Caesar Cipher encryption.
Requirements:
The program should take a phrase and a shift number as inputs from process.argv.
Encrypt the phrase by shifting each letter, based on its position in the english alphabet, by the specified number.
Case insensitive
A negative shift means shift to the left
A positive shift means shift to the right
Output the encrypted phrase to the console.
Example: node caesarCipher.js "hello world" 3 # Output: khoor zruog
