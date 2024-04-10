// ## Ans1 =>

function findWhiteBox(matrix) {
    // Initialize variables to store the position and dimensions of the white box
    let top = null;
    let left = null;
    let height = null;
    let width = null;

    // Iterate through the matrix to find the white box
    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[0].length; j++) {
            if (matrix[i][j] === 'w') {
                // Found the top-left corner of the white box
                if(top === null) top = i;
                left = j;
                // Initialize height and width
                height = 1;
                width = 1;


                // Expand the white box horizontally
                while (j + width < matrix[0].length && matrix[i][j + width] === 'w') {
                    width++;
                }
                
                // Expand the white box vertically
                
                while (j + height < matrix.length && matrix[j + height][i] === 'w') {
                    height++;
                }
                

                // Break out of the loop once the white box is found
                break;
            }
        }
    }

    // Create an object to store the result
    const result = {
        top,
        left,
        height,
        width,
    };

    return result;
}

// Example matrix
const exampleMatrix = [
    ['b', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'b'],
    ['b', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'b'],
    ['b', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'b'],
    ['b', 'b', 'b', 'w', 'w', 'w', 'w', 'w', 'b', 'b', 'b', 'b'],
    ['b', 'b', 'b', 'w', 'w', 'w', 'w', 'w', 'b', 'b', 'b', 'b'],
    ['b', 'b', 'b', 'w', 'w', 'w', 'w', 'w', 'b', 'b', 'b', 'b'],
    ['b', 'b', 'b', 'w', 'w', 'w', 'w', 'w', 'b', 'b', 'b', 'b'],
    ['b', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'b'],
    ['b', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'b'],
    ['b', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'b'],
    ['b', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'b'],
];

// Call the function with the example matrix
const boxInfo = findWhiteBox(exampleMatrix);

// Print the result
console.log(boxInfo);


// ## Ans 2 =>

function divideNumbers(arr) {
    const result = [];
    for (let i = 0; i < arr.length; i++) {
        try {
            // Divide the current number by the next number
            if (i === arr.length - 1) {
                // Divide the last number by the first number
                result.push(arr[i] / arr[0]);
            } else {
                // Divide the current number by the next number
                if(arr[i+1] !== 0){
                   result.push(arr[i] / arr[i + 1]);
                } else{
                    result.push("Division by zero")
                }
        }
        
        } catch (error) {
            // Handle division by zero
            result.push("Error: Division by zero");
        }
    }
    return result;
}

// Given array
const arr = [9, 33, 0, 7, 2, 82, 77];

// Calculate the result
const result = divideNumbers(arr);

// Print the result
for (let i = 0; i < result.length; i++) {
    console.log(`Element ${i}: ${result[i]}`);
}

// ## Ans3=>

// isNumeric check whether ia char a number or not?

function isNumeric(str) {
    return /^\d+$/.test(str); // by using regular function
}

function findNumbersInStringDivideBy3(string){

    // create an empty array to store numbers
    let numbers = [];

    // here we store  all numbers present in a string to array 
    for(let i = 0; i<string.length; i++){
        if(isNumeric(string[i])){
            numbers.push(parseInt(string[i]));
        }
    }
    
    // filters number divisible by 3 and creates new array result
    let result = numbers.filter(eachNumber => eachNumber%3 === 0);
    
    // sum of all divisible by 3 numbers by using reduce built in function
    let sum = result.reduce((acc, cur) => acc + cur);
    
    console.log(sum); // print sum
    console.log(result[result.length-1]) // print last divisible by 3 digit from the string.
}

findNumbersInStringDivideBy3('werf334f5f6fygg5t'); // Example 

// ## Ans4 =>

function findLastManStanding(total) {
    // Create an array to represent the circle of people
    let people = [];
    for (let i = 1; i <= total; i++) {
      people.push(i);
    }
  
    // Start eliminating people until only one is left
    let current = 0;
    while (people.length > 1) {
      // Kill the next person in line
      let next = (current + 1) % people.length;
      people.splice(next, 1);
  
      // Move to the next person who gets the gun
      current = next;
    }
  
    // Return the number of the last person standing
    return people[0];
  }
  
  // Test the function with 100 people
  console.log("The last man standing is:", findLastManStanding(100));


  // ### Ans => 5

  /* 1. Hotels Collection:

    Documents:
    _id: MongoDB automatically generates a unique identifier for each document.
    name: Name of the hotel.
    menus: Array of objects representing menus available at the hotel. Each menu object can
    contain menu-related data such as menu_name and food_items.
    */
    const hotelsCollection = [
        {
          _id: 1,
          name: "Hotel ABC",
          menus: [
            {
              menu_name: "Breakfast",
              food_items: [
                { food_item_name: "Eggs", description: "Scrambled eggs with toast" },
                { food_item_name: "Pancakes", description: "Fluffy pancakes served with maple syrup" }
              ]
            },
            {
              menu_name: "Lunch",
              food_items: [
                { food_item_name: "Burger", description: "Classic beef burger with fries" },
                { food_item_name: "Salad", description: "Fresh garden salad with dressing" }
              ]
            }
          ]
        },
        {
          _id: 2,
          name: "Hotel XYZ",
          menus: [
            {
              menu_name: "Dinner",
              food_items: [
                { food_item_name: "Steak", description: "Grilled ribeye steak with mashed potatoes" },
                { food_item_name: "Pasta", description: "Spaghetti with marinara sauce" }
              ]
            }
          ]
        }
      ];
      
      // Sample usage
      console.log(hotelsCollection);
      /*In this example:
      
      We have a hotelsCollection array containing hotel documents.
      Each hotel document has an _id field, a name field for the hotel's name, and a menus array containing menu objects.
      Each menu object within the menus array has a menu_name field for the menu's name and a food_items array containing food item objects.
      Each food item object within the food_items array has a food_item_name field for the food item's name and a description field for its description.
      This structure allows for multiple hotels, each with multiple menus, and each menu with multiple food items, fulfilling the requirements of the relationship described.
  */