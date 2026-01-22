let name: string[] = ["Alice Johnson", "Bob Smith", "Carol Davis", "David Brown", "Eva Green"];
let baseSalary: number[] = [75000, 68000, 82000, 90000, 60000];
let experience: number[] = [5.1, 3.2, 7.1, 10.2, 2.4];
let yearEndRating: number[] = [4.2, 3.8, 4.5, 2.5, 3.5];

function EmployeeTable(name: string[], baseSalary: number[], experience: number[], yearEndRating: number[]): void {
    for (let i = 0; i < name.length; i++) {
        {
            let variablePay = 0;
            let bonus = 0;
            let reward = 0;
            let sal = baseSalary[i]!;
            let exp = experience[i];
            let rating = yearEndRating[i];
            if (rating != undefined && rating >= 4) {
                variablePay = 15;
                bonus = 1500;
            }
            else if (rating != undefined && rating >= 3) {
                variablePay = 10;
                bonus = 1200;
            }
            else 
            {
                variablePay = 3;
                bonus = 300;
            }
            if (exp != undefined && exp >= 5) {
                reward = 5000;
            }
            let hikeAmount = (sal * variablePay) + bonus + reward;
            let hikePercentage = (hikeAmount/sal).toFixed(2);

            console.log(`${name[i]}, Hike Amount : ${hikeAmount}, Hike Percentage : ${hikePercentage}`);
        }
    }
}   
    EmployeeTable(name, baseSalary, experience, yearEndRating)

