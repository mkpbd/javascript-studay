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

We can assign a handler using a DOM property on<event>
