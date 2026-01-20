// Map<employeeName, [baseSalary, experience, rating]>

//Storing employee data (input)
let empData: Map<string, number[]> = new Map();
empData.set("Alice Johnson", [75000, 5.1, 4.2]);
empData.set("Bob Smith", [68000, 3.2, 3.8]);
empData.set("Carol Davis", [82000, 7.1, 4.5]);
empData.set("David Brown", [90000, 10.2, 2.5]);
empData.set("Eva Green", [60000, 2.4, 3.5]);

//Create empty Map to store hike percentages
const hikeMap: Map<string, number> = new Map();

for (const key of empData.keys()) {
    const data = empData.get(key)!;
    const baseSalaryN = data[0]!;
    const experienceN = data[1]!;
    const ratingN = data[2]!;

    const hikePercentageN : number = calculateHike(baseSalaryN, experienceN, ratingN);
    hikeMap.set(key, hikePercentageN)

    console.log("Hike Percentage for each employee:");
    console.log(hikeMap);

}

function calculateHike(
    baseSalaryN: number,
    experienceN: number,
    ratingN: number
): number {
    let variablePayN = 0;
    let bonusN = 0;
    let rewardN = 0;
    if (ratingN >= 4) {
        variablePayN = 15;
        bonusN = 1500;
    } else if (ratingN >= 3) {
        variablePayN = 10;
        bonusN = 1200;
    } else {
        variablePayN = 3;
        bonusN = 300;
    }

    if (experienceN >= 5) {
        rewardN = 5000;
    }
    const hike =
        (baseSalaryN * variablePayN) / 100 + bonusN + rewardN;

    return (hike / baseSalaryN) * 100;
}


