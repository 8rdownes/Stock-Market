//imports your code to be tested
const Stock = require("./stock.js");
const Portfolio = require("./portfolio.js");

//Imports my code to run your examples against the economic forcast
//const Forecast = require("./forcast");

function main(){

    //create all of your stocks
    let s1 = new Stock(Google,googl,NASDAQ,104.21,100);
    let s2 = new Stock(Yahoo,abba,BAS,70.20,100);
    let s3 = new Stock(Potbellys,Pbpb,NASDAQ,11.14,100);
    let s4 = new Stock(ActivisionBlizzard,Attvi,NASDAQ,62,100);

    //build your Portfolio
    let myport = new Portfolio();
    myport.add(stk1);
    myport.add(stk2);
    myport.add(stk3);
    myport.add(stk4);


console.log(myport.totalValue());
console.log("------------");
console.log(myport);

    //generate a test forcast
        //build prediction
}

main();
