// continent and region is asia 
var continent=new XMLHttpRequest();
continent.open("GET","https://restcountries.com/v3.1/all");
continent.send();
continent.onload=function()
{
   var res=JSON.parse(continent.response);
var result=res.filter((ele)=>ele.continents=="Asia" && ele.region=="Asia");
console.log(result);
}


//population<2 lakh
var population=new XMLHttpRequest();
population.open("GET","https://restcountries.com/v3.1/all");
population.send();
population.onload=function()
{
   var res=JSON.parse(population.response);
var result=res.filter((ele)=>ele.population<200000)

console.log(result);

}




//name,flag,capital
var req=new XMLHttpRequest();
req.open("GET","https://restcountries.com/v3.1/all");
req.send();
req.onload=function()
{
   var res=JSON.parse(req.response);
   res.forEach(myFunction);
    
   function myFunction(item)
   {
     console.log(`Country name is: ${item.name.common}`);
     console.log(`flag is : ${item.flag}`);
     console.log(`Capital for ${item.name.common} is ${ item.capital}`);
   }
}




//total population
var req=new XMLHttpRequest();
req.open("GET","https://restcountries.com/v3.1/all");
req.send();
req.onload=function()
{
   var res=JSON.parse(req.response);
   var res1=res.reduce((acc,ele)=>acc+ele.population,0);
   console.log(res1);

}



//dollar using countries
var req=new XMLHttpRequest();
req.open("GET","https://restcountries.com/v3.1/all");
req.send();
req.onload=function()
{
   var res=JSON.parse(req.response);
  var result=res.filter((ele)=>ele.currencies?.AUD?.symbol==="$");
   console.log(result);
}


