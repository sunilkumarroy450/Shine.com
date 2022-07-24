
localStorage.setItem("login",false)
function constructer(e,p){
     this.login_email=e;
     this.login_pass=p
}

function loginfun(e){
    e.preventDefault();

    let form=document.getElementById("login_form");

    let login_email=form.login_email.value;
    let login_pass=form.login_pass.value;

    let login_obj=new constructer(login_email,login_pass)


    if(login_email=="")
    {
        document.getElementById("login_email_p").innerText="enter valid email"
    }
    else if(login_pass=="")
    {
        document.getElementById("login_pass_p").innerText="enter valid password"
    }
    else if ((login_email.length>0) && (login_pass.length>0))
    {
        if ((  document.getElementById("checkBox").checked!==true))
       {
        alert("Please click on check box")
       }
       else
      {
        let arr=JSON.parse(localStorage.getItem("signupdata"))||[];
        console.log(arr)

        arr.forEach(function (ele){
            if ((login_email==ele.email)&&(login_pass==ele.pass))
            {
                alert("Login Successful")
                localStorage.setItem("login_data",JSON.stringify(ele))
                localStorage.setItem("login",true);
                window.location="index.html"
            }
        })
      }
    }
}
