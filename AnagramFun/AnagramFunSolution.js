function anagramFun(text) {
    //Loop through text array
    for(let i = 0; i < text.length; i++){
        let j = i + 1; 

        //Loop through texts after i
        while(j < text.length) {
            //Is anagram if two of these conditions are true
            //Length is the same && both strings are equal
            if(text[i].length === text[j].length && text[i].split("").sort().join() === text[j].split("").sort().join()) {
                text.splice(j, 1); //Remove string at index
            } else {
                j++;
            }
        }
    }
    
    return text;
}