let ans = function(n:number, m:number, num?:number) : number{
    if(num!= undefined){
        return n+m+num;
    }
  return n+m;
  }
  console.log(ans(5, 2))
  console.log(ans(5, 2, 11))

  var answer = (n:number, m:number, num?:number) : number =>{
    if(num!= undefined){
        return n+m+num;
    }
  return n+m;
  }
  console.log(answer(5, 2))
  console.log(answer(5, 2, 11))
  