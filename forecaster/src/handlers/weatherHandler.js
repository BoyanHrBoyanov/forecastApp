import { FontAwesome5 } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';

export function dayIconHandler(arr) {
        let sum = 0;
        arr.forEach(x => sum += x);
        let avg = sum / 24;

        return iconHandler(avg);
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

export function iconHandler(value, isDay = 1) {

    if (isDay) {
        if (iconModel(value) === 'clear sky') {
            return <Ionicons name={'sunny'} size={32} />
        } else if (iconModel(value) === 'sun and clouds') {
            return <FontAwesome5 name={'cloud-sun'} size={32} />
        } else {
            return <FontAwesome5 name={'cloud'} size={30} />
        }
    } else {
        if (iconModel(value) === 'clear sky') {
            return <Ionicons name={'moon-sharp'} size={32} />
        } else if (iconModel(value) === 'sun and clouds') {
            return <FontAwesome5 name={'cloud-moon'} size={32} />
        } else {
            return <FontAwesome5 name={'cloud'} size={30} />
        }
    }


}