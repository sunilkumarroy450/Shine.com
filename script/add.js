var data=JSON.parse(localStorage.getItem("niraj")) || [];
console.log(data)
append(data);
// var four=0;
function append(obj){
    let sum=0;
   
    let final=0;
  obj.forEach(function(ele,i){
   
    var div=document.createElement("div");
    div.setAttribute("id","niraj")
    var img=document.createElement("img");
    img.setAttribute("id","img")
    img.src=ele.img;
    var title=document.createElement("h2");
    title.innerText=ele.title;
   
    var price=document.createElement("h3");
    price.innerText="$" +ele.price;
    sum+= +ele.price
   var subt= document.getElementById("subt")
   var one= subt.innerHTML= "$"+" "+sum
   var sgst= document.getElementById("sgst");
   var two= sgst.innerHTML="$"+" "+(+Math.floor(9/100*sum))
   var cgst= document.getElementById("cgst")
   var three= cgst.innerHTML="$"+" "+(+Math.floor(9/100*sum))
   var totalp= document.getElementById("totalp")
   final=two
    four=totalp.innerHTML=final;


    var btn=document.createElement("button");
    btn.setAttribute("id","niraj1")
    btn.innerText="Delete"
    btn.addEventListener("click",function(){
        remove(ele,i)
    })
    div.append(img,title,price,btn);
    
    var con=document.getElementById("add_to_cart");
    con.append(div)
  })

}
function remove(ele,i){
    data.splice(i,1)
    localStorage.setItem("niraj",JSON.stringify(data))
    localStorage.setItem("totalp",JSON.stringify(four))
    window.location.reload();
}
