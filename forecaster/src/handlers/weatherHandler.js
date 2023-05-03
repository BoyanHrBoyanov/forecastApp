

let cloudCover = [0, 0, 0, 0, 0, 0, 0];
let index = 0;
let cloudsArr = [];

export function dayIconHandler(hourlyData) {
    hourlyData.cloudcover.forEach((clouds, i) => {
        cloudCover[index] += clouds;

        if (i === 23 || ((i - 23) % 24 === 0))
            return index++
        if (i === 167)
            return
    });
    let cloudCoverMiddle = cloudCover.map(x => (x / 24).toFixed(2));

    cloudCoverMiddle.forEach((clouds, i) => {
        cloudsArr[i] = {
            cloudCover: clouds,
            status: iconModel(clouds)
        }
    });

    return cloudsArr;
}

function iconModel(val) {
    if (val >= 0 && val <= 29) {
        return 'clear sky';
    } else if (val >= 30 && val <= 65) {
        return 'sun and clouds';
    } else {
        return 'cloudy';
    }
}