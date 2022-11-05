function constr(n,e,m,p){
    this.name=n;
    this.email=e;
    this.mob=m;
    this.pass=p
}

let signupdataLs=JSON.parse(localStorage.getItem("signupdata")) || [];

function inputfun(e){
e.preventDefault()
 let form=document.getElementById("input_form")
 console.log("hii");
 let name=form.name.value;
 let email=form.email.value;
 let mob=form.mob.value;
 let pass=form.pass.value;
//  console.log(name,email,pass)
 let sign_obj=new constr(name,email,mob,pass);
 signupdataLs.push(sign_obj);
 localStorage.setItem("signupdata",JSON.stringify(signupdataLs));
 window.location="identy.html"
}