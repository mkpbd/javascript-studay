# Dom manipulation

## Searching: getElement*, querySelector*

DOM navigation properties are great when elements are close to each other.
What if they are not? How to get an arbitrary element of the page?

### **document.getElementById or just id**

If an element has the id attribute, then there’s a global variable by the name from that id .
We can use it to immediately access the element no matter where it is:

```html
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

```html
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
Here we look for all `<li>` elements that are last children:

```html
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
order: from the outermost `<html>` to the most nested one).querySelector

### querySelector

The call to **elem.querySelector(css)** returns the first element for the given CSS selector.

In other words, the result is the same as elem.querySelectorAll(css) [0] , but the latter is looking for all elements and picking one, while  elem.querySelector just looks for one. So it’s faster and shorter to write

The **[elem.matches(css) ](http://dom.spec.whatwg.org/#dom-element-matches)** does not look for anything, it merely checks if elem matches the given CSS-selector. It returns true or false .

```html
<a href="http://example.com/file.zip">...</a>
<a href="http://ya.ru">...</a>
<script>
// can be any collection instead of document.body.children
for (let elem of document.body.children) {
    if (elem.matches('a[href$="zip"]')) {
	alert("The archive reference: " + elem.href );
     }
}
</script>
```

Ancestors of an element are: parent, the parent of parent, its parent and so on.  The ancestors together form the chain of parents from the element to the top.

The method **elem.closest(css)** looks the nearest ancestor that matches the CSS-selector. The elem itself is also included in the search.

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
  </head>
  <body>
    <h1>Contents</h1>
    <div class="contents">
      <ul class="book">
        <li class="chapter">Chapter 1</li>
        <li class="chapter">Chapter 1</li>
      </ul>
    </div>
    <script>
      let chapter = document.querySelector(".chapter"); // LI
      alert(chapter.closest(".book")); // UL
      alert(chapter.closest(".contents")); // DIV
      alert(chapter.closest("h1")); // null (because h1 is not an ancestor)
    </script>
  </body>
</html>
```

## getElementsBy*

There are also other methods to look for nodes by a tag, class, etc.
Today, they are mostly history, as querySelector is more powerful and shorter to write.
So here we cover them mainly for completeness, while you can still find them in the old scripts.

* elem.getElementsByTagName(tag) looks for elements with the given tag and returns the collection of them. The tag parameter can also be a star "*" for “any tags”.
* elem.getElementsByClassName(className) returns elements that have the given CSS class.
* document.getElementsByName(name) returns elements with the given name attribute, document-wide. very rarely used.

// get all divs in the document
**let divs = document.getElementsByTagName('div');**

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Get Elements By TagName</title>
  </head>
  <body>
    <table id="table">
      <tr>
        <td>Your age:</td>
        <td>
          <label>
            <input type="radio" name="age" value="young" checked /> less than 18
          </label>
          <label> </label>
          <label>
            <input type="radio" name="age" value="senior" /> more than 60
          </label>
        </td>
      </tr>
    </table>
    <script>
      let inputs = table.getElementsByTagName("input");
      for (let input of inputs) {
        alert(input.value + ": " + input.checked);
      }
    </script>
  </body>
</html>

```

**It returns a collection, not an element!**

// doesn't work
document.getElementsByTagName('input').value = 5;

// should work (if there's an input)
document.getElementsByTagName('input')[0].value = 5;

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
  </head>
  <body>
    <form name="my-form">
      <div class="article">Article</div>
      <div class="long article">Long article</div>
    </form>
    <script>
      // find by name attribute
      let form = document.getElementsByName("my-form")[0];
      // find by class inside the form
      let articles = form.getElementsByClassName("article");
      alert(articles.length); // 2, found two elements with class "article"
    </script>
  </body>
</html>

```
