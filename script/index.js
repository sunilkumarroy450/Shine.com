let counter = 1;
let id;
const settime=(counter)=>{
    id=setInterval(function () {
        document.getElementById('radio' + counter).checked = true;
        counter++
        if (counter > 4) {
            counter = 1;
        }
    }, 3000)
}

settime(counter);

document.querySelectorAll(".rdbtn").forEach((ele,i)=>{
    ele.addEventListener("click",()=>{
        clearInterval(id);
            settime(i+2);
    });
});
document.querySelector("#cool1").addEventListener("click",()=>{
    document.querySelector("#cool1").setAttribute("class","cool")
    document.querySelector("#comp1").removeAttribute("class","cool");
    document.querySelector("#coolplace").style.display="grid";
    document.querySelector("#topcomp").style.display="none"
})
document.querySelector("#comp1").addEventListener("click",()=>{
    document.querySelector("#comp1").setAttribute("class","cool")
    document.querySelector("#cool1").removeAttribute("class","cool");
    document.querySelector("#coolplace").style.display="none";
    document.querySelector("#topcomp").style.display="flex"
})

document.querySelector("#rights").addEventListener("click",()=>{
    document.querySelector("#scrool>div").style.marginLeft="-155px"
})