// ┌─────────────────┐
// │ Your code here! │	
// └─────────────────┘

/*
   getFirstName
   parameters: person object


person =
{
    firstName: string
    lastName: string
}
return firsName property(string)


*/






/*
isAdmin
parameters: user object

user = {
    firstName: String
    lastName: String
    userRole: String
}

return boolean - true or false

(userRole === ADMIN)





*/


function isAdmin(user){
    if(user.userRole === "ADMIN"){
        return true
    }else {
        return false
    }
}

let user1 = {
    firstName: "Eileen",
    lastName: "Smith",
    userRole: "ADMIN"
}

console.log(isAdmin(user1))
 console.log(isAdmin(user2))





function getEmail(user){
    let emailUser = (`${user.firstName}.${user.lastName}@codeimmersives.com`)
   return emailUser.toLowerCase()

}

let ciUser = {
    firstName: "Enzo",
    lastName: "Morales",
}

console.log(getEmail(ciUser))

console.log(`#3 getPlayListLength`)
console.log("\n")

function getPlayListLength(playListFile){
    songnNum = playListFile.songs.length
    return songnNum
}

let plaayListExample = {
    name: "my jams",
    songs: ["Vienna", "Hey Ya!"]
}

console.log(getPlayListLength(plaayListExample))

console.log(`#4 getHardestHomework`)
console.log("\n")

function getHardestHomework(homework)






function getPlayListLength(playlist){
  return playlist.songs.length 
 }
 console.log(getPlayListLength({
     name: "My jamz",
     songs: ["King Park", "Diamond Dogs", "Run Away With Me"]
 }))




/*
getHardestHomework
parameters: homework array - array of hw objects


homework = {
    name: string,
    averageScore: number
}

return type: string

*/


function getHardestHomework(homeworkArray){
    if(homeworkArray.length === 0){
        return " "
    }

    let lowestHw = homeworkArray[0] // object

    for(i = 0; i < homeworkArray.length; i++){
       if(homeworkArray[i] < lowestHw){
        lowestHw = homeworkArray[i]
       }
    }

    return lowestHw.name;
}

console.log([
    { name: 'hip-hip-array', averageScore: 12 },
    { name: 'wait-i-object', averageScore: 200 },
    { name: 'objective-reasoning', averageScore: 25 }
])

console.log(getHardestHomework)


let lowestHWScore = homeworkArray[0].averageScore
let lowestHwName = homeworkArray[0]

for(let i = 0; i < homework.length; i++){
    if(homeworkArray[i].averageScore < lowestHWScore){
        lowestHWScore = homeworkArray[i].averageScore
        lowestHwName = homeworkArray[i].name
    }
    return lowestHWScore.name
}

console.log(getHardestHomework([]))




/*
createPhonebook
parameters:
namesArray strings
numbersArray strings

return phonebook object

{
    string: string - in the following format:
    "name": "number" 

}

*/


function createPhonebook(namesArray, numbersArray)
{
    let phonebook = {};

    for(i = 0; i < namesArray.length ;i++){
        phonebook[namesArray[i]] = numbersArray[i]
    }

    return phonebook;
}

console.log(createPhonebook(['Jimothy', 'Maria', 'Karl'], ['123-456-7890', '000-000-0000', '999-888-7766'])
)










// ┌─────────────────────────────────────┐
// │ Do not modify code below this line. │
// └─────────────────────────────────────┘

if (typeof isAdmin === 'undefined') {
    isAdmin = undefined;
}
if (typeof getEmail === 'undefined') {
    getEmail = undefined;
}
if (typeof getPlaylistLength === 'undefined') {
    getPlaylistLength = undefined;
}
if (typeof getHardestHomework === 'undefined') {
    getHardestHomework = undefined;
}
if (typeof createPhonebook === 'undefined') {
    createPhonebook = undefined;
}

module.exports = {
    isAdmin,
    getEmail,
    getPlaylistLength,
    getHardestHomework,
    createPhonebook
};