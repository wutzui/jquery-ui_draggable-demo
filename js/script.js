//This is draggable Demo.
//http://api.jqueryui.com/draggable/

//addClasses
$(document).ready(function(){
  $( ".addClasses" ).draggable({
    addClasses: true,
    iframefix: true,
    helper:"clone"
  });
});

//appendTo
$(document).ready(function(){
  $( ".appendTo" ).draggable({
    helper:"clone",
    appendTo: "body"
  });
});

//axis
$(document).ready(function(){
  $( ".axis-x" ).draggable({
    axis: "x"
  });
});

$(document).ready(function(){
  $( ".axis-y" ).draggable({
    axis: "y"
  });
});

//cancel
$(document).ready(function(){
  $( ".cancel" ).draggable({
    cancel: ".cancel-drag"
  });
});

//***connectToSortable
$(document).ready(function(){
  $( "#connectToSortable .items" ).sortable({
    connectWith: "ul"
  });
});

$(document).ready(function(){
  $( "li" ).draggable({
    helper: "clone",
    connectToSortable: ".items"
  });
});

//containment: move in the commanded place.
$(document).ready(function(){
  $( ".containment p" ).draggable({
    containment: "parent",
  });
});

//cursor
$(document).ready(function(){
  $( ".cursor" ).draggable({
    cursor: "crosshair"
  });
});

//cursorAt: set the position of the cursor on the item.
$(document).ready(function(){
  $( ".cursorAt" ).draggable({
    cursorAt: { left: 10}  // left, right, top, buttom
  });
});

//delay: time after mouse pressed.
$(document).ready(function(){
  $( ".delay" ).draggable({
    delay: 1000
  });
});

//disabled
$(document).ready(function(){
  $( ".disabled" ).draggable({
    disabled: true  // false
  });
});

//distance: item will move until the set distance
$(document).ready(function(){
  $( ".distance" ).draggable({
    distance: 500
  });
});

//grid
$(document).ready(function(){
  $( ".grid" ).draggable({
    grid: [ 20, 20 ]
  });
});

$( ".grid-contain .grid" ).draggable({
    containment: "parent"
  });

//handle: opposite with "cancel"
$(document).ready(function(){
  $( ".handle" ).draggable({
    handle: ".handle-drag"
  });
});

//opacity
$(document).ready(function(){
  $( ".opacity" ).draggable({
    opacity: 0.5
  });
});

//revert+reverDuration
$(document).ready(function(){
  $( ".revert" ).draggable({
    revert: true,
    revertDuration: 1000 // 數字越小越快
  });
});

//scroll
$(document).ready(function(){
  $( ".scroll" ).draggable({
    scroll: true,
    scrollSensitivity: 20,  // 不知道差別在哪....
    scrollSpeed: 1000 // 數字越大越快
    //revert: true
  });
});

//snap
$(document).ready(function(){
  $( ".snap" ).draggable({
    snap: true,
    snapMode: "both", // "inner", "outer"
    snapTolerance: 100 //确定拖拽的元素移动至其它元素多少像素的距离时，发生吸附的动作。
  });
});

//stack
$(document).ready(function(){
  $( ".drag" ).draggable({
    stack: ".drag"
  });
});










