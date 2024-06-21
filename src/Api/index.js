const baseURL = "https://api.weatherapi.com/v1/current.json?key=cbd788aae6e847e59ec220755242006"

export const getWeatherForCity = async (city) => {
    const response = await fetch(`${baseURL}&q=${city}&aqi=yes`);
    return await response.json();
};

export const getWeatherForLocation = async (lat, lon) => {
    const response = await fetch(`${baseURL}&q=${lat},${lon}&aqi=yes`);
    return await response.json();
};

