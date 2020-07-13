  //interactive view of drills: https://repl.it/@AngelaBumgarner/HashMapDrills#index.js
  
  const HashMap = require('./HashMap')

  //1) Inside main function, create hash map called lotr, set MAX_LOAD_RATIO = 0.5 and SIZE_RATIO = 3.
  //Add items to hashmap
  //print hashmap
  //retrieve value hashed in key "Maiar" and "Hobbit"
  function main() {
    const lotr = new HashMap();
    lotr.MAX_LOAD_RATIO = 0.5
    lotr.SIZE_RATIO = 3
    lotr.set("Hobbit", "Frodo");
    lotr.set("Hobbit", "Bilbo");
    lotr.set("Wizard", "Gandolf");
    lotr.set("Human", "Aragon");
    lotr.set("Elf", "Legolas");
    lotr.set("Maiar", "Necromancer");
    lotr.set("Maiar", "Sauron");
    lotr.set("RingBearer", "Gollum");
    lotr.set("LadyofLight", "Galidriel");
    lotr.set("HalfElven", "Arwen");
    lotr.set("Ent", "Treebeard");
    console.log('Maiar key:', lotr.get('Maiar'))
    console.log('Hobbit key:', lotr.get('Hobbit'))

    return lotr
  }
  //console.log(main());

  //2) WhatDoesThisDo
  const WhatDoesThisDo = function(){
    let str1 = 'Hello World.';
    let str2 = 'Hello World.';
    let map1 = new HashMap();
    map1.set(str1,10);
    map1.set(str2,20);
    let map2 = new HashMap();
    let str3 = str1;
    let str4 = str2;
    map2.set(str3,20);
    map2.set(str4,10);

    console.log(map1.get(str1));
    console.log(map2.get(str3));
}
//console.log(WhatDoesThisDo());

/*Initializes two HashMaps and sets key/values on them. 
It uses the same string as the key when setting key/values, 
which results in the hashmap replacing the value stored with that key. 
In other words, it sets a value at a specific index in the hashmap and then overwrites it.*/

//3) Open addressing solution: https://ibb.co/3SwcV3R

//3) Separate chaining solution: https://ibb.co/WG8x6XQ

//4) Remove duplicates
/* Implement a function to delete all duplicated characters in a string and keep only
the first occurrence of each character.  For example, if your input is string "google",
the result after deletion is "gole". 
Test your program with a sentence as well such as "google all that you can think of" */

function duplicate(str) {
    const stringMap = new HashMap()
    let newStr = ''

    for (let i=0; i<str.length; i++){
        stringMap.set(str[i], str[i])
        if (!newStr.includes(stringMap.get(str[i]))) {
            newStr += stringMap.get(str[i])
        }
    } 
    return newStr
}
 //console.log(`Remove Duplicate: `, duplicate("google"))
 //console.log(`Remove Duplicate: `, duplicate("google all that you can think of"))

 //5) Any permutation a palindrome.
 /* Write an algorithm to check whether any anagram of some string is a palindrome.
 Given some string, "acecarr" the aglorithm should return true, because it can be rearranged to racecar.
 In contrast, "north" should return fase, since there is no anagram  for north that would be a
 palindrome. */

 function permutationPalindrome(string) {
    // remove non letter characters
    const filtered = string.replace(/[^a-zA-Z]+/g, '').toLowerCase()
    // empty string
    if (!filtered) { return 'no string provided'}
    const hash = new HashMap
    let count = 0
    // loop to find dup key in hashtable
    for (i in filtered) {
        // We skip .get() method b/c it throws error
        // undefined = no value set yet
        if (!hash._hashTable[hash._findSlot(filtered[i])]) {
            // if no value yet then set to 1
            hash.set(filtered[i], 1)
        }
        else {
            // index has value. now we just + 1 to value
            // b/c has value, no more error from .set(). we can use .set() method
            hash.set(filtered[i], hash.get(filtered[i]) + 1)
        }
    }
    // loop through each index in hashTable that has key
    for (i in hash._hashTable) {
        //console.log(count = hash._hashTable[i].value % 2)
        // if % 2 has remainder add to count
        hash._hashTable[i].value % 2 !== 0 && count ++
        i ++
    }
    // if less than or equal to 1 then it is palindrome!
    return count <= 1
}
//console.log((permutationPalindrome('racecar')))                     // true
//console.log((permutationPalindrome('Was it a cat I saw')))          // true
//console.log((permutationPalindrome('north')))                       // false
//console.log((permutationPalindrome('')))                            // no string provided
//console.log((permutationPalindrome('dad')))                         // true

//6) Anagram grouping
/* Write an algorithm to grop a list of words into anagrams. For example, 
if input was ['east', 'cars', 'acre', 'arcs', 'teas', 'eats', 'race'],
output: [['east', 'teas', 'eats'], ['cars', 'arcs'], ['acre', 'race']] */
function anagramGroup(arr) {
    let anagrams = new HashMap()
    let diffAnagrams = new HashMap()
    let inputAnagrams = {}
    const result = []

    for (let i=0; i<arr.length; i++) {
        inputAnagrams[arr[i]] = arr[i].split("").sort().join("")
    }
    console.log(`INPUT: `, inputAnagrams)

    for (let i in inputAnagrams) {
        anagrams.set(inputAnagrams[i], i)
        diffAnagrams.set(i, inputAnagrams[i])
    }
    console.log(`ANAGRAMS: `, anagrams)
    console.log(`DIFF ANAGRAMS: `, diffAnagrams)

    for (let i in anagrams._hashTable) {
        let newGroup = []

        for (let j in diffAnagrams._hashTable) {
            if (anagrams._hashTable[i].key === diffAnagrams._hashTable[j].value) {
                newGroup.push(diffAnagrams._hashTable[j].key)
            }
        }
        result.push(newGroup)
    }
    return result
}
//console.log(`RESULTS: `, anagramGroup(['east', 'cars', 'acre', 'arcs', 'teas', 'eats', 'race']))

//7)Separate Chaining - write another hashmap implementation as above, but use separate
//chaining as the collision resolution mechanism.
//Test with same values from lotr hashmap.
//Solution listed in ChainedMap.js