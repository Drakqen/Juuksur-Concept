function dropdown() {
    document.getElementById("dropdown").classList.toggle("show");
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

function dropdown() {
      document.getElementById("left").classList.toggle("left");
    }
    
    window.onclick = function(event) {
        if (!event.target.matches('.left')) {
        var left = document.getElementById("left")
        var i;
        for (i = 0; i < left.length; i++) {
            var left = left[i];
            if (left.classList.contains('left')) {
            left.classList.remove('left');
}
}
        }}