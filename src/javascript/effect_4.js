export const effect4 = () => {
  let mydivCount = 0;
  $(".menu-toggle").click((e) => {
    e.preventDefault();
    $("#sidebar-wrapper").toggleClass("active");
    $(".menu-toggle > .fa-bars, .menu-toggle > .fa-times").toggleClass("fa-bars fa-times");
    $(this).toggleClass("active");
  });

  $('#sidebar-wrapper .js-scroll-trigger').click(() => {
    $("#sidebar-wrapper").removeClass("active");
    $(".menu-toggle").removeClass("active");
    $(".menu-toggle > .fa-bars, .menu-toggle > .fa-times").toggleClass("fa-bars fa-times");
  });

  $('.card-create').click(() => {
    $("#effect-4").append(
      `<div id='card-${mydivCount}' class='draggable-card card mb-4'>` + 
        "<div id='card-drag-icon'></div>" + 
        "<div id='card-close-icon'></div>"
        "<img class='card-img-top' src='https://github.com/jc4883/AnimationDemo/blob/master/src/assets/leaf.jpg?raw=true'>" +
        "<div class='card-body text-center'>" + 
          `<h5 class='card-title'>card-${mydivCount}</h5>` + 
          "<a target='_blank' href='https://github.com/jc4883/AnimationDemo/blob/master/index.html' class='btn btn-primary'>See Code Now</a>" +
        "</div>" +
      "</div>"
    ); 
    dragElement(document.getElementById(`card-${mydivCount}`));
    mydivCount++;
  })
}

/*
   `<div class="draggable-card" id='mydiv-${mydivCount}'>` + 
    "<div id='card-drag-icon'>Click here to move</div>" + 
      "<p>Move</p>" + 
      "<p>this</p>" + 
      "<p>DIV</p>" + 
    "</div>"
*/



function dragElement(elmnt) {
      var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
      if (document.getElementById(elmnt.id + "header")) {
        // if present, the header is where you move the DIV from:
        document.getElementById(elmnt.id + "header").onmousedown = dragMouseDown;
      } else {
        // otherwise, move the DIV from anywhere inside the DIV:
        elmnt.onmousedown = dragMouseDown;
      }

      function dragMouseDown(e) {
        e = e || window.event;
        e.preventDefault();
        // get the mouse cursor position at startup:
        pos3 = e.clientX;
        pos4 = e.clientY;
        document.onmouseup = closeDragElement;
        // call a function whenever the cursor moves:
        document.onmousemove = elementDrag;
      }

      function elementDrag(e) {
        e = e || window.event;
        e.preventDefault();
        // calculate the new cursor position:
        pos1 = pos3 - e.clientX;
        pos2 = pos4 - e.clientY;
        pos3 = e.clientX;
        pos4 = e.clientY;
        // set the element's new position:
        elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
        elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
      }

      function closeDragElement() {
        // stop moving when mouse button is released:
        document.onmouseup = null;
        document.onmousemove = null;
      }
    }
