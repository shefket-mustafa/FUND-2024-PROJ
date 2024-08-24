function wordOccurance(array){
    let object={};
    let occurances=1;

    for (let i = 0; i < array.length; i++) {
        let currentWord=array[i];

        for (let j = 0; j < array.length; j++) {
            if(currentWord[i]===currentWord[j]){
                occurances++;
                object[currentWord]
            }
            
        }
        
    }
}

wordOccurance(["Here", "is", "the",
 "first", "sentence", "Here", "is",
  "another", "sentence", "And", "finally",
   "the", "third", "sentence"]);