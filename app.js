console.log("Hello World!\n==========\n");

// Exercise 1 Section
console.log("EXERCISE 1:\n==========\n");
function printOdds(count) {
    if (count < 0 ){
        count = count * -1;
    }
    for ( let i = 1; i <= count; i++ ){
        if (i % 2 != 0 ) {
            console.log(i);
        }
    }
}
printOdds(-10);
printOdds(10);

// Exercise 2 Section
console.log("EXERCISE 2:\n==========\n");
function checkAge(userName, age){
    let legalAgeMessage = `Congrats! ${userName}! You can Drive!`;
    let tooYoungMessage = `Sorry ${userName}, You're too young!`;
    if (age == null || userName == null){
        console.log(`Sorry USER not found`);
    }else{
        if(age >= 16){
            legalAgeMessage;
        }else{
            tooYoungMessage;
        }
            
    }

        
}

checkAge()

//Exercise 3 Section
console.log("EXERCISE 3:\n==========\n");
function whichQuadrant(x, y){
    if (x > 0 && y > 0){
        console.log(`${x}, ${y} is in Quadrant 1...`);
    }else if (x < 0 && y > 0) {
        console.log(`${x}, ${y} is in Quadrant 2...`);
    }else if (x < 0 && y < 0){
        console.log(`${x}, ${y} is in Quadrant 3...`);
    }else if (x > 0 && y <0){
        console.log(`${x}, ${y} is in quadrant 4...`);
    }else if ( x != 0 && y == 0){
        console.log(`${x}, ${y} is on the x axis...`);
    }else if (y != 0 && x == 0 ){
        console.log(`${x}, ${y}, is on the y axis...`);

    }else{
        console.log(`${x}, ${y} is on the origin`);
    }
}
whichQuadrant(45, -10);

// Exercise 4 section
console.log("EXERCISE 4\n==========\n")
function typeOfTriangle(side1, side2, side3) {
    let isValid = false;
    if (side1 + side2 >side3 && side2 + side3 > side1 && side1 + side3 > side2){
        isValid = true;
    }
    if (isValid){
        if( side1 == side2 && side2 ==side3){
            console.log(
                `Sides ${side1}, ${side2}, and ${side3} form an equilateral triangle`
            );
        }else if (side1 == side2 || side2 == side3){
            console.log(
                `Sides ${side1}, ${side2}, and ${side3} form an isosceles triangle`
            );
        }else {
            console.log(
                `Sides ${side1}, ${side2}, and ${side3} form a scalene triangle`
            );

        }
            
    }

    if (isValid == false){
        console.log(`Sorry, but that isnt a triangle`);
    }
}

typeOfTriangle(12,12,12);
typeOfTriangle(12,12,10);
typeOfTriangle(5,6,7);
            
// Exercise 5
function dataPlan(planLimit, day, usage){
    let daysLeftOnPlan = 30 - day;
    let averageDailyUse = usage / day;
    let suggestedAverageUse = planLimit / 30;
    let howmuchDataLeft = planLimit - usage;
    let projectedUsage = Math.abs(planLimit - (averageDailyUse * 30));
    let suggestedUsage = howmuchDataLeft / daysLeftOnPlan;

    if (averageDailyUse > suggestedAverageUse){
        console.log(
            `${day} day(s) used,\n
            ${daysLeftOnPlan} day(s) remaining.\n
            What you are using ${averageDailyUse.toFixed(2)} GB/Day\n
            You are EXCEEDING your average daily use.\n
            Recomended usage: ${suggestedAverageUse.toFixed(2)} GB/Day\n
            Continuing this usage, you'll be under your data plan by ${projectedUsage} GB.`
        );
    }
}

