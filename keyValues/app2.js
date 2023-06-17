//======== The rest pattern “…” =========

// What if the object has more properties than we have variables? Can we take some and then assign the “rest” somewhere?

let options = {
  title: "Menu",
  height: 200,
  width: 100,
};
// title = property named title
// rest = object with the rest of properties
let { title, ...rest } = options;
// now title="Menu", rest={height: 200, width: 100}
alert(rest.height); // 200
alert(rest.width); // 100


let {titles, width, height} = {title: "Menu", width: 200, height: 100};


/**
 * 
 * To show JavaScript that it’s not a code block, we can make it a part of an expression by wrapping in parentheses (...) :
 * 
 */

let title1, width1, height1;
// okay now
({title1, width1, height1}) = {title: "Menu", width: 200, height: 100};
alert( title1 ); // Menu

//=========== Nested destructuring 

/**
 * 
 * If an object or an array contain other objects and arrays, we can use more complex left-side patterns to extract deeper portions. 
 * In the code below options has another object in the property size and an array in the property items . 
 * The pattern at the left side of the assignment has the same structure:
 * 
 */

let options1 = {
    size: {
    width: 100,
    height: 200
    },
    items: ["Cake", "Donut"],
    extra: true // something extra that we will not destruct
    };
    // destructuring assignment split in multiple lines for clarity
    let {
    size: { // put size here
    width2,
    height2
    },
    items: [item1, item2], // assign items here
    title2 = "Menu" // not present in the object (default value is used)
    } = options;
    alert(title); // Menu
    alert(width); // 100
    alert(height); // 200
    alert(item1); // Cake
    alert(item2); // Donut



    // take size as a whole into a variable, ignore the rest
let { size } = options;


//================ Smart function parameters ==============

/***
 * 
 * 
 * There are times when a function has many parameters, most of which are optional. That’s especially true for user interfaces.
 * Imagine a function that creates a menu. It may have a width, a height, a title, items list and so on.
 * 
 * 
 * 
 */
function showMenu3(title = "Untitled", width = 200, height = 100, items = []) {
    // ...
    }




    // we pass object to function
let options2 = {
    title: "My menu",
    items: ["Item1", "Item2"]
    };

    // ...and it immediately expands it to variables
    function showMenu({title = "Untitled", width = 200, height = 100, items = []}) {
    // title, items – taken from options,
    // width, height – defaults used
    alert( `${title} ${width} ${height}` ); // My Menu 200 100
    alert( items ); // Item1, Item2
    }
    showMenu(options2);

    // We can also use more complex destructuring with nested objects and colon mappings: 

    let options3 = {
        title: "My menu",
        items: ["Item1", "Item2"]
        };
        function showMenu({
        title = "Untitled",
        width: w = 100, // width goes to w


        height: h = 200, // height goes to h
items: [item1, item2] // items first element goes to item1, second to item2
}) {
alert( `${title} ${w} ${h}` ); // My Menu 100 200
alert( item1 ); // Item1
alert( item2 ); // Item2
}

//========= The syntax is the same as for a destructuring assignment: 

// We can fix this by making {} the default value for the whole destructuring thing: 

// simplified parameters a bit for clarity
function showMenu3({ title = "Menu", width = 100, height = 200 } = {}) {
    alert( `${title} ${width} ${height}` );
    }
    showMenu(); // Menu 100 200