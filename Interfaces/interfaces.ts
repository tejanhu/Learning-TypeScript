interface Language {
    name: string
}
// Interfaces - allow you to merge
interface Language {
    usage: {}
}

// type Language =  {
//     name: string,
//     usage: [string]
// }

function getProgrammingLanguage(typeOfLanguage: Language){
 return "I love "+typeOfLanguage.name;
}

function getProgrammingLanguageUsage(typeOfLanguage: Language){
    return "I use it for "+typeOfLanguage.usage;
   }

var typeOfLanguage: Language = {
    name: "Python",  usage: ["backend","data science"]
}

console.log(getProgrammingLanguage(typeOfLanguage))

document.body.innerHTML = getProgrammingLanguageUsage(typeOfLanguage)