interface Trajet {
  trajetIndex: number;
  departureCity: string;
  arrivalCity: string;
  travelTime: number; // Assuming travel time is in minutes
}

// List of cities in Morocco
const moroccanCities: string[] = [
  "Casablanca",
  "Rabat",
  "Marrakech",
  "Fes",
  "Tangier",
  "Agadir",
  "Meknes",
  "Oujda",
  "Kenitra",
  "Tetouan",
  "Safi",
  "El Jadida",
  "Nador",
  "Settat",
  "Beni Mellal",
  "Taza",
  "Khouribga",
  "Mohammedia",
  "Khenifra",
  "Taourirt",
  // Add more cities as needed
];

// Function to generate a random integer between min (inclusive) and max (exclusive)
function getRandomInt(min: number, max: number): number {
  return Math.floor(Math.random() * (max - min)) + min;
}

// Generate random trajets
const numberOfTrajets = 10;
const trajets: Trajet[] = [];
for (let i = 0; i < numberOfTrajets; i++) {
  const departureIndex = getRandomInt(0, moroccanCities.length);
  let arrivalIndex = getRandomInt(0, moroccanCities.length);
  // Ensure arrival city is different from departure city
  while (arrivalIndex === departureIndex) {
    arrivalIndex = getRandomInt(0, moroccanCities.length);
  }
  const departureCity = moroccanCities[departureIndex];
  const arrivalCity = moroccanCities[arrivalIndex];
  // Generate random travel time between 1 and 6 hours (in minutes)
  const travelTime = getRandomInt(60, 360);
  trajets.push({ trajetIndex: i + 1, departureCity, arrivalCity, travelTime });
}

export default trajets;
