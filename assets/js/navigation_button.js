
//Exelent little functions to use any time when class modification is needed
function hasClass(ele, cls) {
    return !!ele.className.match(new RegExp('(\\s|^)' + cls + '(\\s|$)'));
}

function addClass(ele, cls) {
    if (!hasClass(ele, cls)) ele.className += " " + cls;
}

function removeClass(ele, cls) {
    if (hasClass(ele, cls)) {
        var reg = new RegExp('(\\s|^)' + cls + '(\\s|$)');
        ele.className = ele.className.replace(reg, ' ');
    }
}

//Add event from js to keep the markup clean
function init() {
    document.getElementById("header_navigation_mobile_button").addEventListener("click", toggleMenu);
}

//The actual fuction
function toggleMenu() {
    var ele = document.getElementsByClassName('page_container')[0];
    if (!hasClass(ele, "open")) {
        addClass(ele, "open");
    } else {
        removeClass(ele, "open");
    }

    var ele2 = document.getElementsByClassName('header_navigation_mobile_container')[0];
    if (!hasClass(ele2, "right_open")) {
        addClass(ele2, "right_open");
    } else {
        removeClass(ele2, "right_open");
    }

    var ele3 = document.getElementsByClassName("header_navigation_mobile_button")[0];
    if (!hasClass(ele3, "right_push")) {
        addClass(ele3, "right_push");
    } else {
        removeClass(ele3, "right_push");
    }
    
}

//Prevent the function to run before the document is loaded
document.addEventListener('readystatechange', function() {
    if (document.readyState === "complete") {
        init();
    }
});
