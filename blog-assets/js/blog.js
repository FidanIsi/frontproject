var image = document.getElementsByClassName('paralax');
new simpleParallax(image, {
	orientation: 'down',
});

document.addEventListener('DOMContentLoaded', function () {
  var menuIcon = document.getElementById('menuIcon');
  var menuCart = document.querySelector('.menuCart');
  var overlay = document.getElementById('overlay');

  menuCart.style.display = 'none';
  overlay.style.display = 'none';

  menuIcon.addEventListener('click', function () {
    menuCart.style.display = menuCart.style.display === 'none' ? 'block' : 'none';
    overlay.style.display = overlay.style.display === 'none' ? 'block' : 'none';
  });

  var closeIcon = document.querySelector('.sidebar-header i');
  closeIcon.addEventListener('click', function () {
    menuCart.style.display = 'none';
    overlay.style.display = 'none';
  });
});

document.addEventListener("DOMContentLoaded", function () {
  var dropdownLink = document.getElementById("dropdownLink");
  var dropdownList = document.getElementById("dropdownList");
  var dropdownIcon = document.querySelector("#dropdownLink i");

  dropdownLink.addEventListener("click", function () {
      if (dropdownList.style.display === "none" || dropdownList.style.display === "") {
          dropdownList.style.display = "block";
          dropdownList.style.opacity = "1";
          dropdownList.style.visibility = "visible";
          dropdownIcon.style.transform = "rotate(-180deg)";
      } else {
          dropdownList.style.display = "none";
          dropdownList.style.opacity = "0";
          dropdownList.style.visibility = "hidden";
          dropdownIcon.style.transform = "rotate(0deg)";
      }
  });
});