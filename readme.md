<!-- Answer No-1 -->
getElementById("id") Picks an element from HTML using its id. Only one element can be selected this way.

getElementsByClassName("class") Picks all elements that have the same class. Returns a live list, so if new elements are added with the same class, they automatically appear in the list.

querySelector("selector") Picks the first element that matches a CSS selector. Can use id, class, or any CSS selector.

querySelectorAll("selector") Picks all elements that match a CSS selector. Returns a static list (does not auto-update if new elements are added).

  <!-- Answer No-2 -->
The DOM is the structure of a webpage, where all the HTML elements live. Sometimes, we need a new element, like a div, paragraph, or button.

Steps: 1.Create a new element We use JavaScript to make a new element. At this point, it exists only in memory as an object, not yet on the page.

2.Add content to the element We can put text or HTML content inside this element.

3.Insert it into the DOM We add the new element to an existing element on the page or at the end of the DOM. If we don’t do this, the element stays in memory and the user won’t see it.

   <!-- Answer No-3 -->
Event Bubbling What it is: When an event happens on an element (like a click), it first runs on that element. Then the same event “bubbles up” to its parent elements, one by one, all the way up to the root of the page (the element).

How it works: Suppose you click a button inside a div. The click event first triggers on the button. Then it moves to the div containing the button. Then to its parent, and keeps going up the DOM tree.

Why it matters: Multiple elements can react to the same event. It helps in event delegation, where you handle events on a parent instead of every child.

  <!-- Answer No-4 -->
What it is: Instead of adding an event listener to each child element, you add a single listener to their parent element.

The parent “delegates” the event handling to the child that was actually clicked or interacted with. Why it’s useful: Saves memory – fewer event listeners are needed. Works for dynamic elements – even if new child elements are added later, the parent listener still works. Cleaner code – easier to manage one listener instead of many.

    <!-- Answer No-4 -->
preventDefault() Stops the default browser behavior of an element.

Example behaviors: Clicking a link → browser goes to the URL (default) Submitting a form → page reloads (default)

Using preventDefault() prevents these actions. It does not stop the event from bubbling to parent elements.

stopPropagation() Stops the event from bubbling up the DOM tree. Parent elements won’t get notified of this event. It does not stop the default browser behavior.