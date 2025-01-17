// You are given a group of people, the type of the group, and the day of the week they are going to stay. Based on that information calculate how much they have to pay and print that price on the console. Use the table below. In each cell is the price for a single person. 
// The output should look like that: `Total price: {price}`.The price should be formatted to the second decimal point.
// 	            Friday	    Saturday	Sunday
// Students	    8.45	    9.80	    10.46
// Business	    10.90	    15.60	    16
// Regular	    15	        20	        22.50

// There are also discounts based on some conditions:
// ·	Students – if the group is bigger than or equal to 30 people you should reduce the total price by 15%
// ·	Business – if the group is bigger than or equal to 100 people 10 of them can stay for free
// ·	Regular – if the group is bigger than or equal to 10 and less than or equal to 20 reduce the total price by 5%

function vacation(group, type, day) {
    let singularPrice = 0;
    let discountPrice = 10 * singularPrice;
    if (day === "Friday") {
        switch (type) {
            case "Students": singularPrice = 8.45; break;
            case "Business": singularPrice = 10.90; break;
            case "Regular": singularPrice = 15; break;
        }
    } else if (day === "Saturday") {
        switch (type) {
            case "Students": singularPrice = 9.80; break;
            case "Business": singularPrice = 15.60; break;
            case "Regular": singularPrice = 20; break;
        }
    } else if (day === "Sunday") {
        switch (type) {
            case "Students": singularPrice = 10.46; break;
            case "Business": singularPrice = 16; break;
            case "Regular": singularPrice = 22.50; break;
        }
    }
    let price = group * singularPrice;
    if (type === "Students" && group >= 30) {
        price = price * 0.85;
    } else if (type === "Business" && group >= 100) {
        price = price - discountPrice;
    } else if (type === "Regular" && group >= 10 && group <= 20) {
        price = price * 0.95;
    }
    console.log(`Total price: ${price.toFixed(2)}`);
}
vacation(30, "Students", "Sunday");
vacation(400, "Business", "Saturday");
vacation(40,
    "Regular",
    "Saturday"
    );
