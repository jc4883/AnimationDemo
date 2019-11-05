export const effect4 = () => {
  let cardCount = 0;
  let jumbotronCount = 0;
  let rowElementCount = 0;
  let dogoCount = 0;
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
    let currCount = cardCount;
    cardCount++;
    $("#effect-4").append(
      `<div id='card-${currCount}' class='draggable-card card mb-4'>` + 
        `<div id='card-${currCount}header' class="card-drag-icon"></div>` + 
        `<div class="card-close-icon" id='card-close-icon-${currCount}'></div>` +
        "<img class='card-img-top' src='https://github.com/jc4883/AnimationDemo/blob/master/src/assets/leaf.jpg?raw=true'>" +
        "<div class='card-body text-center'>" + 
          `<h5 class='card-title'>card-${currCount}</h5>` + 
          "<a target='_blank' href='https://github.com/jc4883/AnimationDemo/blob/master/index.html' class='btn btn-primary'>See Code Now</a>" +
        "</div>" +
      "</div>"
    ); 
    $(`#card-close-icon-${currCount}`).click(function() {
      $(`#card-${currCount}`).remove();
    }); 
    dragElement(document.getElementById(`card-${currCount}`));
  })

  $('.jumbotron-create').click(() => {
    let currCount = jumbotronCount;
    jumbotronCount++;
    $('#effect-4').append(
      `<div id='jumbotron-${currCount}' class="draggable-jumbotron jumbotron">` + 
        `<div id='jumbotron-${currCount}header' class="card-drag-icon"></div>` + 
        `<div id='jumbotron-close-icon-${currCount}' class="card-close-icon"></div>` +
        `<h1 class="display-4>Jumbotron ${currCount}</h1>` +
        '<p class="lead">This is a  leading paragraph</p>' +
        '<p class="lead">' +
          '<a target="_blank" href="https://github.com/jc4883/AnimationDemo/blob/master/index.html" class="btn btn-danger btn-lg">See Code Now</a>' + 
        '</p>' +
      `</div>`
    );
    $(`#jumbotron-close-icon-${currCount}`).click(function() {
      $(`#jumbotron-${currCount}`).remove();
    }); 
    dragElement(document.getElementById(`jumbotron-${currCount}`));
  });

  $('.rowElement-create').click(() => {
    let currCount = rowElementCount;
    rowElementCount++;
    $('#effect-4').append(
      `<div id='rowElement-${currCount}' class="draggable-rowElement">` +
        `<div id='rowElement-${currCount}header' class="rowElement-drag-icon"></div>` + 
        `<div id='rowElement-close-icon-${currCount}' class="rowElement-close-icon"></div>` +
        `<div id="here1" class="col-sm-12 col-md-8">` +
            `<h3>An all-new design</h3>` +
            `<p class="lead">The digital age is here. No longer will finding information be so slow.</p>` +
            `<p>It's been years in the making. The Bootstrap Demo Search Engine is finally here. We want to see how you will use its unmatched simplicity, speed, and elegance. Now that its arrived,<strong> how will you change the world?</strong></p>` +
        `</div>` +
        `<div id="here2" class="col-sm-12 col-md-4">` +
            `<h3>Common Searches</h3>` +
            `<ul class="nav flex-column">` + 
                `<li class="nav-items"> ` +
                    `<a target="_blank" href="https://developer.mozilla.org/en-US/docs/Learn/CSS/CSS_layout/Flexbox" class="nav-link">Flexbox</a>` +
                `</li>` +
                `<li class="nav-items">` +
                    `<a target="_blank" href="https://developer.mozilla.org/en-US/docs/Web/CSS/grid" class="nav-link">Grid</a>` +
                `</li>` +
                `<li>` +
                    `<a target="_blank" href="https://getbootstrap.com/" class="nav-link">Bootstrap</a>` +
                `</li>` +
                `<li>` +
                    `<a target="_blank" href="https://getbootstrap.com/docs/4.3/getting-started/introduction/" class="nav-link">Responsive Web Design</a>` +
                `</li>` +
            `</ul>` +
        `</div>`+
      `</div>`
    );
    $(`#rowElement-close-icon-${currCount}`).click(function() {
      $(`#rowElement-${currCount}`).remove();
    }); 
    dragElement(document.getElementById(`rowElement-${currCount}`));
  });

  $('.dogo-create').click(() => {
  let currCount = dogoCount;
  dogoCount++;
  $('#effect-4').append(
    `<div id='dogo-${currCount}' class="draggable-jumbotron jumbotron">` + 
      `<div id='dogo-${currCount}header' class="card-drag-icon"></div>` + 
      `<div id='dogo-close-icon-${currCount}' class="card-close-icon"></div>` +
      `<div class="dogo-background"></div>` + 
    `</div>`
  );
  $(`#dogo-close-icon-${currCount}`).click(function() {
    $(`#dogo-${currCount}`).remove();
  }); 
  dragElement(document.getElementById(`dogo-${currCount}`));
});
  

}
/* 

                <div class="row mt-sm-4 mt-md-5">
                    <div id="here1" class="col-sm-12 col-md-8">
                        <h3>An all-new design</h3>
                        <p class="lead">The digital age is here. No longer will finding information be so slow.</p>
                        <p>It's been years in the making. The Bootstrap Demo Search Engine is finally here. We want to see how you will use its unmatched simplicity, speed, and elegance. Now that its arrived,<strong> how will you change the world?</strong></p>
                    </div>
                    <div id="here2" class="col-sm-12 col-md-4">
                        <h3>Common Searches</h3>
                        <ul class="nav flex-column"> 
                            <li class="nav-items"> 
                                <a target="_blank" href="https://developer.mozilla.org/en-US/docs/Learn/CSS/CSS_layout/Flexbox" class="nav-link">Flexbox</a>
                            </li>
                            <li class="nav-items">
                                <a target="_blank" href="https://developer.mozilla.org/en-US/docs/Web/CSS/grid" class="nav-link">Grid</a>
                            </li>
                            <li>
                                <a target="_blank" href="https://getbootstrap.com/" class="nav-link">Bootstrap</a>
                            </li>
                            <li>
                                <a target="_blank" href="https://getbootstrap.com/docs/4.3/getting-started/introduction/" class="nav-link">Responsive Web Design</a>
                            </li>
                        </ul>
                    </div>
                </div>

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
