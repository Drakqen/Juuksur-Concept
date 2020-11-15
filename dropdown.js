function dropdown() {
    document.getElementById("dropdown").classList.toggle("show");
  }
  
function function1() {
  var element = document.getElementById("button");
        element.classList.toggle("scaled");
}

  window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
        var dropdowns = document.getElementsByClassName("dropdown-content");
        var i;
        for (i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
            openDropdown.classList.remove('show');
      }
    }
  }
}



function dropdown1() {
  document.getElementById("dropdown1").classList.toggle("show");
}

function function2() {
  var element = document.getElementById("button1");
        element.classList.toggle("scaled");
}

window.onclick = function(event) {
  if (!event.target.matches('.dropbtn1')) {
      var dropdowns = document.getElementsByClassName("dropdown-content1");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
          var openDropdown = dropdowns[i];
          if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
      }
   
  }
}
}
function dropdown2() {
  document.getElementById("dropdown2").classList.toggle("show");
}

function function3() {
  var element = document.getElementById("button2");
        element.classList.toggle("scaled");
}

window.onclick = function(event) {
  if (!event.target.matches('.dropbtn2')) {
      var dropdowns = document.getElementsByClassName("dropdown-content2");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
          var openDropdown = dropdowns[i];
          if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
      }
   
  }
}
}

