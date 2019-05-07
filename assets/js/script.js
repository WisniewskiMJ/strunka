var menuEls = document.getElementsByClassName('menu-item');

var onMenuClick = function() {
    var menuHide = document.getElementById('toggle');
    menuHide.checked = false;
};

for (i = 0; i < menuEls.length; i++) {
    menuEls[i].addEventListener('click', onMenuClick);
}


// tuuuuuuuu


var gallImgs = document.getElementsByClassName('none');
var fullImg = document.getElementById('imidz');


var showFull = function(e) {
    e.preventDefault();
    // console.log(e);
    fullImg.style.display = 'block';
    fullImg.innerHTML = '<div class="turnoff"><img id="img-inner" src="' + e.target.parentElement.href + '"></div>';
    var imgImg = document.getElementById('img-inner');
    console.log(fullImg.children[0].clientWidth);
    console.log(imgImg.clientWidth);
}

for (i = 0; i < gallImgs.length; i++) {
    gallImgs[i].addEventListener('click', showFull);
}
console.log(fullImg);
// console.log(gallImgs[0]);
