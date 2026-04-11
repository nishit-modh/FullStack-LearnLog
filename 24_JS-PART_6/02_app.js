//welcome a person

function welcome( name, role) {
    console.log(`welcome ${name}, You are a ${role} at this server!`);
}
welcome( "Dev", "Architect");
welcome( "Zoro", "Navigator");

//average of three numbers
function averageOf3(a, b, c){
    console.log(`The average of ${a}, ${b} and ${c} is ${(a + b + c) / 3}!!`);
}
averageOf3(10,40,25);
averageOf3(200,500,800);

// print the table of given number
function table(n) {
    console.log(`Here is the table of ${n}`);
    for( i = 1 ; i <= 10 ; i++){
        console.log(`${n} X ${i} = ${n * i}`);
    }
}
table(10);
table(13);
table(19);