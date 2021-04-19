// https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-javascript/profile-lookup
let contacts = [
    {
        "firstName": "Akira",
        "lastName": "Laine",
        "number": "0543236543",
        "likes": ["Pizza", "Coding", "Brownie Points"]
    },
    {
        "firstName": "Harry",
        "lastName": "Potter",
        "number": "0994372684",
        "likes": ["Hogwarts", "Magic", "Hagrid"]
    },
    {
        "firstName": "Sherlock",
        "lastName": "Holmes",
        "number": "0487345643",
        "likes": ["Intriguing Cases", "Violin"]
    },
    {
        "firstName": "Kristian",
        "lastName": "Vos",
        "number": "unknown",
        "likes": ["JavaScript", "Gaming", "Foxes"]
    }
];


function lookUpProfile(name, prop){
let profileInfo = contacts.find(profile => profile.firstName  === name);
if(!profileInfo) { 
    return "No such contact"
    }
if(!profileInfo[prop]) { 
    return "No such property"
    }
    return profileInfo[prop];
}

lookUpProfile("Akira", "likes");



// function lookUpProfile(name, prop){
//     let profileInfo = contacts.find(profile => profile.firstName  === name);
//     if(!profileInfo) { 
//         return "No such contact"
//         }
//         return profileInfo[prop] || "No such property";
//     }
    
//     lookUpProfile("Akira", "likes");
