import {nav,footer} from "../component/navandfootexport.js";
document.getElementById("navbar").innerHTML=nav();
document.getElementById("footer").innerHTML=footer();

var data=JSON.parse(localStorage.getItem("buycart")) || [];
console.log(data)
append(data);
// var four=0;
function append(obj){
  let con=document.getElementById("add_to_cart");
  con.innerHTML=null;
    let sum=0;
   
    let final=0;
  obj.forEach(function(ele,i){
   
    var div=document.createElement("div");
    div.setAttribute("id","niraj")
    var img=document.createElement("img");
    img.setAttribute("id","img")
    img.src=ele.img;
    let imgdiv = document.createElement("div");
    imgdiv.setAttribute("id", "imgdiv");
    var title=document.createElement("h2");
    title.innerText=ele.title;
   
    var price=document.createElement("h3");
    price.innerText="$" +ele.price;
    sum+= +ele.price
    
   var subt= document.getElementById("subt")
   var one= subt.innerHTML= "$"+" "+sum;
   var sgst= document.getElementById("sgst");
   var two= sgst.innerHTML="$"+" "+(Math.floor(9/100*sum))
   var cgst= document.getElementById("cgst")
   var three= cgst.innerHTML="$"+" "+(Math.floor(9/100*sum))
   var totalp= document.getElementById("totalp")
  //  final=(sum)+(two.split)+(three)
  let nt=two.split("$");
  let nth=three.split("$");
  final=sum+(+nt[1])+(+nth[1]);
   totalp.innerHTML=final;

   localStorage.setItem("final",JSON.stringify(final))


    var btn=document.createElement("button");
    btn.setAttribute("id","niraj1")
    btn.innerHTML=`<span class="material-symbols-outlined">
    delete
    </span>`
    btn.addEventListener("click",function(){
        remove(ele,i)
    })
    imgdiv.append(img)
    let titlediv = document.createElement("div")
    titlediv.setAttribute("id","titlediv");
    titlediv.append(title,price)
    div.append(imgdiv,titlediv,btn);
    
    // let con=document.getElementById("add_to_cart");
    con.append(div)
  })

}
function remove(ele,i){
    data.splice(ele,1)
    localStorage.setItem("buycart",JSON.stringify(data))
    //localStorage.setItem("totalp",JSON.stringify(four))
    append(data);
}
document.querySelector("#cartsection5").innerText=data.length;
