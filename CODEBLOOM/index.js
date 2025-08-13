
/*
let firstName, lastName, age;
firstName = "Albasoliyy";
lastName = "ABDULROHEEM";
age = 33;

age = 'twenty three';
alert("My name is " + firstName + " " + lastName + " and I am " + age + " years old.");
console.log("My name is " + firstName + " " + lastName + " and I am " + age + " years old.");
let fullName = firstName + " " + lastName;
//prompt("What is your Full Name?")
console.log(fullName);

let year, adeAde, olaAge;
year = 2025;
adeAge = 44;
olaAge = 22;

yearAde = year - adeAge;
yearOla = year - olaAge;
console.log(yearAde);
console.log(yearOla);
console.log(yearAde + yearOla);
console.log(year - 3)
console.log(year / 5)
console.log(year * 5)

let adeOlder, olaOlder;
adeOlder = adeAge > olaAge;
olaOlder = adeAge < olaAge;
console.log(adeOlder);
console.log(olaOlder);

console.log(typeof year);
console.log(typeof gender);
console.log(typeof firstName);
console.log(typeof fullName);

let isAge = year - yearAde >= 44;
console.log(isAge);

let average = (adeAge + olaAge) / 2;
console.log(average);

let x, y;
x = y = (3 + 5) * 6 / 2 + 5; // 8*6 / 2+5 // 48 / 2 + 5 // 24 + 5 // 29
console.log(x, y);

let z = y - 15;
console.log(z);

z += 50;
console.log(z);
z++;
console.log(z);
z--;
console.log(z);
z *= 5;
console.log(z);

let massJohn, heightJohn, massMark, heightMark;
massJohn = 78;
heightJohn = 1.69;
massMark = 92;
heightMark = 1.95;

// to calculate John BMI

let johnBmi = massJohn / heightJohn ** 2;
console.log(johnBmi);

// to calculate Mark BMI 

let markBmi = massMark / heightMark ** 2;
console.log(markBmi);

//heigher

let johnHeigher = johnBmi > markBmi;
console.log("is john'\s BMI higher than Mark'\s?" + " " + johnHeigher);

let markHeigher = markBmi > johnBmi;
console.log("is Mark'\s BMI higher than john'\s?" + " " + markHeigher);


if (johnBmi > markBmi) {
    console.log("John'\s BMI is higher than Mark'\s BMI")
} else {
    console.log("Mark'\s BMI is higher than John'\s BMI")
}

let civilStatus = 'single';
if (civilStatus === 'married') {
    console.log(lastName + " " + 'is Married')
} else {
    console.log(lastName + " " + 'is yet to be Married, but is preparing to soon.')
}

if (age < 13) {
    console.log(lastName + "  is a boy.")
} else if (age >= 13 && age < 20) {
    console.log(lastName + "  is a teenager.")
} else if (age > 20 && age <= 30) {
    console.log(lastName + "  is a young man.")
} else if (age > 20 || age <= 50) {
    console.log(lastName + "  is a young man.")
} else {
    console.log(lastName + "  is a man.")

}


// Ternary Operators

age <= 23 ? console.log(firstName + " is a Guy.") : console.log(firstName + " is a Man.");

let drink = age >= 18 ? 'wine' : 'juice';
console.log(firstName + ' will have to drink ' + drink);

//Switch Statement

let job = 'student';
switch (job) {
    case 'teacher':
    case 'facilitator':
        console.log(firstName + ' is a teacher that teaches Student how to Code.');
        break;
    case 'driver':
        console.log(firstName + ' drives his own Car in the highway of island.')
        break;
    case 'student':
    case 'learner':
        console.log(firstName + ' is a student of  Information Technology in FUTMINNA')
        break;
    case 'designer':
        console.log(firstName + ' is a designer that designs a beautiful Website')
        break;
    default:
        console.log(firstName + ' does something else.')
}


age = 42;
switch (true) {
    case age < 13:
        console.log(lastName + "  is a boy.")
        break;
    case age >= 13 && age < 20:
        console.log(lastName + "  is a teenager.")
        break;
    case age > 20 && age <= 30:
        console.log(lastName + "  is a young man.")
        break;
    case age > 20 && age <= 50:
        console.log(lastName + "  is a young man.")
        break;
    default:
        console.log(lastName + "  is a man.")
}

// Team John
let jonh1, john2, john3;
john1 = 89;
john2 = 120;
john3 = 103;

// Team Mike
let mike1, mike2, mike3;
mike1 = 116;
mike2 = 94;
mike3 = 123;

// Team Mary
let mary1, mary2, mary3;
mary1 = 97;
mary2 = 134;
mary3 = 105;

//To calculate the Average Score of JOHN
let john = (john1 + john2 + john3) / 3;
console.log('The Average score of JOHN team is ' + john + ' points.');

//To calculate the Average Score of MIKE
let mike = (mike1 + mike2 + mike3) / 3;
console.log('The Average score of MIKE team is ' + mike + ' points.');

//To calculate the Average Score of MARY
let mary = (mary1 + mary2 + mary3) / 3;
console.log('The Average score of MARY team is ' + mary + ' points.');


if (john > mike) {
    console.log('The Average highest score goes to JOHN\'s team with the average score of ' + john)
} else {
    console.log('The Average highest score goes to MIKE\'s team with the average score of ' + mike)
}
if (john > mike) {
    console.log('JOHN\'s team is the WINNER of the game!');
} else if (john === mike) {
    console.log('The game ended up in DRAW as the two team have the same Average score of ' + mike)
} else {
    console.log('MIKE\'s team is the WINNER of the game!');
}

if (john > mike && john > mary) {
    console.log('The highest score goes to the team JOHN with ' + john + ' points.')
} else if (mike > john && mike > mary) {
    console.log('The highest score goes to the team MIKE with ' + mike + ' points.')
} else if (mary > john && mary > mike) {
    console.log('The highest score goes to the team MARY with ' + mary + ' points.')
} else {
    console.log('There is DRAW at the end of the game with everyone having ' + mary + ' points.')
}

switch (true) {
    case mike === john:
        console.log('The team MIKE has the same average score with the team JOHN with both having ' + mike + ' points.')
        break;
    case mike === mary:
        console.log('The team MIKE has the same average score with the team MARY with both having ' + mary + ' points.')
        break;
    case mary === john:
        console.log('The team JOHN has the same average score with the team MARY with both having ' + john + ' points.')
        break;
    case mike > john && mike > mary:
        console.log('MIKE is announced the WINNER of all.')
        break;
    case mary > john && mary > mike:
        console.log('MARY is announced the WINNER of all.')
        break;
    case john > mike && john > mary:
        console.log('MIKE is announced the WINNER of all.')
        break;
    default:
        console.log('The three of them has the same point making the game a DRAW at the end.')
}

function calculateAge(birthYear) {
    return 2025 - birthYear;
}

let myAge = calculateAge(2002)
console.log('I am ' + myAge + ' years old as of today.')

function yearUntilRetirement(year, firstName, lastName) {
    let age = calculateAge(year);
    let retirement = 60 - age;
    console.log(lastName + ' ' + firstName + ' will retires in ' + retirement + ' years time.')
    console.log(lastName + ' the son of ' + firstName + ' which was born in oyo ' + retirement + ' years ago.')
}

yearUntilRetirement(2002, 'AbdulWarith', 'AbdulRoheem');
yearUntilRetirement(1982, 'Sheikh', 'Waliyullahi');
yearUntilRetirement(1987, 'Adeyemi', 'Olamimo');
yearUntilRetirement(1990, 'Abdullahi', 'Muhammad');

let yourJob = function (job, firstName) {
    switch (job) {
        case 'teacher':
            return firstName + ' teaches how to code.';
        case 'driver':
            return firstName + ' drives car.';
        case 'student':
            return firstName + ' learn how to write a bug free code.';
        case 'designer':
            return firstName + ' design beautiful Website.';
        case 'project manager':
            return firstName + ' supervises the Website created.';
        default:
            return firstName + ' does something else.';
    }
}

console.log(yourJob('teacher', 'AbdulRoheem'));
console.log(yourJob('driver', 'AbdulRoheem'));
console.log(yourJob('student', 'Adeyemi'));
console.log(yourJob('designer', 'Albasoliyy'));
console.log(yourJob('project manager', 'Atanda'));
console.log(yourJob('teacher', 'AbdulRoheem'));


//ARRAY
let names = ['AbdulWarith', 'Atanda', 'Albasoliyy'];
let years = [2000, 2002, 2004, 2006]
let about = ['Abdulwarith', 2002, 'student', 'single']
console.log(about);
console.log(years);
console.log(names);
names[2] = 'Adey';
console.log(names);
names.pop();
console.log(names);
names.shift();
console.log(names);
names.unshift('ALbasoliyy');
console.log(names);


function johnBill(bill) {
    let percentage;
    if (bill < 50) {
        percentage = .20;
    } else if (bill >= 50 && bill < 200) {
        percentage = .15;
    } else {
        percentage = .10;
    }
    return percentage * bill;
}

let bills = [124, 48, 268];
let tips = [
    johnBill(bills[0]),
    johnBill(bills[1]),
    johnBill(bills[2]),
]

console.log(bills, tips);

let finalValues =
    [
        bills[0] + tips[0],
        bills[1] + tips[1],
        bills[2] + tips[2]
    ]
console.log(finalValues);



//OBJECT
let john = {
    firstName: 'John',
    lastName: 'Smith',
    birthYear: 2000,
    isMarried: false,
    family: ['jane', 'mike', 'ola'],
    job: 'teacher'
}

console.log(john);
console.log(john['firstName']);
console.log(john.firstName);

john.job = 'designer';
john['isMarried'] = true;
console.log(john);

john.family[2] = 'taye';
console.log(john);


let mike = {
    firstName: 'mike',
    lastName: 'Smith',
    birthYear: 1990,
    isMarried: false,
    family: ['jane', 'john', 'jaye'],
    job: 'student'
}
console.log(mike);
console.log(mike['firstName']);
console.log(mike.firstName);

mike.job = 'designer';
mike['isMarried'] = true;
console.log(mike);

mike.family[2] = 'kehinde';
console.log(mike);


let john = {
    firstName: 'John',
    lastName: 'Smith',
    birthYear: 2010,
    isMarried: false,
    family: ['jane', 'mike', 'ola'],
    job: 'teacher',
    calcAge: function (birthYear) {
        this.age = 2025 - this.birthYear;
    }
}
console.log(john.calcAge());
console.log(john);


let john = {
    firstName: 'John',
    lastName: 'Smith',
    mass: 70,
    height: 1.69,
    calcBmi: function () {
        this.Bmi = this.mass / this.height ** 2;
        return this.Bmi;
    }
}

let mark = {
    firstName: 'Mark',
    lastName: 'Smith',
    mass: 80,
    height: 1.69,
    calcBmi: function () {
        this.Bmi = this.mass / this.height ** 2;
        return this.Bmi;
    }
}

console.log(john.calcBmi(), mark.calcBmi());

if (john.calcBmi() > mark.calcBmi()) {
    console.log(john.firstName + ' ' + john.lastName + ' is the WINNER of the Game with ' + john.calcBmi() + ' points.');
} else if (mark.calcBmi() > john.calcBmi()) {
    console.log(mark.firstName + ' ' + mark.lastName + ' is the WINNER of the Game with ' + mark.calcBmi() + ' points.');
} else {
    console.log('There is a DRAW at the end of the Game.');
}

// LOOP AND ITERATION
// for loop
for (let x = 1; x <= 10; x++) {
    console.log(x);
}

let ade = ['Adeyemi', 'Atanda', 2000, 'Single', true];
for (let i = 0; i < ade.length; i++) {
    console.log(ade[i]);
}

let w = 0;
while (w < 10) {
    console.log(w);
    w++;
}
let i = 0;
while (i < ade.length) {
    console.log(ade[i]);
    i++;
}

let ade = ['Adeyemi', 'Atanda', true, 'single', 2000, 'student'];

for (let i = 0; i < ade.length; i++) {
    if (typeof ade[i] !== 'string') continue;
    console.log(ade[i]);
}

for (let i = 0; i < ade.length; i++) {
    if (typeof ade[i] !== 'string') break;
    console.log(ade[i]);
}
*/
let jack = {
    fullName: 'JAck JAck',
    bills: [124, 48, 268, 180, 42],

    calcTips: function () {

        this.tips = [];
        this.finalvalues = [];

        for (let i = 0; i < this.bills.length; i++) {

            let percentage;
            let bill = this.bills[i];

            if (bill < 50) {
                percentage = .20;
            } else if (bill >= 50 && bill < 200) {
                percentage = .15;
            } else {
                percentage = .10;
            }
            let tips = bill * percentage;
            let finalValues = bill * percentage + bill;

             this.tips.push(tips);
            this.finalvalues.push(finalValues);
        }
    }
}

let mark = {
    bills: [77, 375, 110, 45],
    tips: [],
    finalvalues: [],

    calcTips: function () {
        for (let i = 0; i < this.bills.length; i++) {
            let bill = this.bills[i];
            let percentage;

            if (bill < 100) {
                percentage = 0.20;
            } else if (bill >= 100 && bill < 300) {
                percentage = 0.10;
            } else {
                percentage = 0.25;
            }

            let tip = bill * percentage;
            let finalValue = bill + tip;

            this.tips.push(tip);
            this.finalvalues.push(finalValue);
        }
}
}


jack.calcTips();
mark.calcTips();
console.log(jack, mark);



let musa = {
    bills: [77, 375, 110, 45],
    tips: [],
    finalvalues: [],

    calcTips: function () {
        for (let i = 0; i < this.bills.length; i++) { // Changed from >= to <
            let bill = this.bills[i];
            let percentage;

            if (bill < 100) {
                percentage = 0.20;
            } else if (bill >= 100 && bill < 300) {
                percentage = 0.10;
            } else {
                percentage = 0.25;
            }

            let tip = bill * percentage; // Fixed undefined variable
            let finalValue = bill + tip;

            this.tips.push(tip);           // Store tip in the tips array
            this.finalvalues.push(finalValue); // Store final value in the finalvalues array
        }
    }
};

musa.calcTips(); // Call the method to calculate
console.log(musa); // Now it will show the updated tips and finalvalues

























































