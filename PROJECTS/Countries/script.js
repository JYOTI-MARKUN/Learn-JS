fetch("https://restcountries.com/v3.1/all")
.then((res)=>{
    return res.json()
}).then((data)=>{
data.forEach((country)=>{
    console.log(country)
    console.log(Object.values(country.languages).join(", "))
    // console.log(Object.values(country.currencies).map((currency)=>{
    //   return currency.name
    // }).join(", "))

  
    const countryContainer = document.querySelector(".country-container")
    const countryContent = document.createElement("a")
    countryContent.classList.add("country-content")
    countryContent.href = `/country.html?name=${country.name.common}`

    countryContent.innerHTML =`<img src="${country.flags.svg}" alt="flag">
                                     <div class="country-data">
                                      <h4 class="title">${country.name.common}</h4>
                                      <p><b>Population: </b>${country.population.toLocaleString("en-In")}</p>
                                      <p><b>Resion: </b>${country.region}</p>
                                      <p><b>Capital: </b>${country.capital}</p>
                                    </div>`
    countryContainer.append(countryContent);
})
})

