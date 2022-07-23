
document.getElementById("cardpay").addEventListener("click",()=>{
    document.querySelector("#card_section").style.display="block"
    document.querySelector("#payment").style.display="none"
})

document.getElementById("cback").addEventListener("click",()=>{
    document.querySelector("#card_section").style.display="none"
    document.querySelector("#payment").style.display="block"
})


//pay 
let doc=JSON.parse(localStorage.getItem("final"))
document.getElementById("lpay").innerHTML=doc+" "+"fee";

document.getElementById("ppay").innerHTML=doc+" "+"fee";

//next
let card=document.querySelector("#card");
card.addEventListener("submit",fun)
function fun(){
    event.preventDefault();

    if(card.Number.value==00000000000000 && card.cvv.value==123){
        alert("Payment Sucessfull")
        window.location="index.html"
    }else{
        alert("Card deatil wrong")
    }
}

