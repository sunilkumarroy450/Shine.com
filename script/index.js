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