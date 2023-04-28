import { paths } from "../constants/paths";


export function locationHandler(searchQuery, setModifiedLocations, setLoading) {
    setLoading(true);
    fetch(paths.location(searchQuery))
        .then(response => response.json())
        .then(data => {
            const modifiedData = [];
            let i = 1;
            data.forEach(l => (
                modifiedData.some(el => el.displayName === l.display_name)
                    ? null
                    : modifiedData.push({
                        lat: l.lat,
                        lon: l.lon,
                        displayName: l.display_name,
                        icon: l.icon,
                        address: l.address,
                        i: i++
                    })
            ));
            setModifiedLocations(modifiedData);
            setLoading(false);
        })
        .catch(error => {
            setLoading(false);
            console.log(error)
        });
}