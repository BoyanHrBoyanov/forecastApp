

export const paths = {
    location: (searchQuery) => `http://nominatim.openstreetmap.org/search?q=${searchQuery}&format=json&polygon=1&addressdetails=1`,
    weather: (lat, lon) => `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&hourly=temperature_2m,apparent_temperature,precipitation_probability,rain,cloudcover,windspeed_10m&daily=temperature_2m_max,temperature_2m_min,sunrise,sunset,uv_index_max,precipitation_probability_max&timezone=auto`
}