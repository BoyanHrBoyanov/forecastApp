import { paths } from "../constants/paths";

export function weatherDataHandler(lat, lon) {
    fetch(paths.weather(lat, lon))
        .then(response => response.json())
        .then(data => {
            return data
        })
}