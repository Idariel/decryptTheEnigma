//var input_string = readInputContent();
var input_string = 'HELLO';

function skipcode(my_string) {
  // CREATE ARRAY PRIME NUMBERS
  var primeNb = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97]; //i

  // CREATE ARRAY WITH CUMULATED PRIME NUMBERS
  var cumulPrimeNb =[]; //j
  cumulPrimeNb.push(primeNb[0]);
  for (i=1;i<primeNb.length;i++){ //primeNb.length
    cumulPrimeNb.push(primeNb[i]+cumulPrimeNb[i-1]);
  };

  // GET LETTERS
  var letters = [];
  for (j=0; j<cumulPrimeNb.length; j++){
    var posLetterToGet  = cumulPrimeNb[j]; // value of cumulPrimeNb in position j
    while (posLetterToGet > input_string.length){
      posLetterToGet = posLetterToGet - input_string.length;
    };
    console.log(input_string[posLetterToGet-1]);

    //STOP WHEN ALL LETTERS ARE FOUND
    letters.push(input_string[posLetterToGet-1]);
    console.log(letters);
  };


}
var output = skipcode(input_string);
//printOutput(output);
