
# CSS Demo
Background

CSS is a showcase of interesting effects using CSS, SCSS, Bootstrap, JavaScript, and jQuery. Exploring cutting edge CSS technologies, especially CSS Grid, CSS Flexbox, and keyframes, solidified my understanding of how to embed sturdy, practical page layouts and animations into my web applications.


Features

CSS Demo has four effects. 

Effect 1 - Dropdown Menus
The first is a collection of dropdown menus that exhibits unique dropping animations. They look as follows: 

(gif of demoing all four dropdowns)

All four dropdowns make each subsequent element animate smoothly one after another. I achieved this by giving each element in the dropdown a unique delay, using an SCSS @for rule, depending on its nth-child() value. Here is a code snippet showing an "li" in the first dropdown menu.

(code snippet of li)

Effect 2 - Grid Gallery
The second effect features a large center presentation box with 12 smaller thumbnails surround it. When a user hovers over  a thumbnail, the thumbnail animates and presents itself in the presentation box. It looks as follows: 

(gif of demoing effect2)

An interesting challenge was determining the area which would trigger/cancel the animation. I decided it would be most appropriate to create an invisible box which would never change dimensions and only serve as a reference for mouseenter and mouseleave JavaScript events. With the help of CSS Grid, I was able to align the visible DOM elements and the the invisible box by setting them to the same grid-template-area. Here is a code snippet of the entire grid which made placing photos/boxes in the right places a breeze:

(code snippet of entire grid)

Effect 3 - Perspective Side Bar
The third effect is a side bar that shifts the perspective of the entire page. This is how it looks: 

(gif of perspective side bar)

The real trick to this effect was adjusting the perspective-origin and perspective properties on the body to create a 3D illusion. A code snippet demonstrating this is show below: 

(code snippet of perspective origin and perspective)

Effect 4 - 
MVP	
  - showcase CSS skills through 3 unique examples: 
    - A dropdown menu that showcases animations and transitions
    - A hover effect that showcases SCSS tricks and syntax.
    - A scroll effect that unfolds an animation when the user scrolls down.
  

  
Technologies 
  - vanilla javascript, SCSS, html

Filestructure
  - src
    - javascript
      - dropdown.js
      - hover.js
      - scroll.js
    - styles
      - _layout.scss
      - dropdown.scss
      - hover.scss  
      - scroll.scss
      - main.scss
  - index.html
  - package.json
  - webpack.common.js
  - webpack.dev.js
  - webpack.prod.js
 
Implementation Timeline
  - Implement Dropdown Menu	
  - Implement Hover Effect
  - Implement Scroll Effect
  - Style rest of webpage, deploy webpage.
