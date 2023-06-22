# UI Events

**Mouse events basics**

Mouse events come not only from “mouse manipulators”, but are also emulated on touch devices, to make them compatible.

*Mouse event types*

We can split mouse events into two categories: “simple” and “complex”

Simple events

   **mousedown/mouseup**

    Mouse button is clicked/released over an element

    **mouseover/mouseout**

    Mouse pointer comes over/out from an element

**mousemove**

    Every mouse move over an element triggers that event

**Complex events**

**click** Triggers after mousedown and then mouseup over the same element if the left mouse button was used.

**contextmenu Triggers after mousedown if the right mouse button was used.**

**dblclick** Triggers after a double click over an element.

**Events order**  For instance, a click first triggers mousedown , when the button is pressed, then mouseup and click when it’s released.

In cases when a single action initiates multiple events, their order is fixed. That is, the handlers are called in the order mousedown → mouseup → click


Modifiers: shift, alt, ctrl and meta

All mouse events include the information about pressed modifier keys.

shiftKey 	altKey      ctrlKey
