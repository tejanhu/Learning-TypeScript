function getSportType() : string{
    var typeOfSport = "Brazilian Jujitsu"
if(typeOfSport == "Brazilian Jujitsu"){
    typeOfSport = "BJJ";
} else{
     typeOfSport = "Sport";
}
 return typeOfSport;
}
console.log(getSportType())


function getTotal(n:number, m:number, num?:number) : number{
    if(num!= undefined){
        return n+m+num;
    }
  return n+m;
  }
  let total = getTotal(5, 2)
  console.log(ans)
  total = getTotal(5, 2, 11)
console.log(ans)
  
function getListOfSports(... sports:string[]) : string{
    let typeOfSport = " "
for(let sport of sports){
  typeOfSport = typeOfSport +  " " +sport;
}
return typeOfSport
}
console.log(getListOfSports("Brazilian Jiu jitsu", "Tennis", "Rugby" ))
console.log(getListOfSports("Sambo", "Table Tennis", "Football" ))
console.log(getListOfSports("Japanese Jiu jitsu", "Basketball", "Handball" ))
