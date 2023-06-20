# Introduction to Events

An introduction to browser events, event properties and handling patterns.

An event is a signal that something has happened. All DOM nodes generate such signals (but events are not limited to DOM).

### Mouse events

- click – when the mouse clicks on an element (touchscreen devices generate it on a tap).

- contextmenu – when the mouse right-clicks on an element.

- mouseover / mouseout – when the mouse cursor comes over / leaves an element.

- mousedown / mouseup – when the mouse button is pressed / released over an element.

- mousemove – when the mouse is moved.

### Form element events

- submit – when the visitor submits a <form> .
- focus – when the visitor focuses on an element, e.g. on an <input> .

### Keyboard events

- keydown and keyup – when the visitor presses and then releases the button.

### Document events

- DOMContentLoaded – when the HTML is loaded and processed, DOM is fully built.

### CSS events

- transitionend – when a CSS-animation finishes.

### Event handlers

To react on events we can assign a handler – a function that runs in case of an event.

Handlers are a way to run JavaScript code in case of user actions.

There are several ways to assign a handler. Let’s see them, starting from the simplest one.

### HTML-attribute

A handler can be set in HTML with an attribute named on **<event>**.

For instance, to assign a click handler for an input , we can use onclick , like here:

 ```javascript
 <input value = "Clickme" onclick = "alert( 'Click!' ) " type="button">
 ```

``` html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>

<body>
    <input type="button" onclick="countRabbits()" value="Count rabbits!">
    <script>
        function countRabbits() {
            for (let i = 1; i <= 3; i++) {
                alert("Rabbit number " + i);
            }
        }
    </script>

</body>

</html>
```

### DOM property

We can assign a handler using a DOM property on **event**
The handler is always in the DOM property: the HTML-attribute is just one of the ways to initialize it.

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>

<body>

    <input id="elem" type="button" value="Click me">
    <script>
        elem.onclick = function () {
            alert('Thank you');
        };
    </script>
</body>

</html>
```

### 1. Only HTML

```html
<input type="button" onclick="alert('hello')" id="button" value="Button">
```

### 2. HTML + JS

``` html
<input type="button" id="button" value="Button">
<script>
button.onclick = function() {
    alert('Click!');
};
</script>
```

As there’s only one onclick property, we can’t assign more than one event handler.

In the example below adding a handler with JavaScript overwrites the existing handler:

```html
<input type="button" id="elem" onclick="alert('Before')" value="Click me">
<script>
elem.onclick = function() { // overwrites the existing handler
    alert('After'); // only this will be shown
};
</script>
```

### By the way, we can assign an existing function as a handler directly

```javascript
function sayThanks() {
    alert('Thanks!');
}
elem.onclick = sayThanks;
```

To remove a handler – assign elem.onclick = null

Accessing the element: this

The value of this inside a handler is the element. The one which has the handler on it.

In the code below button shows its contents using this.innerHTML :

```javascript
<button onclick="alert(this.innerHTML)">Click me</button>
    // Possible mistakes
    // The function should be assigned as sayThanks , not sayThanks() .
    // right
    button.onclick = sayThanks;
    // wrong
    button.onclick = sayThanks();
<input type="button" id="button" onclick="sayThanks()">
```
