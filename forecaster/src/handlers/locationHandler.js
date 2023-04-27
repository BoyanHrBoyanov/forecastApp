import { paths } from "../constants/paths";


export function locationHandler(searchQuery, setModifiedLocations, setLoading) {
    setLoading(true);
    fetch(paths.location(searchQuery))
        .then(response => response.json())
        .then(data => {
            let i = 1;
            modifiedData = data.map(l => ({
                lat: l.lat,
                lon: l.lon,
                displayName: l.display_name,
                icon: l.icon,
                i: i++
            }));
            setModifiedLocations(modifiedData);
            setLoading(false);
        })
        .catch(error => {
            setLoading(false);
            console.log(error)
        });
}