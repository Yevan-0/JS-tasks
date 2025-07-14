const marks = [
    [44, 65, 84, 12, 56, 89, 63],
    [74, 84, 94, 49, 68, 84, 55],
    [58, 68, 38, 58, 74, 95, 67],
    [95, 82, 65, 72, 64, 72, 35],
    [95, 53, 74, 64, 48, 82, 90]
]

// Totals
const totals = marks.map((subarray) => {
    return subarray.reduce((accumilator, element) => accumilator + element);
})

console.log('totals:', totals);


// averages

const averages = totals.map((total, i) => + (total / 7).toFixed(2));

console.log('averages:', averages);

const sortedAverages = [...averages].sort((a, b) => b - a);

console.log('sortedAverages:', sortedAverages);

// Positions

const positions = averages.map((average) => {
    return sortedAverages.findIndex(val => Math.abs(val - average) < 0.01) + 1;
})

console.log('positions:', positions);