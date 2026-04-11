//Qsl. Write a JavaScript function that returns array elements larger than a number.
const arr = [18, 5, 12, 2, 19, 8, 1, 15, 10, 6, 17, 3, 14, 9, 20];

function larger(n) {
    for( i = 0; i < arr.length ; i++){
        if( arr[i] > n){
            console.log(arr[i]);
        }
    }
}

//Qs2. Write a JavaScript function to extract unique characters from a string.
// Example: str = "abcdabcdefgggh" ans = "abcdefgh"


let out = "";
function extraction(str) {
    for( i = 0; i < str.length; i++){
        if(out.indexOf(str[i]) < 0){
            out = out + str[i];
        }
    }
    return out;
}
let str = "abcdabcdefgggh";

// Qs3. Write a JavaScript function that accepts a list of country names as input and returns the longest country name as output.
// Example : country = ["Australia", "Germany", "United States of America"] 
// output = "United States of America"

function largeName( con ) {
    let long = con[0];
    for( i = 0; i < con.length ; i++){
        if( con[i].length >= long.length){
            long = con[i];
        }
    }
    return long;
}
largeName(["Australia", "Germany", "United States of America"]);

//Qs4. Write a JavaScript function to count the number of vowels in a String argument.
function countVowels(Mix){
    let count = 0;
    let vowels = [ "a", "A", "e", "E" , "i", "I" , "o", "O", "u", "U"];
    for( i = 0 ; i < Mix.length ; i++) {
        for ( j = 0 ; j < vowels.length ; j++ ){
            if( Mix[i] == vowels[j]){
                count++;
            }
        }
    }
    return count;
}

//Qs5. Write a JavaScript function to generate a random number within a range (start, end).

function genRandom(start, end) {
    let diff = end - start;
    let random = Math.floor(Math.random()*diff) + start;
    return random;
}