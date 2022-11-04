class Technology{
    private totalExperience: string

    constructor(language: Language, machine: string[]) {
        this.totalExperience = language.name + " for " + language.usage + " with " + machine
    }

    public getExperience() {
        return "I have experience using " + this.totalExperience
    }
}

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

let typeOfLanguage: Language = {
    name: "Python",  usage: ["backend","data science"]
}

let tool: Technology = new Technology(typeOfLanguage, ["windows", "mac", "linux"])

console.log(tool.getExperience())

document.body.innerHTML = tool.getExperience()