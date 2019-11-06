
# CSS Demo
Background

CSS is a showcase of interesting effects using CSS, SCSS, Bootstrap, JavaScript, and jQuery. Exploring cutting edge CSS technologies, especially CSS Grid, CSS Flexbox, and keyframes, solidified my understanding of how to embed sturdy, practical page layouts and animations into my web applications.


Features

CSS Demo has four effects. 

Effect 1 - Dropdown Menus
The first is a collection of dropdown menus that exhibits unique dropping animations. They look as follows: 

![](effect1.gif)

All four dropdowns make each subsequent element animate smoothly one after another. I achieved this by giving each element in the dropdown a unique delay, using an SCSS @for rule, depending on its nth-child() value. Here is a code snippet showing an "li" in the first dropdown menu.

(code snippet of li)

Effect 2 - Grid Gallery
The second effect features a large center presentation box with 12 smaller thumbnails surround it. When a user hovers over  a thumbnail, the thumbnail animates and presents itself in the presentation box. It looks as follows: 

![](effect2.gif)

An interesting challenge was determining the area which would trigger/cancel the animation. I decided it would be most appropriate to create an invisible box which would never change dimensions and only serve as a reference for mouseenter and mouseleave JavaScript events. With the help of CSS Grid, I was able to align the visible DOM elements and the the invisible box by setting them to the same grid-template-area. Here is a code snippet of the entire grid which made placing photos/boxes in the right places a breeze:

(code snippet of entire grid)

Effect 3 - Perspective Side Bar
The third effect is a side bar that shifts the perspective of the entire page. This is how it looks: 

![](effect3.gif)

The real trick to this effect was adjusting the perspective-origin and perspective properties on the body to create a 3D illusion. A code snippet demonstrating this is show below: 

(code snippet of perspective origin and perspective)

Effect 4 - Interactive Website Builder

This effect features a sidebar that has four pre-built DOM elements that are appended to the page when clicked. Here is a gif of it in action:

![](effect4.gif)

The most challenging part of designing this effect was assigning the dragging and closing to the correct elements. These concerns were solved by interpolating a counter value to create an element with a unique id every time. The implementation is shown below:

(code snippet of effect 4)


Thanks's for checking out CSS Demo! To see more of my work, check out my portolio: https://jc4883.github.io/ or feel free to dig through my Github repositories. You can also find me on LinkedIn: https://www.linkedin.com/in/peterchoi24/
