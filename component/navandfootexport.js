

let nav=()=>{
    return ` <div id="topDiv">
    <div class="topDivClass">
        <img class="topImg" src="https://static.vecteezy.com/system/resources/previews/002/323/476/original/isolated-of-phone-icon-mobile-phone-symbol-free-vector.jpg" alt="DownloadApp">
        <h3>Download App</h3>
    </div>
    <div class="topDivClass">
        <img class="topImg" src="https://image.shutterstock.com/image-vector/person-icon-isolated-human-line-260nw-771698839.jpg" alt="ForEmployers">
        <h3>For Employers</h3>
    </div>
    <div class="topDivClass">
        <img class="topImg" src="https://image.shutterstock.com/image-vector/phone-call-icon-vector-600w-1371165899.jpg" alt="Help">
        <h3>Help</h3>
    </div>
</div>
<div id="middleDiv">
    <div class="HalfDiv" id="HalfDiv1">
        <div id="shinelogo">
            <img src="https://www.shine.com/next/static/images/shine-logo.png" alt="Shine Logo">
        </div>
        <div id="inputDiv">
            <input type="text" placeholder="Job title, skills" >
            <button><i class="fas fa-search"></i></button>
        </div>
    </div>
    <div class="HalfDiv">
        <div id="otherHalf1"></div>
        <div id="otherHalf2">
            <div  id="dropdown11">
                <img src="https://static.thenounproject.com/png/1205419-200.png" alt="img1">
                <div id="dropdown-content11">
                    <h3>Notification</h3>
                    <div id="dc1">
                        <img src="https://thumbs.dreamstime.com/b/no-notification-outline-icon-linear-style-sign-mobile-concept-web-design-bell-simple-line-vector-symbol-logo-illustration-125061133.jpg" alt="notification icon" id="notiIcon">
                        <h4>No Notification</h4>
                        <p>We Will Notifiy You Once We Have</p>
                        <p>Something For You</p>
                    </div>
                </div>
            </div>
            <div  id="dropdown22">
            <img onclick="window.location.href='add.html'" src="https://cdn.iconscout.com/icon/premium/png-128-thumb/shopping-cart-3660737-3051467.png" alt="img2">
                
                <div id="dropdown-content22">
                    <p id="cartsection5">0</p>
                </div>
            </div>
            <div  id="dropdown33">
                <div id="username"></div>
                <img id="profilelogo" src="https://louisville.edu/enrollmentmanagement/images/person-icon/image" alt="img3">
                <div id="dropdown-content33">
                    <h1>Hello User!</h1>
                    <p>New To Shine?</p>
                    <button id="btn11" onclick="window.location.href='signup.html'">Register</button>
                    <button id="btn22" onclick="window.location.href='login.html'">Login</button>
                </div>
            </div>
        </div>
    </div>
</div>
<ul></ul>
<div id="bottomDiv">
    <div id="B1Half">
        <div class="dropdown00">
            <span onclick="window.location.href = 'index.html'">HOME</span>
        </div>
        <div class="dropdown00">
            <span>JOBS</span>
            <div class="dropdown-content00">
                <p>Search</p>
                <p>Job Alert</p>
            </div>
        </div>
        <div class="dropdown00">
            <span>JOBS SEEKING ASSISTANCE</span>
            <div class="dropdown-content00">
                <p onclick="window.location.href = 'profile_booster.html'">Profile Booster</p>
                <p>Application Highlighter</p>
                <p>Resume Writing</p>
                <p>View All</p>
            </div>
        </div>
        <div class="dropdown00">
            <span>COURSES</span>
            <div class="dropdown-content00">
                <p>Sales And Marketing</p>
                <p>Information And Technology</p>
                <p>Operation Management</p>
                <p>Human Resources</p>
                <p>View All</p>
            </div>
        </div>
        <div class="dropdown00">
            <span onclick="window.location.href = 'career_guidance.html'">CAREER GUIDANCE</span>
        </div>
        <div class="dropdown00">
            <span>BLOG</span>
        </div>
    </div>
    <div id="B2Half"></div>
</div>`
}

let footer=()=>{
    return `  <div id="firstDiv00">
    <div class="classDiv00">
        <div id="shineLogoFooter00">
            <img src="https://www.shine.com/next/static/images/shine-logo.png" alt="footerLogo">
            <h3>Great career starts here!</h3>
        </div>
        <div id="playStoreIconDiv00">
            <h2>Download Shine App</h2>
            <div id="playStoreIcon00">
                <img src="https://helios-i.mashable.com/imagery/articles/04EZglaVzAW19V6FIiDD3TA/images-1.fit_lim.size_376x.png"
                    alt="playStoreicon">
                <img src="https://w7.pngwing.com/pngs/468/690/png-transparent-apple-logo-iphone-5c-iphone-x-iphone-8-apple-ios-apple-mac-icon-miscellaneous-heart-logo.png"
                    alt="appleIcon">
            </div>
        </div>
    </div>
    <div class="classDiv00">
        <h3>JOB SEEKERS</h3>
        <p>Register / Login</p>
        <p>Browse Jobs</p>
        <p>Create Free Job Alert</p>
        <p>Job Assistance Services</p>
        <p>Courses</p>
    </div>
    <div class="classDiv00">
        <h3>EMPLOYERS</h3>
        <p>Recruiter India</p>
        <p>Post Job</p>
    </div>
    <div class="classDiv00">
        <h3>PARTNER SITES</h3>
        <p>English Mate</p>
        <p>Study Mate</p>
        <p>Hindustantimes.com</p>
        <p>Livemint.com</p>
        <p>Livehindustan.com</p>
        <p>OTTplay.com</p>
    </div>
    <div class="classDiv00">
        <h3>CONTACT US</h3>
        <p>080-1006 2222</p>
        <p>contactus@shine.com</p>
        <div id="footerIcon00">
            <img src="https://www.maryville.edu/wp-content/uploads/2015/11/Linkedin-logo-1-550x550-300x300.png"
                alt="linkedIn">
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4f/Twitter-logo.svg/2491px-Twitter-logo.svg.png"
                alt="twitter">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSotinxC0l75rgP-yWC82apthQLu5QZA5pMxPrPJrkLdLT7ukKtQ5DB-_gbwMiurDFORAw&usqp=CAU"
                alt="facebook">
        </div>
    </div>
    <div id="extraDiv00">
        <img src="https://myqrguide.com/frontend/images/chat.png" alt="msgLogo">
    </div>
</div>
<!-- first div end -->
<div id="secondDiv22">
    <div id="foo11">
        <a>Feedback |</a>
        <a>| FAQs |</a>
        <a>| About Us |</a>
        <a>| Contact Us |</a>
        <a>| Privacy Policy |</a>
        <a>| Cookie Policy |</a>
        <a>| Fraud Alert |</a>
        <a>| Business News |</a>
        <a>| English News |</a>
        <a>| Terms & Conditions |</a>
        <a>| Disclaimer |</a>
        <a>| Report a Job Posting </a>
    </div>
    <div id="foo22">
        <p>@ 2022 HT Media</p>
        <p>Limited</p>
    </div>
</div>`
}

export {nav,footer};