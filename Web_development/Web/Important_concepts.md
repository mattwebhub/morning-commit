# DOM in Web Development

The Document Object Model, commonly known as DOM, is an API that represents HTML and XML documents as a tree structure, where each node in the tree represents a part of the document. It allows programs and scripts to dynamically manipulate the content, structure, and style of a document.

## How Browser Constructs the DOM

When a web page is loaded, the browser downloads the HTML into a string and parses it into a tree of node objects, forming the DOM.

## 'DOMContentLoaded' Event VS 'load' Event

'DOMContentLoaded' event is fired when the initial HTML document has been completely loaded and parsed, without waiting for stylesheets, images, and subframes to finish loading. On the other hand, the 'load' event is fired when the whole page (including all dependencies like stylesheets and images) are fully loaded.

## Difference Between 'node' and 'element' in the DOM

In the DOM, everything is considered a 'node', while 'element' is only a type of node. Other types of nodes could be text nodes, comment nodes etc.

## The Role of 'document' Object in JavaScript

The 'document' object is the root node of the HTML document and the entry point into the web page's content. It represents the page so that programs can change the document structure, style, and content.

## Selecting an Element in the DOM

Elements in the DOM can be selected using methods like:

- `getElementById(id)`
- `getElementsByClassName(name)`
- `getElementsByTagName(name)`
- `querySelector(selector)`

## Adding or Removing a Class to an HTML Element in the DOM Using JavaScript

JavaScript provides `classList` property which can be used to add or remove classes. For Example:

- `element.classList.add('new-class')` to add a class.
- `element.classList.remove('old-class')` to remove a class.

## Event Bubbling and Capturing

Event propagation is a three-phase process.

1. Capturing Phase: The event goes down to the element.
2. Target Phase: The event has reached the target element.
3. Bubbling Phase: The event bubbles up from the element.

## Purpose of 'event.target' Property

The 'event.target' property gets the element on which the event originally occurred, it is used in event delegation.

## Creating, Inserting, or Removing a DOM Element With JavaScript

- Create: `createElement(tagName)`
- Insert: `parentNode.insertBefore(newNode, referenceNode)`
- Remove: `parentNode.removeChild(child)`

## Handling 'click' Events in JavaScript

Add an event listener to the element:

- `element.addEventListener('click', function());`

## 'Live' NodeList vs 'Static' NodeList

A 'live' NodeList automatically updates itself when the document changes, while a 'static' NodeList doesn’t update.

## 'parentNode', 'nextSibling', 'previousSibling', 'firstChild', and 'lastChild' Properties

- `parentNode`: The parent of the specified node in the DOM tree.
- `nextSibling`: The node immediately following the specified one in its parent's childNodes list.
- `previousSibling`: The node immediately preceding the specified one in its parent's childNodes list.
- `firstChild`: The first child node of the specified node, or null if there are no child nodes.
- `lastChild`: The last child of the specified node, or null if there are no child nodes.

## Preventing the Default Action of an Event in JavaScript

- `event.preventDefault();`

## Shadow DOM

Shadow DOM provides encapsulation for JavaScript, CSS, and templating in a Web Component by hiding DOM behind a shadow root.

## Purpose of 'document.createElement'

`document.createElement` creates a new element node with the specified name.

## Attaching an Event Listener to Multiple Elements in JavaScript

Using a loop or array method like forEach, map etc. to iterate over multiple elements and using `addEventListener`.

## Pros and Cons of Using 'innerHTML'

Pros:

- Easy to use.
- Can be faster for small number of operations.

Cons:

- Doesn’t update in 'live' collections.
- Can have security implications if the content is user-input.
- Higher cost for large numbers of operations.

## The 'querySelectorAll' Method

Method that returns a static NodeList representing a list of elements matching the specified group of selectors.

## Checking if an Element has a Particular Class in JavaScript

`element.classList.contains('class-name');`
``

# What happens when you type an URL in the browser and hit Enter?

This document explains the process your browser undergoes when you request a webpage URL in the address bar.

## Process Overview:

1. **URL Parsing** : The browser parses the URL into different components, including protocol (HTTP or HTTPS), domain name, port, path, query string, and fragment identifier.

2. **DNS Lookup** : The browser performs a DNS lookup to translate the domain name into an IP address. If the browser has this cached, it skips this step.

3. **Establish Connection** : The browser establishes a TCP connection with the server. If the protocol is HTTPS, a TLS handshake also takes place for secure communication.

4. **Send HTTP Request** : Once connected, the browser sends an HTTP GET request to the server.

5. **Server Response** : The server processes the request and sends back an HTTP response containing the webpage's files.

6. **Render Webpage** : The browser interprets the HTML, CSS, JavaScript, and other coding languages, then renders the webpage.
