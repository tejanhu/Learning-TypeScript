// type Language =  {
//     name: string,
//     usage: [string]
// }
function getProgrammingLanguage(typeOfLanguage) {
    return "I love " + typeOfLanguage.name;
}
function getProgrammingLanguageUsage(typeOfLanguage) {
    return "I use it for " + typeOfLanguage.usage;
}
var typeOfLanguage = {
    name: "Python", usage: ["backend", "data science"]
};
console.log(getProgrammingLanguage(typeOfLanguage));
document.body.innerHTML = getProgrammingLanguageUsage(typeOfLanguage);
