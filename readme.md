# java Script  Browser Or window object

![Browser object ](./images/browserObject.png)

### javascript standards support

Here we used document.body.style , but there’s much, much more.

Properties and methods are described in the specification:

[DOM Living Standard](https://dom.spec.whatwg.org/)
### CSSOM for styling
CSS rules and stylesheets are not structured like HTML. There’s a separate
specification CSSOM that explains how they are represented as objects and how to read and write them.
CSSOM is used together with DOM when we modify style rules for the
document. In practice though, CSSOM is rarely required, because usually
CSS rules are static. We rarely need to add/remove CSS rules from
JavaScript, so we won’t cover it right now.

[CSS Object Models](https://www.w3.org/TR/cssom-1/)


## BOM (Browser object model)
    Browser Object Model (BOM) are additional objects provided by the browser (host environment) to work with everything except the document.

  1.  The navigator  object provides background information about the browser
and the operating system. There are many properties, but the two most widely
known are: navigator.userAgent – about the current browser, and
navigator.platform – about the platform (can help to differ between
Windows/Linux/Mac etc).

2. The location  object allows us to read the current URL and can redirect the
browser to a new one.
Here’s how we can use the location object:



Functions alert/confirm/prompt are also a part of BOM: they are directly
not related to the document, but represent pure browser methods of
communicating with the user.



## BOM is the part of the general [BOM](https://html.spec.whatwg.org/)

Yes, you heard that right. The HTML spec at <b> https://html.spec.whatwg.org </b>  is
not only about the “HTML language” (tags, attributes), but also covers a bunch of
objects, methods and browser-specific DOM extensions. That’s “HTML in broad