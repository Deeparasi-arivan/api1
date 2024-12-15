// Fetch all countries
fetch('https://restcountries.com/v3.1/all')
  .then(response => response.json()) // Parse JSON data
  .then(countries => {
    countries.forEach(country => {
      console.log(Country: ${country.name.common});
      console.log(Population: ${country.population});
      console.log(Region: ${country.region});
      console.log(Flag: ${country.flags.png});
    });
  })
  .catch(error => console.error('Error fetching countries:', error));
