

export function multiArrayModifier(arrays) {
    const finalArr = new Array(arrays.length);
    arrays.forEach((arr, i) => finalArr[i] = modifyData(arr));
    return finalArr;
}

function modifyData(longArr) {
    const arr = [[],[],[],[],[],[],[]];

    longArr.forEach((value, index) => {
        const currIndex = Math.floor(index / 24);

        arr[currIndex].push(value);
    });
    return arr;
}