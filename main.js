// //==================Exercise #1 ==========//
// /*Write a function that takes in the string and the list of dog names, loops through 
// the list and checks that the current name is in the string passed in. The output should be:
// "Matched dog_name" if name is in the string, if no matches are present console.log "No Matches"
// */
let dog_string = "Hello Max, my name is Dog, and I have purple eyes!"
let dog_names = ["Max","HAS","PuRple","dog"]


function findWords(astring, alist){ 
    astring = astring.replace(/[^a-zA-Z ]/g, "")
    astring = astring.toLowerCase()
    astring = astring.split(" ") 
    alist = alist.map( x => x.toLowerCase())
    console.log(alist)
    console.log(astring)
    for(let i of alist) { 
        if (astring.includes(i)){ 
            console.log("Matched dog_name")
            console.log(i)
            console.log("\n")
        } else { 
            console.log("No matches")
            console.log(i) 
            console.log("\n")
        }  
    }      
}

// //Call method here with parameters
findWords(dog_string, dog_names)



// //============Exercise #2 ============//
// /*Write a fucntion that takes in an array and removes every even index with a splice,
// and replaces it with the string "even index" */

arr = ["Max","Baseball","Reboot","Goku","Trucks","Rodger"]

function replaceEvens(arr){
    for(let i = 0; i < arr.length; i++){ 
        if (i % 2 === 0){ 
            arr.splice(i, 1, 'even index')
        } else { 
            arr[i] = arr[i]
        }
    }  
    console.log(arr)
}

replaceEvens(arr)

// //Expected output
// //Output arr == ["even index","Baseball","even index","Goku","even index","Rodger"] 

