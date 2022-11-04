var Technology = /** @class */ (function () {
    function Technology(language, machine) {
        this.totalExperience = language.name + " for " + language.usage + " with " + machine;
    }
    Technology.prototype.getExperience = function () {
        return "I have experience using " + this.totalExperience;
    };
    return Technology;
}());
// type Language =  {
//     name: string,
//     usage: [string]
// }
var typeOfLanguage = {
    name: "Python", usage: ["backend", "data science"]
};
var tool = new Technology(typeOfLanguage, ["windows", "mac", "linux"]);
console.log(tool.getExperience());
document.body.innerHTML = tool.getExperience();
