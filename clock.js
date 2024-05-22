const countries = document.querySelectorAll('.country');
const clockDisplay = document.getElementById('clockDisplay');

countries.forEach(country => {
  country.addEventListener('click', () => {
    const timezone = country.getAttribute('data-timezone');
    const time = new Date().toLocaleTimeString('en-US', { timeZone: timezone });
    clockDisplay.textContent = `Time in ${country.textContent}: ${time}`;
  });
});
