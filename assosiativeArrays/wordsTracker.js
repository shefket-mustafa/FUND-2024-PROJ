function wordsTracker(array){

    const targetWords=array.shift().split(" ");
    let wordOccurences={};

    for (const targetWord of targetWords) {
            wordOccurences[targetWord]=0;
    }
    for (const word of array) {
        if(word in wordOccurences){
            wordOccurences[word]++;
        }
    }
    let entries=Object.entries(wordOccurences);
    entries.sort((a,b) => b[1] - a[1]);
    
    for (const [word, occurrences] of entries) {
            console.log(`${word} - ${occurrences}`);
    }
}

wordsTracker([
    'this sentence', 
    'In', 'this', 'sentence', 'you', 'have', 'to', 'count', 'the', 'occurrences', 'of', 'the', 'words', 'this', 'and', 'sentence', 'because', 'this', 'is', 'your', 'task'
    ]); 