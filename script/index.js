import {nav,footer} from "../component/navandfootexport.js"

document.querySelector("#navbar").innerHTML=nav();
document.querySelector("#footer").innerHTML=footer();




let counter = 1;
let id;
const settime = (counter) => {
    id = setInterval(function () {
        document.getElementById('radio' + counter).checked = true;
        counter++
        if (counter > 4) {
            counter = 1;
        }
    }, 3000)
}

settime(counter);

document.querySelectorAll(".rdbtn").forEach((ele, i) => {
    ele.addEventListener("click", () => {
        clearInterval(id);
        settime(i + 2);
    });
});
document.querySelector("#cool1").addEventListener("click", () => {
    document.querySelector("#cool1").setAttribute("class", "cool")
    document.querySelector("#comp1").removeAttribute("class", "cool");
    document.querySelector("#coolplace").style.display = "grid";
    document.querySelector("#topcomp").style.display = "none"
})
document.querySelector("#comp1").addEventListener("click", () => {
    document.querySelector("#comp1").setAttribute("class", "cool")
    document.querySelector("#cool1").removeAttribute("class", "cool");
    document.querySelector("#coolplace").style.display = "none";
    document.querySelector("#topcomp").style.display = "flex"
})

document.querySelector("#rights").addEventListener("click", () => {
    document.querySelector("#scrool>div").style.marginLeft = "-190px";

})

document.querySelector("#lefts").addEventListener("click", () => {
    console.log("working")
    document.querySelector("#scrool>div").style.marginLeft = "0px";

})




let be = 0;
document.querySelector("#applicantrights").addEventListener("click", () => {
    if (be >= (-1000)) {
        be = be + (-370)
    }
    document.querySelector("#earlyscrool1>div").style.marginLeft = `${be}px`;
})

document.querySelector("#applicantlefts").addEventListener("click", () => {
    if (be <= (-370)) {
        be = be + 370
    }
    document.querySelector("#earlyscrool1>div").style.marginLeft = `${be}px`;
})




let be2 = 0;
document.querySelector("#applicantrights2").addEventListener("click", () => {
    if (be2 >= (-1000)) {
        be2 = be2 + (-370)
    }
    document.querySelector("#earlyscrool2>div").style.marginLeft = `${be2}px`;
})

document.querySelector("#applicantlefts2").addEventListener("click", () => {
    if (be2 <= (-370)) {
        be2 = be2 + 370
    }
    document.querySelector("#earlyscrool2>div").style.marginLeft = `${be2}px`;
})




let be3=0;
document.querySelector("#applicantrights3").addEventListener("click", () => {
    if (be3 >= (-1000)) {
        be3 = be3 + (-370)
    }
    document.querySelector("#earlyscrool3>div").style.marginLeft = `${be3}px`;
});

document.querySelector("#applicantlefts3").addEventListener("click", () => {
    if (be3 <= (-370)) {
        be3 = be3 + 370
    }
    document.querySelector("#earlyscrool3>div").style.marginLeft = `${be3}px`;
});

let prodappend=(data)=>{

data.forEach((ele)=>{

// main div start 
let main=document.createElement("div");
main.setAttribute("class","temp");

// course p start

let course=document.createElement("p")
course.innerText=ele.course

// course p end

// prod detail div start 

let imgdetail=document.createElement("div");

// img and rating div start 

let imgdiv=document.createElement("div");
let img=document.createElement("img");
img.src=ele.img;
let rating=document.createElement("h4");
rating.innerText=4.5;

imgdiv.append(img,rating);

// img and rating div end 


// detail div start
let detaildiv=document.createElement("div")

let title=document.createElement("h2");
title.innerText=ele.title;

let test=document.createElement("p");
test.innerText=ele.test;

let duration=document.createElement("p");
duration.innerText=`Duration: ${ele.time} Hour | Module:Online`;

let price=document.createElement("h3");
price.innerHTML=`<span class="material-symbols-outlined">currency_rupee</span>`
price.innerText=ele.price;

detaildiv.append(title,test,duration,price);
// detaildiv append done 
imgdetail.append(imgdiv,detaildiv);

// imgdetail div append done 

let hr=document.createElement("hr");

// button div start 

let buttondiv=document.createElement("div");
let button1=document.createElement("button");
button1.innerText="Explore";

let button2=document.createElement("button");
button2.innerText="Buy Now";

button2.addEventListener("click",()=>{
    buy(ele)
})

buttondiv.append(button1,button2);

main.append(course,imgdetail,hr,buttondiv)
   
   document.querySelector("#earlyscrool6>div").append(main);
});
    
}

let data=[
    {course:"course",img:"https://static1.shine.com/l/m/product_image/images_all/1640851375_8085.png",title:"Backend Devloper In Java",test:"TestPrep Training ",time:51,price:12999},
    {course:"course",img:"https://learning.shine.com/_next/image?url=https%3A%2F%2Fstatic1.shine.com%2Fl%2Fm%2Fproduct_image%2Fimages_all%2F1640851637_4621.png&w=64&q=75",title:"Backend Devloper In Python",test:"TestPrep Training ",time:20,price:12999},
    {course:"course",img:"https://learning.shine.com/_next/image?url=https%3A%2F%2Fstatic1.shine.com%2Fl%2Fm%2Fproduct_image%2Fimages_all%2F1652953799_9984.png&w=64&q=75",title:"Backend Devloper In Node.js",test:"TestPrep Training ",time:41,price:12999},
    {course:"course",img:"https://learning.shine.com/_next/image?url=https%3A%2F%2Fstatic1.shine.com%2Fl%2Fm%2Fproduct_image%2Fimages_all%2F1652953980_7255.png&w=64&q=75",title:"Backend Devloper In .Net",test:"TestPrep Training ",time:21,price:12999},
    {course:"course",img:"https://learning.shine.com/_next/image?url=https%3A%2F%2Fstatic1.shine.com%2Fl%2Fm%2Fproduct_image%2Fimages_all%2F1652954044_279.png&w=64&q=75",title:"Frontend Devloper In React.js",test:"TestPrep Training ",time:38,price:12999},
    {course:"course",img:"https://learning.shine.com/_next/image?url=https%3A%2F%2Fstatic1.shine.com%2Fl%2Fm%2Fproduct_image%2Fimages_all%2F1640853726_1126.png&w=64&q=75",title:"Frontend Devloper In Angular.js",test:"TestPrep Training ",time:31,price:12999},
    {course:"course",img:"https://learning.shine.com/_next/image?url=https%3A%2F%2Fstatic1.shine.com%2Fl%2Fm%2Fproduct_image%2Fimages_all%2F1652954087_2845.png&w=64&q=75",title:"Android Developer",test:"TestPrep Training ",time:43,price:12999},
    {course:"course",img:"https://learning.shine.com/_next/image?url=https%3A%2F%2Fstatic1.shine.com%2Fl%2Fm%2Fattachment%2Fdefault_product_image.jpg&w=64&q=75",title:"CompTIA Security+ Certification Training - SY0-601",test:"Edureka",time:400,price:34999},
    {course:"course",img:"https://learning.shine.com/_next/image?url=https%3A%2F%2Fstatic1.shine.com%2Fl%2Fm%2Fproduct_image%2Fimages_all%2F1542800087_8980.png&w=64&q=75",title:"Digital Marketing Certification Training",test:"Edureka",time:30,price:19995},




];



let be4=0;
let count=0
document.querySelector("#applicantrights6").addEventListener("click", () => {
    if (count<data.length-3) {
        count++;
        be4 = be4 + (-415)
    }
    document.querySelector("#earlyscrool6>div").style.marginLeft = `${be4}px`;
});

document.querySelector("#applicantlefts6").addEventListener("click", () => {
    if (count>0) {
        count--
        be4 = be4 + 415
    }
    document.querySelector("#earlyscrool6>div").style.marginLeft = `${be4}px`;
});

prodappend(data);

let cartdataLs=JSON.parse(localStorage.getItem("buycart")) || [];

let buy=(ele)=>{
cartdataLs.push(ele)
localStorage.setItem("buycart",JSON.stringify(cartdataLs));
window.location="add.html"
}

document.querySelector("#cartsection5").innerText=cartdataLs.length;
let flag=localStorage.getItem("login");
let loged=JSON.parse(localStorage.getItem("login_data"))
if(flag=="true"){
    document.querySelector("#profilelogo").style.display="none"
    document.querySelector("#username").innerText=loged.name;
}else{
    document.querySelector("#profilelogo").style.display="block";
    document.querySelector("#username").style.display="none";
}
