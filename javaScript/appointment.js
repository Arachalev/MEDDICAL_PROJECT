// const searchIcon = document.getElementById("search--icon");
// const searchBar = document.getElementById("search--bar");

const searchIcon = document.querySelectorAll("#search--icon");
const searchBar = document.querySelectorAll("#search--bar");


searchIcon[1].addEventListener("click", function(){
    searchBar[1].style.display = "inline"
    searchIcon[1].style.display= "none";
    console.log("fuck u")
})


function searchBarOff(event) {
    if (searchBar[1].style.display == "inline") {
        console.log("hello");
        searchBar[1].style.display = "none"
        searchIcon[1].style.display ="inline"
    }

    if (searchBar[0].style.display == "inline") {
        console.log("hello");
        searchBar[0].style.display = "none"
        searchIcon[0].style.display ="inline"
    }
}


searchIcon[0].addEventListener("click", function(){
    searchBar[0].style.display = "inline"
    searchIcon[0].style.display= "none";
    console.log("fuck u")
})


