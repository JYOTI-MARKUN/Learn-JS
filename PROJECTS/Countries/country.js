// new URLSearchParams(location.search).get('name')
const countryName = new URLSearchParams(location.search).get('name')
const flagImage = document.querySelector(".flag-content img");
const countryH2 = document.querySelector(".flag-text h2");
const nativeName = document.querySelector(".native-name");
const population = document.querySelector(".population");
const region = document.querySelector(".region");
const subRegion = document.querySelector(".sub-region");
const capital = document.querySelector(".capital");
const topLevelDomain = document.querySelector(".top-level-domain");
const currencies = document.querySelector(".Curriencies");
const language = document.querySelector(".languages-used");


fetch(`https://restcountries.com/v3.1/name/${countryName}?fullText=true`)
.then((res)=>res.json())
.then((data)=>{
    console.log(Object.values(data[0].languages).join(", "));
    flagImage.src = data[0].flags.svg;
    countryH2.innerText = data[0].name.common;
 if(data[0].name.nativeName){
    nativeName.innerText = (Object.values(data[0].name.nativeName)[0].common)
    }else {
        nativeName.innerText =data[0].name.common;
    };
   population.innerText = data[0].population.toLocaleString("en-In");
   region.innerText = data[0].region;
   subRegion.innerText =data[0].subregion
   if (data[0].capital){
       capital.innerText = data[0].capital?.[0]
   }else{
      capital.innerText = " "
   }
   if(data[0].tld){
    topLevelDomain.innerText = data[0].tld.join(", ") 
   }
   else{
    topLevelDomain.innerText = " "
   }
if(data[0].currencies){
currencies.innerText = Object.values(data[0].currencies).map((currency)=>{
    return currency.name
  }).join(", ")
}else{

}
 if(data[0].languages){
   language.innerText = Object.values(data[0].languages).join(", ");  
 }
}
)


                  