let illnesses = [
    {
        imgSrc: "vector4",
        name:'Neurology'
    },
    {
        imgSrc: "vector4",
        name:'Bones',
        color:'purple-color',
        white:'text-light'
    },
    {
        imgSrc: "vector4",
        name:'Oncology'
    },
    {
        imgSrc: "vector4",
        name:'Otorhinolaryngology'
    },
    {
        imgSrc: "vector4",
        name:'Ophthalmology'
    },
    {
        imgSrc: "vector4",
        name:'Cardiovascular'
    },
    {
        imgSrc: "vector4",
        name:'Pulmonology'
    },
    {
        imgSrc: "vector4",
        name:'Renal Medicine'
    },
    {
        imgSrc: "vector4",
        name:'Gastroenterology'
    },
    {
        imgSrc: "vector4",
        name:'Urology'
    },
    {
        imgSrc: "vector4",
        name:'Dermatology'
    },
    {
        imgSrc: "vector4",
        name:'Gynaecology'
    }
]

// for the illnesses grid.

let grid = document.getElementById("sick-grid");
let html ="";
illnesses.forEach( e=>{
    html += `
        <div class="card h-100 col-12 col-sm-6 col-lg-3 ${e.color}">
            <ul class="list-group list-group-flush">
                <li class="list-group-item py-5 ${e.color}">
                    <img src="images/icons/${e.imgSrc}.png" alt="icon">
                    <p class="${e.white}">${e.name}</p>
                </li>
            </ul>
        </div>
    `

    grid.innerHTML = html;
})

// for the news section

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

let infoGrid = document.getElementById("news-grid");
let html1 ="";
news.forEach( e=> {
    html1 += `
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
    infoGrid.innerHTML = html1;
})

let infoGrid1 = document.getElementById("news-grid1");
let html2 ="";
news.forEach( e=> {
    html2 += `
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
    infoGrid1.innerHTML = html2;
})

let infoGrid2 = document.getElementById("news-grid2");
let html3 ="";
news.forEach( e=> {
    html3 += `
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
    infoGrid2.innerHTML = html3;
})

//getintouch section

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

let GetInTouch = document.getElementById("git")
let html4 ="";
getInTouchArray.forEach( e=> {
    html4 += `
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
    GetInTouch.innerHTML = html4;
})

