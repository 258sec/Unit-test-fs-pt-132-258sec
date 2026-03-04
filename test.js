const {sum,fromDollarToYen,fromYenToPound,fromEuroToDollar} = require("./app.js");

test("adds 14 +9 to equal 23",()=> {
    let total =sum(14,9);

    expect(total).toBe(23);
});


test("5 euros deben ser 5.35 dolares", () =>{
    expect(fromEuroToDollar(5)).toBeCloseTo(5.35)
});

test("5 dolares deben ser 731.36 yenees", () =>{
    expect(fromDollarToYen(5)).toBeCloseTo(731.3084);
});

test("5 yenes deben ser 0.02 libras", () =>{
    expect(fromYenToPound(5)).toBeCloseTo(0.0278);
});
