function getMedian(arr) {
    const mid = Math.floor(arr.length / 2);
    const sorted = arr.sort((a,b) => { return a - b });
    return sorted.length % 2 != 0 ? sorted[mid] : (sorted[mid - 1] + sorted[mid]) / 2;
}

function numCount(arr) {
    let numCount = {}
    arr.forEach((n) => {
        if (numCount[n] === undefined) {
            numCount[n] = 0
        }
        numCount[n] += 1
    })
    return numCount
}

function getMode(obj) {
    return Object.keys(obj).filter((n) => {
        return obj[n] == Math.max.apply(null, Object.values(obj))
    })
}

module.exports = { getMedian, numCount, getMode }