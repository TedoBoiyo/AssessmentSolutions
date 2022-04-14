function vanity(codes, numbers) {
    const keypadMap = getKeypadMap(); //Map for keypad numbers and associated characters
    let unique = {}; //Map to track unique phone numbers
    let result = []; //Empty array that will house valid phone numbers

    codes = convertCodes(codes, keypadMap);
  
    //Loop through each phone number and add valid ones to result 
    for(let i = 0; i < numbers.length; i++) {
        //Check to see if the converted codes are a substring of phone numbers
        codes.forEach(code => {
            if(numbers[i].includes(code)) {
                //Only push phone numbers that are not already in result
                if(!unique[numbers[i]]) { 
                    result.push(numbers[i]);
                    //Track all the numbers that were added to result
                    unique[numbers[i]] = true;
                }
            }
        })
    }

    return result.sort(); //Sort result alphabetically 
}

/*Helper Functions*/

function getKeypadMap() {
    let initChar = 65; //ASCII number for 'A'
    let keypadMap = {};

    //Loop through keypad to map number to associated character
    for(let i = 2; i < 10; i++) {
        //Number 7 and 9 represent map to 4 characters instead of 3
        let padCount = i === 7 || i === 9 ? 4 : 3;

        //Map the characters to the appropriate keypad number
        for(let j = 0; j < padCount; j++) {
            keypadMap[String.fromCharCode(initChar)] = i;
            initChar++; //Move to next character
        }
    }

    return keypadMap;
}

function convertCodes(codes, keypadMap) {
    //Loop through codes and use keypadMap to convert them into their numerical values
    for(let i = 0; i < codes.length; i++) {
        //Move word into an array 
        let codeChar = codes[i].split("");

        //Loop through each character in code and convert them to their keypad #
        for(let j = 0; j < codeChar.length; j++) {
            codeChar[j] = keypadMap[codeChar[j]];
        }

        //Join new numeric string back together
        //Removed the commas that got added due to the split
        codes[i] = codeChar.join("").replace(",", "");
    }

    return codes;
}