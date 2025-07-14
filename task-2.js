const values = [10, 30, 70, 90, 80, 60, 40];

const colors = ["🟥", "🟧", "🟨", "🟩", "🟦", "🟪", "🟫"];


const empty = "⬛"

const bars = values.map((value, i) =>{
   return Array(10).fill(empty).fill(colors[i], 0, Math.round(value / 10))
});


const graph = bars.map(row => row.join(" ")).join("\n");


console.log(graph);
