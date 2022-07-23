
    let edu_div1=document.getElementById("edu_div1").addEventListener("click",edu_fun1)

    function edu_fun1(){

        let personel_name=document.getElementById("inner_nav_text")
        personel_name.innerText=document.getElementById("p1").innerHTML
        personel_name.style.marginLeft="500px"
        personel_name.style.fontWeight="bold"
        personel_name.style.fontSize="20px"
        personel_name.style.color="red"

       let first1=document.getElementById("edu_div1")
       first1.style.backgroundColor="rgb(230,253,255)"

       let first2=document.getElementById("edu_div2")
       first2.style.backgroundColor="white"

       let first3=document.getElementById("edu_div3")
       first3.style.backgroundColor="white"

       let first4=document.getElementById("edu_div4")
       first4.style.backgroundColor="white"

       let first5=document.getElementById("edu_div5")
       first5.style.backgroundColor="white"

       let first6=document.getElementById("edu_div6")
       first6.style.backgroundColor="white"

       let first7=document.getElementById("edu_div7")
       first7.style.backgroundColor="white"

       let first8=document.getElementById("edu_div8")
       first8.style.backgroundColor="white"

       let first9=document.getElementById("edu_div9")
       first9.style.backgroundColor="white"

       let first10=document.getElementById("edu_div10")
       first10.style.backgroundColor="white"

       let first11=document.getElementById("edu_div11")
       first11.style.backgroundColor="white"

       let first12=document.getElementById("edu_div12")
       first12.style.backgroundColor="white"

       let first13=document.getElementById("edu_div13")
       first13.style.backgroundColor="white"

       let first14=document.getElementById("edu_div14")
       first14.style.backgroundColor="white"



        let right1=document.getElementById("slect_img1")
        right1.style.display="block" 

        let right2=document.getElementById("slect_img2")
        right2.style.display="none" 

        let right3=document.getElementById("slect_img3")
        right3.style.display="none" 

        let right4=document.getElementById("slect_img4")
        right4.style.display="none" 

        let right5=document.getElementById("slect_img5")
        right5.style.display="none" 

        let right6=document.getElementById("slect_img6")
        right6.style.display="none" 

        let right7=document.getElementById("slect_img7")
        right7.style.display="none" 

        let right8=document.getElementById("slect_img8")
        right8.style.display="none" 

        let right9=document.getElementById("slect_img9")
        right9.style.display="none" 

        let right10=document.getElementById("slect_img10")
        right10.style.display="none"  

        let right11=document.getElementById("slect_img11")
        right11.style.display="none" 

        let right12=document.getElementById("slect_img12")
        right12.style.display="none" 

        let right13=document.getElementById("slect_img13")
        right13.style.display="none" 
        
        let right14=document.getElementById("slect_img14")
        right14.style.display="none" 

    

    
        let education=document.getElementById("inner_nav_check")
       if (education.checked !==true)
       {
        document.getElementById("inner_nav_check").checked=true
       
       }

       let endbtn=document.getElementById("endbtn")
       endbtn.style.display="block";

       let prvbtn=document.getElementById("prvbtn")
       prvbtn.style.display="block"


       let text1=document.getElementById("p1").innerHTML
       let obj={
        name:text1
       }
       localStorage.setItem("education_data",JSON.stringify(obj))

    

    }

    let edu_div2=document.getElementById("edu_div2").addEventListener("click",edu_fun2)

    function edu_fun2(){

        let personel_name=document.getElementById("inner_nav_text")
        personel_name.innerText=document.getElementById("p2").innerHTML
        personel_name.style.marginLeft="507px"
        personel_name.style.fontWeight="bold"
        personel_name.style.fontSize="20px"
        personel_name.style.color="red"

        let first2=document.getElementById("edu_div2")
       first2.style.backgroundColor="rgb(230,253,255)"

       
       let first1=document.getElementById("edu_div1")
       first1.style.backgroundColor="white"

       let first3=document.getElementById("edu_div3")
       first3.style.backgroundColor="white"

       let first4=document.getElementById("edu_div4")
       first4.style.backgroundColor="white"

       let first5=document.getElementById("edu_div5")
       first5.style.backgroundColor="white"

       let first6=document.getElementById("edu_div6")
       first6.style.backgroundColor="white"

       let first7=document.getElementById("edu_div7")
       first7.style.backgroundColor="white"

       let first8=document.getElementById("edu_div8")
       first8.style.backgroundColor="white"

       let first9=document.getElementById("edu_div9")
       first9.style.backgroundColor="white"

       let first10=document.getElementById("edu_div10")
       first10.style.backgroundColor="white"

       let first11=document.getElementById("edu_div11")
       first11.style.backgroundColor="white"

       let first12=document.getElementById("edu_div12")
       first12.style.backgroundColor="white"

       let first13=document.getElementById("edu_div13")
       first13.style.backgroundColor="white"

       let first14=document.getElementById("edu_div14")
       first14.style.backgroundColor="white"



       let right1=document.getElementById("slect_img1")
        right1.style.display="none" 

        let right2=document.getElementById("slect_img2")
        right2.style.display="block"

        let right3=document.getElementById("slect_img3")
        right3.style.display="none" 

        let right4=document.getElementById("slect_img4")
        right4.style.display="none" 

        let right5=document.getElementById("slect_img5")
        right5.style.display="none" 

        let right6=document.getElementById("slect_img6")
        right6.style.display="none" 

        let right7=document.getElementById("slect_img7")
        right7.style.display="none" 

        let right8=document.getElementById("slect_img8")
        right8.style.display="none" 

        let right9=document.getElementById("slect_img9")
        right9.style.display="none" 

        let right10=document.getElementById("slect_img10")
        right10.style.display="none"  

        let right11=document.getElementById("slect_img11")
        right11.style.display="none" 

        let right12=document.getElementById("slect_img12")
        right12.style.display="none" 

        let right13=document.getElementById("slect_img13")
        right13.style.display="none" 
        
        let right14=document.getElementById("slect_img14")
        right14.style.display="none" 

        
     let education=document.getElementById("inner_nav_check")
       if (education.checked !==true)
       {
        document.getElementById("inner_nav_check").checked=true
       
       }

       let endbtn=document.getElementById("endbtn")
       endbtn.style.display="block";

       let prvbtn=document.getElementById("prvbtn")
       prvbtn.style.display="block"

       let text2=document.getElementById("p2").innerHTML
       let obj={
        name:text2
       }
       localStorage.setItem("education_data",JSON.stringify(obj))

    
   }

   let edu_div3=document.getElementById("edu_div3").addEventListener("click",edu_fun3)

   function edu_fun3(){

    let personel_name=document.getElementById("inner_nav_text")
        personel_name.innerText=document.getElementById("p3").innerHTML
        personel_name.style.marginLeft="515px"
        personel_name.style.fontWeight="bold"
        personel_name.style.fontSize="20px"
        personel_name.style.color="red"

    let first3=document.getElementById("edu_div3")
       first3.style.backgroundColor="rgb(230,253,255)"
        
       
       let first1=document.getElementById("edu_div1")
       first1.style.backgroundColor="white"

       let first2=document.getElementById("edu_div2")
       first2.style.backgroundColor="white"

       let first4=document.getElementById("edu_div4")
       first4.style.backgroundColor="white"

       let first5=document.getElementById("edu_div5")
       first5.style.backgroundColor="white"

       let first6=document.getElementById("edu_div6")
       first6.style.backgroundColor="white"

       let first7=document.getElementById("edu_div7")
       first7.style.backgroundColor="white"

       let first8=document.getElementById("edu_div8")
       first8.style.backgroundColor="white"

       let first9=document.getElementById("edu_div9")
       first9.style.backgroundColor="white"

       let first10=document.getElementById("edu_div10")
       first10.style.backgroundColor="white"

       let first11=document.getElementById("edu_div11")
       first11.style.backgroundColor="white"

       let first12=document.getElementById("edu_div12")
       first12.style.backgroundColor="white"

       let first13=document.getElementById("edu_div13")
       first13.style.backgroundColor="white"

       let first14=document.getElementById("edu_div14")
       first14.style.backgroundColor="white"


       

       let right1=document.getElementById("slect_img1")
        right1.style.display="none" 

        let right2=document.getElementById("slect_img2")
        right2.style.display="none"

        let right3=document.getElementById("slect_img3")
        right3.style.display="block" 

        let right4=document.getElementById("slect_img4")
        right4.style.display="none" 

        let right5=document.getElementById("slect_img5")
        right5.style.display="none" 

        let right6=document.getElementById("slect_img6")
        right6.style.display="none" 

        let right7=document.getElementById("slect_img7")
        right7.style.display="none" 

        let right8=document.getElementById("slect_img8")
        right8.style.display="none" 

        let right9=document.getElementById("slect_img9")
        right9.style.display="none" 

        let right10=document.getElementById("slect_img10")
        right10.style.display="none"  

        let right11=document.getElementById("slect_img11")
        right11.style.display="none" 

        let right12=document.getElementById("slect_img12")
        right12.style.display="none" 

        let right13=document.getElementById("slect_img13")
        right13.style.display="none" 
        
        let right14=document.getElementById("slect_img14")
        right14.style.display="none" 


        
     let education=document.getElementById("inner_nav_check")
       if (education.checked !==true)
       {
        document.getElementById("inner_nav_check").checked=true
       
       }

       let endbtn=document.getElementById("endbtn")
       endbtn.style.display="block";

       let prvbtn=document.getElementById("prvbtn")
       prvbtn.style.display="block"

       let text3=document.getElementById("p3").innerHTML
       let obj={
        name:text3
       }
       localStorage.setItem("education_data",JSON.stringify(obj))

       
    
   }

   let edu_div4=document.getElementById("edu_div4").addEventListener("click",edu_fun4)

   function edu_fun4(){

    let personel_name=document.getElementById("inner_nav_text")
        personel_name.innerText=document.getElementById("p4").innerHTML
        personel_name.style.marginLeft="510px"
        personel_name.style.fontWeight="bold"
        personel_name.style.fontSize="20px"
        personel_name.style.color="red"

    let first4=document.getElementById("edu_div4")
       first4.style.backgroundColor="rgb(230,253,255)"

        
       let first1=document.getElementById("edu_div1")
       first1.style.backgroundColor="white"

       let first2=document.getElementById("edu_div2")
       first2.style.backgroundColor="white"

       let first3=document.getElementById("edu_div3")
       first3.style.backgroundColor="white"

       let first5=document.getElementById("edu_div5")
       first5.style.backgroundColor="white"

       let first6=document.getElementById("edu_div6")
       first6.style.backgroundColor="white"

       let first7=document.getElementById("edu_div7")
       first7.style.backgroundColor="white"

       let first8=document.getElementById("edu_div8")
       first8.style.backgroundColor="white"

       let first9=document.getElementById("edu_div9")
       first9.style.backgroundColor="white"

       let first10=document.getElementById("edu_div10")
       first10.style.backgroundColor="white"

       let first11=document.getElementById("edu_div11")
       first11.style.backgroundColor="white"

       let first12=document.getElementById("edu_div12")
       first12.style.backgroundColor="white"

       let first13=document.getElementById("edu_div13")
       first13.style.backgroundColor="white"

       let first14=document.getElementById("edu_div14")
       first14.style.backgroundColor="white"


       

       let right1=document.getElementById("slect_img1")
        right1.style.display="none" 

        let right2=document.getElementById("slect_img2")
        right2.style.display="none"

        let right3=document.getElementById("slect_img3")
        right3.style.display="none" 

        let right4=document.getElementById("slect_img4")
        right4.style.display="block" 

        let right5=document.getElementById("slect_img5")
        right5.style.display="none" 

        let right6=document.getElementById("slect_img6")
        right6.style.display="none" 

        let right7=document.getElementById("slect_img7")
        right7.style.display="none" 

        let right8=document.getElementById("slect_img8")
        right8.style.display="none" 

        let right9=document.getElementById("slect_img9")
        right9.style.display="none" 

        let right10=document.getElementById("slect_img10")
        right10.style.display="none"  

        let right11=document.getElementById("slect_img11")
        right11.style.display="none" 

        let right12=document.getElementById("slect_img12")
        right12.style.display="none" 

        let right13=document.getElementById("slect_img13")
        right13.style.display="none" 
        
        let right14=document.getElementById("slect_img14")
        right14.style.display="none" 


        
     let education=document.getElementById("inner_nav_check")
       if (education.checked !==true)
       {
        document.getElementById("inner_nav_check").checked=true
       
       }

       let endbtn=document.getElementById("endbtn")
       endbtn.style.display="block";

       let prvbtn=document.getElementById("prvbtn")
       prvbtn.style.display="block"

       let text4=document.getElementById("p4").innerHTML
       let obj={
        name:text4
       }
       localStorage.setItem("education_data",JSON.stringify(obj))

    
   }

   let edu_div5=document.getElementById("edu_div5").addEventListener("click",edu_fun5)

   function edu_fun5(){

    let personel_name=document.getElementById("inner_nav_text")
        personel_name.innerText=document.getElementById("p5").innerHTML
        personel_name.style.marginLeft="500px"
        personel_name.style.fontWeight="bold"
        personel_name.style.fontSize="20px"
        personel_name.style.color="red"

    let first5=document.getElementById("edu_div5")
       first5.style.backgroundColor="rgb(230,253,255)"

       let first1=document.getElementById("edu_div1")
       first1.style.backgroundColor="white"

       let first2=document.getElementById("edu_div2")
       first2.style.backgroundColor="white"

       let first3=document.getElementById("edu_div3")
       first3.style.backgroundColor="white"

       let first4=document.getElementById("edu_div4")
       first4.style.backgroundColor="white"

       let first6=document.getElementById("edu_div6")
       first6.style.backgroundColor="white"

       let first7=document.getElementById("edu_div7")
       first7.style.backgroundColor="white"

       let first8=document.getElementById("edu_div8")
       first8.style.backgroundColor="white"

       let first9=document.getElementById("edu_div9")
       first9.style.backgroundColor="white"

       let first10=document.getElementById("edu_div10")
       first10.style.backgroundColor="white"

       let first11=document.getElementById("edu_div11")
       first11.style.backgroundColor="white"

       let first12=document.getElementById("edu_div12")
       first12.style.backgroundColor="white"

       let first13=document.getElementById("edu_div13")
       first13.style.backgroundColor="white"

       let first14=document.getElementById("edu_div14")
       first14.style.backgroundColor="white"



       

       let right1=document.getElementById("slect_img1")
        right1.style.display="none" 

        let right2=document.getElementById("slect_img2")
        right2.style.display="none"

        let right3=document.getElementById("slect_img3")
        right3.style.display="none" 

        let right4=document.getElementById("slect_img4")
        right4.style.display="none" 

        let right5=document.getElementById("slect_img5")
        right5.style.display="block" 

        let right6=document.getElementById("slect_img6")
        right6.style.display="none" 

        let right7=document.getElementById("slect_img7")
        right7.style.display="none" 

        let right8=document.getElementById("slect_img8")
        right8.style.display="none" 

        let right9=document.getElementById("slect_img9")
        right9.style.display="none" 

        let right10=document.getElementById("slect_img10")
        right10.style.display="none"  

        let right11=document.getElementById("slect_img11")
        right11.style.display="none" 

        let right12=document.getElementById("slect_img12")
        right12.style.display="none" 

        let right13=document.getElementById("slect_img13")
        right13.style.display="none" 
        
        let right14=document.getElementById("slect_img14")
        right14.style.display="none" 


        
     let education=document.getElementById("inner_nav_check")
       if (education.checked !==true)
       {
        document.getElementById("inner_nav_check").checked=true
       
       }

       let endbtn=document.getElementById("endbtn")
       endbtn.style.display="block";

       let prvbtn=document.getElementById("prvbtn")
       prvbtn.style.display="block"

       let text5=document.getElementById("p5").innerHTML
       let obj={
        name:text5
       }
       localStorage.setItem("education_data",JSON.stringify(obj))

    
    
   }

   let edu_div6=document.getElementById("edu_div6").addEventListener("click",edu_fun6)

   function edu_fun6(){

    let personel_name=document.getElementById("inner_nav_text")
        personel_name.innerText=document.getElementById("p6").innerHTML
        personel_name.style.marginLeft="507px"
        personel_name.style.fontWeight="bold"
        personel_name.style.fontSize="20px"
        personel_name.style.color="red"

    let first6=document.getElementById("edu_div6")
       first6.style.backgroundColor="rgb(230,253,255)"

       let first1=document.getElementById("edu_div1")
       first1.style.backgroundColor="white"

       let first2=document.getElementById("edu_div2")
       first2.style.backgroundColor="white"

       let first3=document.getElementById("edu_div3")
       first3.style.backgroundColor="white"

       let first4=document.getElementById("edu_div4")
       first4.style.backgroundColor="white"

       let first5=document.getElementById("edu_div5")
       first5.style.backgroundColor="white"

       let first7=document.getElementById("edu_div7")
       first7.style.backgroundColor="white"

       let first8=document.getElementById("edu_div8")
       first8.style.backgroundColor="white"

       let first9=document.getElementById("edu_div9")
       first9.style.backgroundColor="white"

       let first10=document.getElementById("edu_div10")
       first10.style.backgroundColor="white"

       let first11=document.getElementById("edu_div11")
       first11.style.backgroundColor="white"

       let first12=document.getElementById("edu_div12")
       first12.style.backgroundColor="white"

       let first13=document.getElementById("edu_div13")
       first13.style.backgroundColor="white"

       let first14=document.getElementById("edu_div14")
       first14.style.backgroundColor="white"



       

       let right1=document.getElementById("slect_img1")
        right1.style.display="none" 

        let right2=document.getElementById("slect_img2")
        right2.style.display="none"

        let right3=document.getElementById("slect_img3")
        right3.style.display="none" 

        let right4=document.getElementById("slect_img4")
        right4.style.display="none" 

        let right5=document.getElementById("slect_img5")
        right5.style.display="none" 

        let right6=document.getElementById("slect_img6")
        right6.style.display="block" 

        let right7=document.getElementById("slect_img7")
        right7.style.display="none" 

        let right8=document.getElementById("slect_img8")
        right8.style.display="none" 

        let right9=document.getElementById("slect_img9")
        right9.style.display="none" 

        let right10=document.getElementById("slect_img10")
        right10.style.display="none"  

        let right11=document.getElementById("slect_img11")
        right11.style.display="none" 

        let right12=document.getElementById("slect_img12")
        right12.style.display="none" 

        let right13=document.getElementById("slect_img13")
        right13.style.display="none" 
        
        let right14=document.getElementById("slect_img14")
        right14.style.display="none" 


        
     let education=document.getElementById("inner_nav_check")
       if (education.checked !==true)
       {
        document.getElementById("inner_nav_check").checked=true
       
       }


       let endbtn=document.getElementById("endbtn")
       endbtn.style.display="block";

       let prvbtn=document.getElementById("prvbtn")
       prvbtn.style.display="block"

       let text6=document.getElementById("p6").innerHTML
       let obj={
        name:text6
       }
       localStorage.setItem("education_data",JSON.stringify(obj))
    
   }

   let edu_div7=document.getElementById("edu_div7").addEventListener("click",edu_fun7)

   function edu_fun7(){

    let personel_name=document.getElementById("inner_nav_text")
        personel_name.innerText=document.getElementById("p7").innerHTML
        personel_name.style.marginLeft="500px"
        personel_name.style.fontWeight="bold"
        personel_name.style.fontSize="20px"
        personel_name.style.color="red"

    let first7=document.getElementById("edu_div7")
       first7.style.backgroundColor="rgb(230,253,255)"

       let first1=document.getElementById("edu_div1")
       first1.style.backgroundColor="white"

       let first2=document.getElementById("edu_div2")
       first2.style.backgroundColor="white"

       let first3=document.getElementById("edu_div3")
       first3.style.backgroundColor="white"

       let first4=document.getElementById("edu_div4")
       first4.style.backgroundColor="white"

       let first5=document.getElementById("edu_div5")
       first5.style.backgroundColor="white"

       let first6=document.getElementById("edu_div6")
       first6.style.backgroundColor="white"

       let first8=document.getElementById("edu_div8")
       first8.style.backgroundColor="white"

       let first9=document.getElementById("edu_div9")
       first9.style.backgroundColor="white"

       let first10=document.getElementById("edu_div10")
       first10.style.backgroundColor="white"

       let first11=document.getElementById("edu_div11")
       first11.style.backgroundColor="white"

       let first12=document.getElementById("edu_div12")
       first12.style.backgroundColor="white"

       let first13=document.getElementById("edu_div13")
       first13.style.backgroundColor="white"

       let first14=document.getElementById("edu_div14")
       first14.style.backgroundColor="white"



       

       let right1=document.getElementById("slect_img1")
        right1.style.display="none" 

        let right2=document.getElementById("slect_img2")
        right2.style.display="none"

        let right3=document.getElementById("slect_img3")
        right3.style.display="none" 

        let right4=document.getElementById("slect_img4")
        right4.style.display="none" 

        let right5=document.getElementById("slect_img5")
        right5.style.display="none" 

        let right6=document.getElementById("slect_img6")
        right6.style.display="none" 

        let right7=document.getElementById("slect_img7")
        right7.style.display="block" 

        let right8=document.getElementById("slect_img8")
        right8.style.display="none" 

        let right9=document.getElementById("slect_img9")
        right9.style.display="none" 

        let right10=document.getElementById("slect_img10")
        right10.style.display="none"  

        let right11=document.getElementById("slect_img11")
        right11.style.display="none" 

        let right12=document.getElementById("slect_img12")
        right12.style.display="none" 

        let right13=document.getElementById("slect_img13")
        right13.style.display="none" 
        
        let right14=document.getElementById("slect_img14")
        right14.style.display="none" 


        
     let education=document.getElementById("inner_nav_check")
       if (education.checked !==true)
       {
        document.getElementById("inner_nav_check").checked=true
       
       }

       let endbtn=document.getElementById("endbtn")
       endbtn.style.display="block";

       let prvbtn=document.getElementById("prvbtn")
       prvbtn.style.display="block"

       let text7=document.getElementById("p7").innerHTML
       let obj={
        name:text7
       }
       localStorage.setItem("education_data",JSON.stringify(obj))

    
    
   }

   let edu_div8=document.getElementById("edu_div8").addEventListener("click",edu_fun8)

   function edu_fun8(){

    let personel_name=document.getElementById("inner_nav_text")
        personel_name.innerText=document.getElementById("p8").innerHTML
        personel_name.style.marginLeft="515px"
        personel_name.style.fontWeight="bold"
        personel_name.style.fontSize="20px"
        personel_name.style.color="red"

    let first8=document.getElementById("edu_div8")
       first8.style.backgroundColor="rgb(230,253,255)"

       let first1=document.getElementById("edu_div1")
       first1.style.backgroundColor="white"

       let first2=document.getElementById("edu_div2")
       first2.style.backgroundColor="white"

       let first3=document.getElementById("edu_div3")
       first3.style.backgroundColor="white"

       let first4=document.getElementById("edu_div4")
       first4.style.backgroundColor="white"

       let first5=document.getElementById("edu_div5")
       first5.style.backgroundColor="white"

       let first6=document.getElementById("edu_div6")
       first6.style.backgroundColor="white"

       let first7=document.getElementById("edu_div7")
       first7.style.backgroundColor="white"

       let first9=document.getElementById("edu_div9")
       first9.style.backgroundColor="white"

       let first10=document.getElementById("edu_div10")
       first10.style.backgroundColor="white"

       let first11=document.getElementById("edu_div11")
       first11.style.backgroundColor="white"

       let first12=document.getElementById("edu_div12")
       first12.style.backgroundColor="white"

       let first13=document.getElementById("edu_div13")
       first13.style.backgroundColor="white"

       let first14=document.getElementById("edu_div14")
       first14.style.backgroundColor="white"



       

       let right1=document.getElementById("slect_img1")
        right1.style.display="none" 

        let right2=document.getElementById("slect_img2")
        right2.style.display="none"

        let right3=document.getElementById("slect_img3")
        right3.style.display="none" 

        let right4=document.getElementById("slect_img4")
        right4.style.display="none" 

        let right5=document.getElementById("slect_img5")
        right5.style.display="none" 

        let right6=document.getElementById("slect_img6")
        right6.style.display="none" 

        let right7=document.getElementById("slect_img7")
        right7.style.display="none" 

        let right8=document.getElementById("slect_img8")
        right8.style.display="block" 

        let right9=document.getElementById("slect_img9")
        right9.style.display="none" 

        let right10=document.getElementById("slect_img10")
        right10.style.display="none"  

        let right11=document.getElementById("slect_img11")
        right11.style.display="none" 

        let right12=document.getElementById("slect_img12")
        right12.style.display="none" 

        let right13=document.getElementById("slect_img13")
        right13.style.display="none" 
        
        let right14=document.getElementById("slect_img14")
        right14.style.display="none" 

        
     let education=document.getElementById("inner_nav_check")
       if (education.checked !==true)
       {
        document.getElementById("inner_nav_check").checked=true
       
       }


       let endbtn=document.getElementById("endbtn")
       endbtn.style.display="block";

       let prvbtn=document.getElementById("prvbtn")
       prvbtn.style.display="block"

       let text8=document.getElementById("p8").innerHTML
       let obj={
        name:text8
       }
       localStorage.setItem("education_data",JSON.stringify(obj))
    
    
   }

   let edu_div9=document.getElementById("edu_div9").addEventListener("click",edu_fun9)

   function edu_fun9(){

    let personel_name=document.getElementById("inner_nav_text")
        personel_name.innerText=document.getElementById("p9").innerHTML
        personel_name.style.marginLeft="500px"
        personel_name.style.fontWeight="bold"
        personel_name.style.fontSize="20px"
        personel_name.style.color="red"

    let first9=document.getElementById("edu_div9")
       first9.style.backgroundColor="rgb(230,253,255)"

       let first1=document.getElementById("edu_div1")
       first1.style.backgroundColor="white"

       let first2=document.getElementById("edu_div2")
       first2.style.backgroundColor="white"

       let first3=document.getElementById("edu_div3")
       first3.style.backgroundColor="white"

       let first4=document.getElementById("edu_div4")
       first4.style.backgroundColor="white"

       let first5=document.getElementById("edu_div5")
       first5.style.backgroundColor="white"

       let first6=document.getElementById("edu_div6")
       first6.style.backgroundColor="white"

       let first7=document.getElementById("edu_div7")
       first7.style.backgroundColor="white"

       let first8=document.getElementById("edu_div8")
       first8.style.backgroundColor="white"

       let first10=document.getElementById("edu_div10")
       first10.style.backgroundColor="white"

       let first11=document.getElementById("edu_div11")
       first11.style.backgroundColor="white"

       let first12=document.getElementById("edu_div12")
       first12.style.backgroundColor="white"

       let first13=document.getElementById("edu_div13")
       first13.style.backgroundColor="white"

       let first14=document.getElementById("edu_div14")
       first14.style.backgroundColor="white"



       

       let right1=document.getElementById("slect_img1")
        right1.style.display="none" 

        let right2=document.getElementById("slect_img2")
        right2.style.display="none"

        let right3=document.getElementById("slect_img3")
        right3.style.display="none" 

        let right4=document.getElementById("slect_img4")
        right4.style.display="none" 

        let right5=document.getElementById("slect_img5")
        right5.style.display="none" 

        let right6=document.getElementById("slect_img6")
        right6.style.display="none" 

        let right7=document.getElementById("slect_img7")
        right7.style.display="none" 

        let right8=document.getElementById("slect_img8")
        right8.style.display="none" 

        let right9=document.getElementById("slect_img9")
        right9.style.display="block" 

        let right10=document.getElementById("slect_img10")
        right10.style.display="none"  

        let right11=document.getElementById("slect_img11")
        right11.style.display="none" 

        let right12=document.getElementById("slect_img12")
        right12.style.display="none" 

        let right13=document.getElementById("slect_img13")
        right13.style.display="none" 
        
        let right14=document.getElementById("slect_img14")
        right14.style.display="none" 


        
     let education=document.getElementById("inner_nav_check")
       if (education.checked !==true)
       {
        document.getElementById("inner_nav_check").checked=true
       
       }

       let endbtn=document.getElementById("endbtn")
       endbtn.style.display="block";

       let prvbtn=document.getElementById("prvbtn")
       prvbtn.style.display="block"

       let text9=document.getElementById("p9").innerHTML
       let obj={
        name:text9
       }
       localStorage.setItem("education_data",JSON.stringify(obj))

    
    
   }

   let edu_div10=document.getElementById("edu_div10").addEventListener("click",edu_fun10)

   function edu_fun10(){

    let personel_name=document.getElementById("inner_nav_text")
        personel_name.innerText=document.getElementById("p10").innerHTML
        personel_name.style.marginLeft="507px"
        personel_name.style.fontWeight="bold"
        personel_name.style.fontSize="20px"
        personel_name.style.color="red"

    let first10=document.getElementById("edu_div10")
       first10.style.backgroundColor="rgb(230,253,255)"

       let first1=document.getElementById("edu_div1")
       first1.style.backgroundColor="white"

       let first2=document.getElementById("edu_div2")
       first2.style.backgroundColor="white"

       let first3=document.getElementById("edu_div3")
       first3.style.backgroundColor="white"

       let first4=document.getElementById("edu_div4")
       first4.style.backgroundColor="white"

       let first5=document.getElementById("edu_div5")
       first5.style.backgroundColor="white"

       let first6=document.getElementById("edu_div6")
       first6.style.backgroundColor="white"

       let first7=document.getElementById("edu_div7")
       first7.style.backgroundColor="white"

       let first8=document.getElementById("edu_div8")
       first8.style.backgroundColor="white"

       let first9=document.getElementById("edu_div9")
       first9.style.backgroundColor="white"

       let first11=document.getElementById("edu_div11")
       first11.style.backgroundColor="white"

       let first12=document.getElementById("edu_div12")
       first12.style.backgroundColor="white"

       let first13=document.getElementById("edu_div13")
       first13.style.backgroundColor="white"

       let first14=document.getElementById("edu_div14")
       first14.style.backgroundColor="white"



       

       let right1=document.getElementById("slect_img1")
        right1.style.display="none" 

        let right2=document.getElementById("slect_img2")
        right2.style.display="none"

        let right3=document.getElementById("slect_img3")
        right3.style.display="none" 

        let right4=document.getElementById("slect_img4")
        right4.style.display="none" 

        let right5=document.getElementById("slect_img5")
        right5.style.display="none" 

        let right6=document.getElementById("slect_img6")
        right6.style.display="none" 

        let right7=document.getElementById("slect_img7")
        right7.style.display="none" 

        let right8=document.getElementById("slect_img8")
        right8.style.display="none" 

        let right9=document.getElementById("slect_img9")
        right9.style.display="none" 

        let right10=document.getElementById("slect_img10")
        right10.style.display="block"  

        let right11=document.getElementById("slect_img11")
        right11.style.display="none" 

        let right12=document.getElementById("slect_img12")
        right12.style.display="none" 

        let right13=document.getElementById("slect_img13")
        right13.style.display="none" 
        
        let right14=document.getElementById("slect_img14")
        right14.style.display="none" 


        
     let education=document.getElementById("inner_nav_check")
       if (education.checked !==true)
       {
        document.getElementById("inner_nav_check").checked=true
       
       }

       let endbtn=document.getElementById("endbtn")
       endbtn.style.display="block";

       let prvbtn=document.getElementById("prvbtn")
       prvbtn.style.display="block"

       let text10=document.getElementById("p10").innerHTML
       let obj={
        name:text10
       }
       localStorage.setItem("education_data",JSON.stringify(obj))

    
    
   }

   let edu_div11=document.getElementById("edu_div11").addEventListener("click",edu_fun11)

   function edu_fun11(){

    let personel_name=document.getElementById("inner_nav_text")
        personel_name.innerText=document.getElementById("p11").innerHTML
        personel_name.style.marginLeft="500px"
        personel_name.style.fontWeight="bold"
        personel_name.style.fontSize="20px"
        personel_name.style.color="red"

    let first11=document.getElementById("edu_div11")
       first11.style.backgroundColor="rgb(230,253,255)"

       
       let first1=document.getElementById("edu_div1")
       first1.style.backgroundColor="white"

       let first2=document.getElementById("edu_div2")
       first2.style.backgroundColor="white"

       let first3=document.getElementById("edu_div3")
       first3.style.backgroundColor="white"

       let first4=document.getElementById("edu_div4")
       first4.style.backgroundColor="white"

       let first5=document.getElementById("edu_div5")
       first5.style.backgroundColor="white"

       let first6=document.getElementById("edu_div6")
       first6.style.backgroundColor="white"

       let first7=document.getElementById("edu_div7")
       first7.style.backgroundColor="white"

       let first8=document.getElementById("edu_div8")
       first8.style.backgroundColor="white"

       let first9=document.getElementById("edu_div9")
       first9.style.backgroundColor="white"

       let first10=document.getElementById("edu_div10")
       first10.style.backgroundColor="white"

       let first12=document.getElementById("edu_div12")
       first12.style.backgroundColor="white"

       let first13=document.getElementById("edu_div13")
       first13.style.backgroundColor="white"

       let first14=document.getElementById("edu_div14")
       first14.style.backgroundColor="white"



       

       let right1=document.getElementById("slect_img1")
        right1.style.display="none" 

        let right2=document.getElementById("slect_img2")
        right2.style.display="none"

        let right3=document.getElementById("slect_img3")
        right3.style.display="none" 

        let right4=document.getElementById("slect_img4")
        right4.style.display="none" 

        let right5=document.getElementById("slect_img5")
        right5.style.display="none" 

        let right6=document.getElementById("slect_img6")
        right6.style.display="none" 

        let right7=document.getElementById("slect_img7")
        right7.style.display="none" 

        let right8=document.getElementById("slect_img8")
        right8.style.display="none" 

        let right9=document.getElementById("slect_img9")
        right9.style.display="none" 

        let right10=document.getElementById("slect_img10")
        right10.style.display="none"  

        let right11=document.getElementById("slect_img11")
        right11.style.display="block" 

        let right12=document.getElementById("slect_img12")
        right12.style.display="none" 

        let right13=document.getElementById("slect_img13")
        right13.style.display="none" 
        
        let right14=document.getElementById("slect_img14")
        right14.style.display="none" 


        
     let education=document.getElementById("inner_nav_check")
       if (education.checked !==true)
       {
        document.getElementById("inner_nav_check").checked=true
       
       }

       let endbtn=document.getElementById("endbtn")
       endbtn.style.display="block";

       let prvbtn=document.getElementById("prvbtn")
       prvbtn.style.display="block"

       let text11=document.getElementById("p11").innerHTML
       let obj={
        name:text11
       }
       localStorage.setItem("education_data",JSON.stringify(obj))
    
   }

   let edu_div12=document.getElementById("edu_div12").addEventListener("click",edu_fun12)

   function edu_fun12(){

    let personel_name=document.getElementById("inner_nav_text")
        personel_name.innerText=document.getElementById("p12").innerHTML
        personel_name.style.marginLeft="505px"
        personel_name.style.fontWeight="bold"
        personel_name.style.fontSize="20px"
        personel_name.style.color="red"
    

    let first12=document.getElementById("edu_div12")
       first12.style.backgroundColor="rgb(230,253,255)"

       let first1=document.getElementById("edu_div1")
       first1.style.backgroundColor="white"

       let first2=document.getElementById("edu_div2")
       first2.style.backgroundColor="white"

       let first3=document.getElementById("edu_div3")
       first3.style.backgroundColor="white"

       let first4=document.getElementById("edu_div4")
       first4.style.backgroundColor="white"

       let first5=document.getElementById("edu_div5")
       first5.style.backgroundColor="white"

       let first6=document.getElementById("edu_div6")
       first6.style.backgroundColor="white"

       let first7=document.getElementById("edu_div7")
       first7.style.backgroundColor="white"

       let first8=document.getElementById("edu_div8")
       first8.style.backgroundColor="white"

       let first9=document.getElementById("edu_div9")
       first9.style.backgroundColor="white"

       let first10=document.getElementById("edu_div10")
       first10.style.backgroundColor="white"

       let first11=document.getElementById("edu_div11")
       first11.style.backgroundColor="white"

       let first13=document.getElementById("edu_div13")
       first13.style.backgroundColor="white"

       let first14=document.getElementById("edu_div14")
       first14.style.backgroundColor="white"




       

       let right1=document.getElementById("slect_img1")
        right1.style.display="none" 

        let right2=document.getElementById("slect_img2")
        right2.style.display="none"

        let right3=document.getElementById("slect_img3")
        right3.style.display="none" 

        let right4=document.getElementById("slect_img4")
        right4.style.display="none" 

        let right5=document.getElementById("slect_img5")
        right5.style.display="none" 

        let right6=document.getElementById("slect_img6")
        right6.style.display="none" 

        let right7=document.getElementById("slect_img7")
        right7.style.display="none" 

        let right8=document.getElementById("slect_img8")
        right8.style.display="none" 

        let right9=document.getElementById("slect_img9")
        right9.style.display="none" 

        let right10=document.getElementById("slect_img10")
        right10.style.display="none"  

        let right11=document.getElementById("slect_img11")
        right11.style.display="none" 

        let right12=document.getElementById("slect_img12")
        right12.style.display="block" 

        let right13=document.getElementById("slect_img13")
        right13.style.display="none" 
        
        let right14=document.getElementById("slect_img14")
        right14.style.display="none" 


        
     let education=document.getElementById("inner_nav_check")
       if (education.checked !==true)
       {
        document.getElementById("inner_nav_check").checked=true
       
       }

       let endbtn=document.getElementById("endbtn")
       endbtn.style.display="block";

       let prvbtn=document.getElementById("prvbtn")
       prvbtn.style.display="block"

       let text12=document.getElementById("p12").innerHTML
       let obj={
        name:text12
       }
       localStorage.setItem("education_data",JSON.stringify(obj))
    
   }

   let edu_div13=document.getElementById("edu_div13").addEventListener("click",edu_fun13)

   function edu_fun13(){
    
    let personel_name=document.getElementById("inner_nav_text")
        personel_name.innerText=document.getElementById("p13").innerHTML
        personel_name.style.marginLeft="515px"
        personel_name.style.fontWeight="bold"
        personel_name.style.fontSize="20px"
        personel_name.style.color="red"
    let first13=document.getElementById("edu_div13")
       first13.style.backgroundColor="rgb(230,253,255)"

       let first1=document.getElementById("edu_div1")
       first1.style.backgroundColor="white"

       let first2=document.getElementById("edu_div2")
       first2.style.backgroundColor="white"

       let first3=document.getElementById("edu_div3")
       first3.style.backgroundColor="white"

       let first4=document.getElementById("edu_div4")
       first4.style.backgroundColor="white"

       let first5=document.getElementById("edu_div5")
       first5.style.backgroundColor="white"

       let first6=document.getElementById("edu_div6")
       first6.style.backgroundColor="white"

       let first7=document.getElementById("edu_div7")
       first7.style.backgroundColor="white"

       let first8=document.getElementById("edu_div8")
       first8.style.backgroundColor="white"

       let first9=document.getElementById("edu_div9")
       first9.style.backgroundColor="white"

       let first10=document.getElementById("edu_div10")
       first10.style.backgroundColor="white"

       let first11=document.getElementById("edu_div11")
       first11.style.backgroundColor="white"

       let first12=document.getElementById("edu_div12")
       first12.style.backgroundColor="white"

       let first14=document.getElementById("edu_div14")
       first14.style.backgroundColor="white"



       

       let right1=document.getElementById("slect_img1")
        right1.style.display="none" 

        let right2=document.getElementById("slect_img2")
        right2.style.display="none"

        let right3=document.getElementById("slect_img3")
        right3.style.display="none" 

        let right4=document.getElementById("slect_img4")
        right4.style.display="none" 

        let right5=document.getElementById("slect_img5")
        right5.style.display="none" 

        let right6=document.getElementById("slect_img6")
        right6.style.display="none" 

        let right7=document.getElementById("slect_img7")
        right7.style.display="none" 

        let right8=document.getElementById("slect_img8")
        right8.style.display="none" 

        let right9=document.getElementById("slect_img9")
        right9.style.display="none" 

        let right10=document.getElementById("slect_img10")
        right10.style.display="none"  

        let right11=document.getElementById("slect_img11")
        right11.style.display="none" 

        let right12=document.getElementById("slect_img12")
        right12.style.display="none" 

        let right13=document.getElementById("slect_img13")
        right13.style.display="block" 
        
        let right14=document.getElementById("slect_img14")
        right14.style.display="none" 

        
     let education=document.getElementById("inner_nav_check")
       if (education.checked !==true)
       {
        document.getElementById("inner_nav_check").checked=true
       
       }

       let endbtn=document.getElementById("endbtn")
       endbtn.style.display="block";

       let prvbtn=document.getElementById("prvbtn")
       prvbtn.style.display="block"

       let text13=document.getElementById("p2").innerHTML
       let obj={
        name:text13
       }
       localStorage.setItem("education_data",JSON.stringify(obj))
    
    
   }

   let edu_div14=document.getElementById("edu_div14").addEventListener("click",edu_fun14)

   function edu_fun14(){

    let personel_name=document.getElementById("inner_nav_text")
        personel_name.innerText=document.getElementById("p14").innerHTML
        personel_name.style.marginLeft="515px"
        personel_name.style.fontWeight="bold"
        personel_name.style.fontSize="20px"
        personel_name.style.color="red"

    let first14=document.getElementById("edu_div14")
       first14.style.backgroundColor="rgb(230,253,255)"

       let first1=document.getElementById("edu_div1")
       first1.style.backgroundColor="white"

       let first2=document.getElementById("edu_div2")
       first2.style.backgroundColor="white"

       let first3=document.getElementById("edu_div3")
       first3.style.backgroundColor="white"

       let first4=document.getElementById("edu_div4")
       first4.style.backgroundColor="white"

       let first5=document.getElementById("edu_div5")
       first5.style.backgroundColor="white"

       let first6=document.getElementById("edu_div6")
       first6.style.backgroundColor="white"

       let first7=document.getElementById("edu_div7")
       first7.style.backgroundColor="white"

       let first8=document.getElementById("edu_div8")
       first8.style.backgroundColor="white"

       let first9=document.getElementById("edu_div9")
       first9.style.backgroundColor="white"

       let first10=document.getElementById("edu_div10")
       first10.style.backgroundColor="white"

       let first11=document.getElementById("edu_div11")
       first11.style.backgroundColor="white"

       let first12=document.getElementById("edu_div12")
       first12.style.backgroundColor="white"

       let first13=document.getElementById("edu_div13")
       first13.style.backgroundColor="white"


       

       let right1=document.getElementById("slect_img1")
        right1.style.display="none" 

        let right2=document.getElementById("slect_img2")
        right2.style.display="none"

        let right3=document.getElementById("slect_img3")
        right3.style.display="none" 

        let right4=document.getElementById("slect_img4")
        right4.style.display="none" 

        let right5=document.getElementById("slect_img5")
        right5.style.display="none" 

        let right6=document.getElementById("slect_img6")
        right6.style.display="none" 

        let right7=document.getElementById("slect_img7")
        right7.style.display="none" 

        let right8=document.getElementById("slect_img8")
        right8.style.display="none" 

        let right9=document.getElementById("slect_img9")
        right9.style.display="none" 

        let right10=document.getElementById("slect_img10")
        right10.style.display="none"  

        let right11=document.getElementById("slect_img11")
        right11.style.display="none" 

        let right12=document.getElementById("slect_img12")
        right12.style.display="none" 

        let right13=document.getElementById("slect_img13")
        right13.style.display="none" 
        
        let right14=document.getElementById("slect_img14")
        right14.style.display="block" 


     let education=document.getElementById("inner_nav_check")
       if (education.checked !==true)
       {
        document.getElementById("inner_nav_check").checked=true
       
       }

       let endbtn=document.getElementById("endbtn")
       endbtn.style.display="block";

       let prvbtn=document.getElementById("prvbtn")
       prvbtn.style.display="block"

       let text14=document.getElementById("p14").innerHTML
       let obj={
        name:text14
       }
       localStorage.setItem("education_data",JSON.stringify(obj))

    
   }


   function endbtn(){
   window.location.href="login.html"
   }

   function prvbtn(){
   window.location.href="identy.html"
   }