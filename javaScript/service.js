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


let GetInTouchNews = document.getElementById("git")
let html10 ="";
getInTouchArray.forEach( e=> {
    html10 += `
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
    GetInTouchNews.innerHTML = html10;
})