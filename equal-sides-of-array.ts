
function findEvenIndex(arr) {

    for (let i = 0; i <= arr.length; i++) {
        const sumLeft = arr.slice(0, i).reduce((a, b) => a + b, 0);
        const sumRight = arr.slice(i+1, arr.length).reduce((a, b) => a + b, 0);
        if (sumLeft === sumRight)
            return i;
    }

    return -1;
}
