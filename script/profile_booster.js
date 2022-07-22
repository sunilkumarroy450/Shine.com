function toggleText() {


    var points =
        document.getElementById("points");

    var showMoreText =
        document.getElementById("moreText");

    var buttonText =
        document.getElementById("textButton");


    if (points.style.display === "none") {

        showMoreText.style.display = "none";


        points.style.display = "inline";


        buttonText.innerHTML = "Read More";
    }

    else {

        showMoreText.style.display = "inline";


        points.style.display = "none";


        buttonText.innerHTML = "Read Less";
    }
}


const links = document.querySelectorAll("#fifth ul a");

for (const link of links) {
    link.addEventListener("click", clickHandler);
}

function clickHandler(e) {
    e.preventDefault();
    const href = this.getAttribute("href");
    const offsetTop = document.querySelector(href).offsetTop;

    scroll({
        top: offsetTop,
        behavior: "smooth"
    });
}

window.onscroll = function () { myFunction() };

// Get the navbar
var navbar = document.getElementById("fifth");

// Get the offset position of the navbar
var sticky = navbar.offsetTop;

// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
    if (window.pageYOffset >= sticky) {
        navbar.classList.add("sticky")
    } else {
        navbar.classList.remove("sticky");
    }
}



function myFunction1() {
    document.getElementById("myDropdown1").classList.toggle("show1");
}


window.onclick = function (event) {
    if (!event.target.matches('.dropbtn1')) {

        var dropdowns = document.getElementsByClassName("dropdown-content1");
        var i;
        for (i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show1')) {

                openDropdown.classList.remove('show1');

            }
        }

    }
    document.getElementById("arrow1").innerText = "<"


}

function myFunction2() {
    document.getElementById("myDropdown2").classList.toggle("show1");
}

// Close the dropdown if the user clicks outside of it
window.onclick = function (event) {
    if (!event.target.matches('.dropbtn2')) {

        var dropdowns = document.getElementsByClassName("dropdown-content2");
        var i;
        for (i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show1')) {

                openDropdown.classList.remove('show1');

            }
        }

    }
    document.getElementById("arrow2").innerText = "<"


}


function myFunction3() {
    document.getElementById("myDropdown3").classList.toggle("show1");
}

// Close the dropdown if the user clicks outside of it
window.onclick = function (event) {
    if (!event.target.matches('.dropbtn3')) {

        var dropdowns = document.getElementsByClassName("dropdown-content3");
        var i;
        for (i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show1')) {

                openDropdown.classList.remove('show1');

            }
        }

    }
    document.getElementById("arrow3").innerText = "<"


}

function myFunction4() {
    document.getElementById("myDropdown4").classList.toggle("show1");
}

// Close the dropdown if the user clicks outside of it
window.onclick = function (event) {
    if (!event.target.matches('.dropbtn4')) {

        var dropdowns = document.getElementsByClassName("dropdown-content4");
        var i;
        for (i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show1')) {

                openDropdown.classList.remove('show1');

            }
        }

    }
    document.getElementById("arrow4").innerText = "<"


}

function myFunction5() {
    document.getElementById("myDropdown5").classList.toggle("show1");
}

// Close the dropdown if the user clicks outside of it
window.onclick = function (event) {
    if (!event.target.matches('.dropbtn5')) {

        var dropdowns = document.getElementsByClassName("dropdown-content5");
        var i;
        for (i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show1')) {

                openDropdown.classList.remove('show1');

            }
        }

    }



}



function openForm() {
    document.getElementById("myForm").style.display = "block";
}

function closeForm() {
    document.getElementById("myForm").style.display = "none";
}


let buy_btn=document.getElementById("buy_btn");
buy_btn.addEventListener("click",myfun)
let buy_arr=JSON.parse(localStorage.getItem("buy_cart"))||[];
function myfun(event){
    event.preventDefault()
    let obj={
    img:"https://static1.shine.com/l/m/product_image/images_all/1642135143_358.png",
    title: "Profile Booster",
    price: 1999,

    }
    buy_arr.push(obj);
    localStorage.setItem("buycart",JSON.stringify(buy_arr))

}
