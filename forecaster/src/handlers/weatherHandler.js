import { FontAwesome5 } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';

export function dayIconHandler(cloudsArr, isDay, rain) {
        let sum = 0;
        cloudsArr.forEach(x => sum += x);
        let avg = sum / 24;

        return iconHandler(avg, isDay, rain);
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

export function iconHandler(value, isDay = 1, rain, isHourly = false) {

        if (isDay) {
            if (iconModel(value) === 'clear sky') {
                if (isHourly && rain > 1) {
                    return <FontAwesome5 name="cloud-sun-rain" size={32} />
                }

                if (rain >= 0 && rain <= 4) {
                    return <Ionicons name={'sunny'} size={32} />
                } else if (rain > 4) {
                    return <FontAwesome5 name="cloud-sun-rain" size={32} />
                }
            } else if (iconModel(value) === 'sun and clouds') {
                if (isHourly && rain > 1) {
                    return <FontAwesome5 name="cloud-sun-rain" size={32} />
                }

                if (rain >= 0 && rain <= 4) {
                    return <FontAwesome5 name={'cloud-sun'} size={32} />
                } else if (rain > 4) {
                    return <FontAwesome5 name="cloud-sun-rain" size={32} />
                }
            } else {
                if (isHourly && rain > 1 && rain <= 4) {
                    return <FontAwesome5 name="cloud-rain" size={32} />
                } else if (isHourly && rain > 4) {
                    return <FontAwesome5 name="cloud-showers-heavy" size={32} />
                }

                if (rain >= 0 && rain <= 4) {
                    return <FontAwesome5 name={'cloud'} size={30} />
                } else if (rain > 4 && rain <= 15) {
                    return <FontAwesome5 name="cloud-rain" size={32} />
                } else {
                    return <FontAwesome5 name="cloud-showers-heavy" size={32} />
                }
            }
        } else {
            if (iconModel(value) === 'clear sky') {
                if (rain > 1) {
                    return <FontAwesome5 name="cloud-moon-rain" size={32} />
                } else {
                    return <Ionicons name={'moon-sharp'} size={32} />
                }
            } else if (iconModel(value) === 'sun and clouds') {
                if (rain > 1) {
                    return <FontAwesome5 name="cloud-moon-rain" size={32} />
                } else {
                    return <FontAwesome5 name={'cloud-moon'} size={32} />
                }
            } else {
                if (rain > 1 && rain <= 4) {
                    return <FontAwesome5 name="cloud-rain" size={32} />
                } else if (rain > 4) {
                    return <FontAwesome5 name="cloud-showers-heavy" size={32} />
                } else {
                    return <FontAwesome5 name={'cloud'} size={30} />
                }
            }
        }


}