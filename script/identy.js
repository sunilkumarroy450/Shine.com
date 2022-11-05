
    
   

      let arr=JSON.parse(localStorage.getItem("sign_data"))||[];

      arr.forEach(function (ele){
          let h2=document.getElementById("welcome_text")
          h2.innerText=`Welcome ${ele.name}`
      })
  
       document.getElementById("check_div1").addEventListener("click",div1)
       function div1(){
        let personel_name=document.getElementById("inner_nav_text")
        personel_name.innerText=document.getElementById("male_text").innerHTML
        personel_name.style.marginLeft="507px"
        personel_name.style.fontWeight="bold"
        personel_name.style.fontSize="20px"
        personel_name.style.color="red"

       let first=document.getElementById("check_div1")
       first.style.backgroundColor="rgb(230,253,255)"

       let second=document.getElementById("check_div2")
       second.style.backgroundColor="white"

       let third=document.getElementById("check_div3")
       third.style.backgroundColor="white"

       let fourth=document.getElementById("check_div4")
       fourth.style.backgroundColor="white"

       let role=document.getElementById("male_select")
       role.style.display="block"

       let role2=document.getElementById("female_select2")
       role2.style.display="none"

       let role3=document.getElementById("transh_select3")
       role3.style.display="none"

       let role4=document.getElementById("cross_select4")
       role4.style.display="none"

       let personel=document.getElementById("inner_nav_check")
       if (personel.checked !==true)
       {
        document.getElementById("inner_nav_check").checked=true
       
       }
     
       let nextbtn=document.getElementById("nextbtn")
       nextbtn.style.display="block"

       let male_text=document.getElementById("male_text").innerHTML
       let obj={
        name:male_text
       }
       localStorage.setItem("gender_data",JSON.stringify(obj))

      // window.location.href="city.html"
     
    }
    
    document.getElementById("check_div2").addEventListener("click",div2)
    function div2(){
        let personel_name=document.getElementById("inner_nav_text")
        personel_name.innerText=document.getElementById("female_text").innerHTML
         personel_name.style.marginLeft="500px"
         personel_name.style.fontWeight="bold"
        personel_name.style.fontSize="20px"
        personel_name.style.color="red"


       let second=document.getElementById("check_div2")
       second.style.backgroundColor="rgb(230,253,255)"

       let first=document.getElementById("check_div1")
       first.style.backgroundColor="white"

       let third=document.getElementById("check_div3")
       third.style.backgroundColor="white"

       let fourth=document.getElementById("check_div4")
       fourth.style.backgroundColor="white"

       let role2=document.getElementById("female_select2")
       role2.style.display="block"

       
       let role=document.getElementById("male_select")
       role.style.display="none"

       let role3=document.getElementById("transh_select3")
       role3.style.display="none"

       let role4=document.getElementById("cross_select4")
       role4.style.display="none"

       let personel=document.getElementById("inner_nav_check")
       if (personel.checked !==true)
       {
        document.getElementById("inner_nav_check").checked=true
      
       }
       let nextbtn=document.getElementById("nextbtn")
       nextbtn.style.display="block"

       let female_text=document.getElementById("female_text").innerHTML
       let obj={
        name:female_text
       }
       localStorage.setItem("gender_data",JSON.stringify(obj))
     //  window.location.href="city.html"
      
       
    }

    document.getElementById("check_div3").addEventListener("click",div3)
    function div3(){
        let personel_name=document.getElementById("inner_nav_text")
        personel_name.innerText=document.getElementById("transh_text").innerHTML
         personel_name.style.marginLeft="480px"
         personel_name.style.fontWeight="bold"
        personel_name.style.fontSize="20px"
        personel_name.style.color="red"

       let third=document.getElementById("check_div3")
       third.style.backgroundColor="rgb(230,253,255)"

       let first=document.getElementById("check_div1")
       first.style.backgroundColor="white"

       let second=document.getElementById("check_div2")
       second.style.backgroundColor="white"

       let fourth=document.getElementById("check_div4")
       fourth.style.backgroundColor="white"

       let role3=document.getElementById("transh_select3")
       role3.style.display="block"

       let role=document.getElementById("male_select")
       role.style.display="none"

       let role2=document.getElementById("female_select2")
       role2.style.display="none"

       let role4=document.getElementById("cross_select4")
       role4.style.display="none"

       let personel=document.getElementById("inner_nav_check")
       if (personel.checked !==true)
       {
        document.getElementById("inner_nav_check").checked=true
    
       }
    
       let nextbtn=document.getElementById("nextbtn")
       nextbtn.style.display="block"

       let transh_text=document.getElementById("transh_text").innerHTML
       let obj={
        name:transh_text
       }
       localStorage.setItem("gender_data",JSON.stringify(obj))
      // window.location.href="city.html"
      
    }

    document.getElementById("check_div4").addEventListener("click",div4)
    function div4(){
        let personel_name=document.getElementById("inner_nav_text")
        personel_name.innerText=document.getElementById("cross_text").innerHTML
        personel_name.style.marginLeft="460px"
        personel_name.style.fontWeight="bold"
        personel_name.style.fontSize="20px"
        personel_name.style.color="red"


       let fourth=document.getElementById("check_div4")
       fourth.style.backgroundColor="rgb(230,253,255)"

       let first=document.getElementById("check_div1")
       first.style.backgroundColor="white"

       let second=document.getElementById("check_div2")
       second.style.backgroundColor="white"

       let third=document.getElementById("check_div3")
       third.style.backgroundColor="white"

       let role4=document.getElementById("cross_select4")
       role4.style.display="block"

       let role=document.getElementById("male_select")
       role.style.display="none"

       let role2=document.getElementById("female_select2")
       role2.style.display="none"

       let role3=document.getElementById("transh_select3")
       role3.style.display="none"

       let personel=document.getElementById("inner_nav_check")
       if (personel.checked !==true)
       {
        document.getElementById("inner_nav_check").checked=true;
       }
        
       let nextbtn=document.getElementById("nextbtn")
       nextbtn.style.display="block"

       let cross_text=document.getElementById("cross_text").innerHTML
       let obj={
        name:cross_text
       }
    
       localStorage.setItem("gender_data",JSON.stringify(obj))
       //window.location.href="city.html"
    
    }
    
    function nextbtn(){
        window.location.href="education.html"
    }

  
   
    

