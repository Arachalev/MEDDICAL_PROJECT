let getInTouchArray = [
    {
        imgUrl : "Group 188",
        head : "EMERGENCY",
        para1: "(234) 575-746-463",
        para2: "(234) 746-722-573",
        blue:"appointment-btn2"
    },
    {
        imgUrl : "Group 179",
        head : "LOCATION",
        para1: "9475 Some place",
        para2: "2452 Some country",
        white:'text-light',
        color: "purple-color",
    },
    {
        imgUrl : "Group 202",
        head : "EMAIL",
        para1: "Teamrio@rio.com",
        para2: "wedidit@rio.com",
        blue:"appointment-btn2"
    },
    {
        imgUrl : "Group 177",
        head : "WORKING HOURS",
        para1: "Mon-Sat 09:00-20:00",
        para2: "Sunday Emergency only",
        blue:"appointment-btn2"
    }
]


let GetInTouchNews = document.getElementById("about-news")
let html6 ="";
getInTouchArray.forEach( e=> {
    html6 += `
        <div class="card col-12 col-sm-6 col-lg-3 text-left light-color border-0">
                <li class="list-group-item mb-3 ${e.color} ${e.blue}">
                    <img src="images/icons/${e.imgUrl}.png" alt="icon" class="mb-2" style="height:1.5rem">
                    <h6 class="color ${e.white}">${e.head}</h6>
                    <P class="color ${e.white}">${e.para1}</P>
                    <P class="color ${e.white}">${e.para2}</P>
                </li>
            </ul>
        </div>
    `
    GetInTouchNews.innerHTML = html6;
})

let news = [
    {
        img:"",
        date:"Monday 05, September 2021 | By Author",
        text:"This Article's Title goes Here, but not too long.",
        eye:"",
        love:"",
    },
    {
        img:"",
        date:"Monday 05, September 2021 | By Author",
        text:"This Article's Title goes Here, but not too long.",
        eye:"",
        love:"",
    },
    {
        img:"",
        date:"Monday 05, September 2021 | By Author",
        text:"This Article's Title goes Here, but not too long.",
        eye:"",
        love:"",
    },
    {
        img:"",
        date:"Monday 05, September 2021 | By Author",
        text:"This Article's Title goes Here, but not too long.",
        eye:"",
        love:"",
    },
]

// for the news carousel

let infoGrid3 = document.getElementById("about-news-grid");
let html7 ="";
news.forEach( e=> {
    html7 += `
        <div class="col-md-6 mb-3">
            <button type="button" class="btn py-0 btn-lg d-flex align-items-center border border-light">
                <img src="images/Rectangle 34.png" style="height:120px"><span class="badge">
                    <div class="contain text-left">
                        <small class="light-color">Monday 05, September 2021 | By Author</small>
                        <p class="mt-2">This Article's Title goes Here,<br> but not too long.</p>
                        <p><img src="images/icons/Group 198.png" alt="eye"> 68 <img src="images/icons/vector12.png" alt="eye"> 86 </p>
                    </div>
                </span>
            </button>
        </div>
    `
    infoGrid3.innerHTML = html7;
})

let infoGrid4 = document.getElementById("about-news-grid1");
let html8 ="";
news.forEach( e=> {
    html8 += `
        <div class="col-md-6 mb-3">
            <button type="button" class="btn py-0 btn-lg d-flex align-items-center border border-light">
                <img src="images/Rectangle 34.png" style="height:120px"><span class="badge">
                    <div class="contain text-left">
                        <small class="light-color">Monday 05, September 2021 | By Author</small>
                        <p class="mt-2">This Article's Title goes Here,<br> but not too long.</p>
                        <p><img src="images/icons/Group 198.png" alt="eye"> 68 <img src="images/icons/vector12.png" alt="eye"> 86 </p>
                    </div>
                </span>
            </button>
        </div>
    `
    infoGrid4.innerHTML = html8;
})

let infoGrid5 = document.getElementById("about-news-grid2");
let html9 ="";
news.forEach( e=> {
    html9 += `
        <div class="col-md-6 mb-3">
            <button type="button" class="btn py-0 btn-lg d-flex align-items-center border border-light">
                <img src="images/Rectangle 34.png" style="height:120px"><span class="badge">
                    <div class="contain text-left">
                        <small class="light-color">Monday 05, September 2021 | By Author</small>
                        <p class="mt-2">This Article's Title goes Here,<br> but not too long.</p>
                        <p><img src="images/icons/Group 198.png" alt="eye"> 68 <img src="images/icons/vector12.png" alt="eye"> 86 </p>
                    </div>
                </span>
            </button>
        </div>
    `
    infoGrid5.innerHTML = html9;
})