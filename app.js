const sum =(a,b)=>{
    return a+b
}

console.log(sum(7,3));

let oneEuroIs = {
    "JPY": 156.5, // japan yen
    "USD": 1.07, // us dollar
    "GBP": 0.87, // british pound
};

//Euro a dolar
const fromEuroToDollar=(euro)=>{
    return euro * oneEuroIs.USD;
};
console.log(fromEuroToDollar(5));

//Dolar a yen
const fromDollarToYen=(dolar)=>{
    const euro = dolar/ oneEuroIs.USD;
    return euro*oneEuroIs.JPY;
};
console.log(fromDollarToYen(5));


//de yenes a euros
const fromYenToEuro=(yen)=>{
    return yen /oneEuroIs.JPY;
}
console.log(fromYenToEuro(5));

//De yenes a libras
const fromYenToPound=(yen)=>{
    const euro=fromYenToEuro(yen);
    return euro * oneEuroIs.GBP;
};
console.log(fromYenToPound(5));


module.exports={sum,fromDollarToYen,fromEuroToDollar,fromYenToPound};



