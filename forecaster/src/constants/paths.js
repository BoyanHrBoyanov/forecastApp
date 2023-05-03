

export const paths = {
    location: (searchQuery) => `http://nominatim.openstreetmap.org/search?q=${searchQuery}&format=json&polygon=1&addressdetails=1`,
    weather: (lat, lon) => `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&hourly=temperature_2m,apparent_temperature,precipitation_probability,precipitation,rain,showers,snowfall,snow_depth,cloudcover,visibility,windspeed_10m,windspeed_120m,winddirection_10m,winddirection_120m,windgusts_10m,uv_index,is_day&models=best_match&daily=temperature_2m_max,temperature_2m_min,apparent_temperature_max,apparent_temperature_min,sunrise,sunset,uv_index_max,precipitation_sum,rain_sum,showers_sum,snowfall_sum,precipitation_probability_max,windspeed_10m_max,windgusts_10m_max,winddirection_10m_dominant&current_weather=true&timezone=auto`
}