
document.getElementById("cardpay").addEventListener("click",()=>{
    document.querySelector("#card_section").style.display="block"
    document.querySelector("#payment").style.display="none"
})

document.getElementById("cback").addEventListener("click",()=>{
    document.querySelector("#card_section").style.display="none"
    document.querySelector("#payment").style.display="block"
})