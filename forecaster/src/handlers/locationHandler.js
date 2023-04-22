import { paths } from "../constants/paths";


export function locationHandler(searchQuery, setModifiedLocations) {
    fetch(paths.location(searchQuery))
        .then(response => response.json())
        .then(data => {
            modifiedData = data.map(l => ({
                lat: l.lat,
                lon: l.lon,
                displayName: l.display_name,
                icon: l.icon
            }));
            setModifiedLocations(modifiedData);
        })
        .catch(error => console.log(error));
}