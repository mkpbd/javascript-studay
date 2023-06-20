# Dom manipulation
  
## Searching: getElement*, querySelector*

DOM navigation properties are great when elements are close to each other.
What if they are not? How to get an arbitrary element of the page?

### **document.getElementById or just id**

If an element has the id attribute, then there’s a global variable by the name from that id .
We can use it to immediately access the element no matter where it is:

``` html
<div id = "elem">
    <div id="elem-content">Element</div>
</div>
<script>
    alert(elem); // DOM-element with id="elem"
    alert(window.elem); // accessing global variable like this also works
    // for elem-content things are a bit more complex
    // that has a dash inside, so it can't be a variable name
    alert(window['elem-content']); // ...but accessible using square brackets [...]
</script>
```

The better alternative is to use a special method *document.getElementById(id)* .

``` html
<div id="elem">
    <div id="elem-content">Element</div>
</div>
<script>
    let elem = document.getElementById('elem');
    elem.style.background = 'red';
</script>
```

Here in the tutorial we’ll often use id to directly reference an element, but that’s
only to keep things short. In real life document.getElementById is the preferred method.

#### There can be only one

The id must be unique. There can be only one element in the document with the given id .
Only document.getElementById , not anyNode.getElementById
The method getElementById that can be called only on document object. It looks for the given id in the whole document

## querySelectorAll

By far, the most versatile method, **elem.querySelectorAll(css)** returns all elements inside elem matching the given CSS selector.
Here we look for all <li> elements that are last children:

``` html
<!DOCTYPE html>
<html lang="en">

    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Query Selector All</title>
    </head>

    <body>
        <ul>
            <li>The</li>
            <li>test</li>
        </ul>
        <ul>
            <li>has</li>
            <li>passed</li>
        </ul>
        <script>
            let elements = document.querySelectorAll('ul > li:last-child');
            for (let elem of elements) {
                alert(elem.innerHTML); // "test", "passed"
            }
        </script>
    </body>

</html>
```

This method is indeed powerful, because any CSS selector can be used

**Can use pseudo-classes as well**

Pseudo-classes in the CSS selector like :hover and :active are also supported. For instance, document.querySelectorAll(':hover') will return the collection with elements that the pointer is over now (in nesting
order: from the outermost <html> to the most nested one).
