// JavaScript file, links to index.html


//Actions for when the user scrolls
window.onscroll = function() {scrollFunction()};
window.addEventListener("hashchange", offsetAnchor);
function offsetAnchor() {
    if(location.hash.length !== 0) {
        window.scrollTo(window.scrollX, window.scrollY - 90);
    }
}

//Actions for when the page is a phone
window.onload = function() {loadFunction()};
function loadFunction() {
    if (screen.width <= 830) {
        document.getElementById("phonemenu").style.display = "inline-block";
        var l = document.getElementsByTagName("p");
        for (var i = 0; i < l.length; i++) {
            l[i].style.fontSize = "12px";
        }
        var w = document.getElementsByTagName("h3");
        for (var i = 0; i < w.length; i++){
            w[i].style.fontSize = "12px";
        }
        //document.getElementById("headerNav").style.display = "none";
        //document.getElementById("navPics").style.display = "none";
        document.getElementById("logo").style.margin = "0 auto";
        document.getElementById("logo").style.maxWidth = "20%";
        document.getElementById("donateButton").style.width = "200px";
        document.getElementById("subbutton").style.width = "50%";
        document.getElementById("phonemenu").innerHTML = "☰";
        document.getElementById("phonemenu").style.margin = "5px 3vw 0 0";
        document.getElementById("buttonWrapper").style.marginTop = "0";
        document.getElementById("buttonP").style.display = "none";
        var x = document.getElementsByClassName("smallPics");
        var y = document.getElementsByClassName("name");
        var z = document.getElementsByClassName("instrumentName");
        var a = document.getElementsByClassName("boys");
        for (var i = 0; i < x.length; i++) {
            x[i].style.width = "26%";
            y[i].style.fontSize = "12px";
            z[i].style.fontSize = "10px";
        }
        for (var i = 0; i < a.length; i++) {
            a[i].style.width = "30px";
        }
    }
}

//Actions for minimizing the top nav bar
function scrollFunction() {
    var x = document.getElementsByClassName("navLinks");
    if ((document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) && (screen.width > 830)) {
        document.getElementById("logo").style.maxWidth = "15%";
        document.getElementById("logo").style.margin = "0.5% 0 0.5% 2%";
        //document.getElementById("navPics").style.display = "none";
        //document.getElementById("headUL").style.float = "right";
        //document.getElementById("headUL").style.margin = "0 -5% 2% 0";
        //document.getElementById("headerNav").style.marginTop = "2.2%";
        document.getElementById("phonemenu").innerHTML = "☰";
        document.getElementById("phonemenu").style.margin = "5px 3vw 0 0";
        document.getElementById("buttonWrapper").style.marginTop = "0";
        document.getElementById("buttonP").style.display = "none";
        for (var i = 0; i < x.length; i++) {
            x[i].style.fontSize = "1.2vw";
        }
    } else if (screen.width > 830) {
        document.getElementById("logo").style.maxWidth = "40%";
        document.getElementById("logo").style.margin = "3% 0 1% 30%";
        //document.getElementById("navPics").style.display = "inherit";
        //document.getElementById("headUL").style.float = "none";
        //document.getElementById("headUL").style.margin = "0 auto 2% auto";
        //document.getElementById("headerNav").style.marginTop = "21%";
        document.getElementById("phonemenu").innerHTML = "Page Selector: ☰";
        document.getElementById("phonemenu").style.margin = "3% 37% 1% 0";
        document.getElementById("buttonWrapper").style.marginTop = "20px";
        document.getElementById("buttonP").style.display = "inline-block";
        for (var i = 0; i < x.length; i++) {
            x[i].style.fontSize = "1.5vw";
        }
    }
}

//Actions for the mini nav bar for phones
function openNav() {
    document.getElementById("mySidebar").style.width = "250px";
    //document.getElementById("header").style.marginLeft = "250px";
}
function closeNav() {
    document.getElementById("mySidebar").style.width = "0";
    //document.getElementById("header").style.marginLeft = "0";
}

//Actions to randomize song samples
//Olmos CD
var olmosElement = document.getElementById("olmosAudio");
var olmosSources = [
    "audio/sound1.mp3",
    "audio/sound2.mp3",
    "audio/sound3.mp3",
    "audio/sound4.mp3",
    "audio/sound5.mp3"
];
var activeElement = Math.floor((Math.random() * olmosSources.length));
olmosElement.src = olmosSources[activeElement];
olmosElement.addEventListener('ended', function(e) {
    activeElement = (++activeElement) % olmosSources.length;
    if (activeElement === olmosSources.length) {
        activeElement = 0;
    }
    olmosElement.src = olmosSources[activeElement];
});
//Made in France CD
var franceElement = document.getElementById("franceAudio");
var franceSources = [
    "audio/sound6.mp3",
    "audio/sound7.mp3",
    "audio/sound8.mp3"
];
var activeFrance = Math.floor((Math.random() * franceSources.length));
franceElement.src = franceSources[activeFrance];
franceElement.addEventListener('ended', function(e) {
    activeFrance = (++activeFrance) % franceSources.length;
    if (activeFrance === franceSources.length) {
        activeFrance = 0;
    }
    franceElement.src = franceSources[activeFrance];
});

//Covid button actions
function openCOVID() {
    var b = document.getElementById("covidbutton");
    if (b.innerHTML === "Show More") {
        document.getElementById("coviddetails").style.display = "inherit";
        document.getElementById("covidbutton").innerHTML = "Show Less";
    } else {
        document.getElementById("coviddetails").style.display = "none";
        document.getElementById("covidbutton").innerHTML = "Show More";
    }
}
    
//Function for setting the colors of the images on hover
function hover(element, replacement) {
    element.setAttribute('src', replacement);
}

//All the modal stuff
var modal = document.getElementById("myModal");
var btn = document.getElementById("myBtn");
var span = document.getElementsByClassName("close")[0];
btn.onclick = function() {
    modal.style.display = "block";
}
span.onclick = function() {
    modal.style.display = "none";
}
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}