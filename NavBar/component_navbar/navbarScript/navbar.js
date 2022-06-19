import { navbar, getWeather } from "../importNavbar/navbarImport.js";
document.getElementById("navbar").innerHTML = navbar();

// Date,week,month & year append section;
let month = new Date().toLocaleString("en-us", { month: "long" });
let week = new Date().toLocaleString("en-us", { weekday: "long" });
let date = new Date().getDate();
let year = new Date().getFullYear();

document.querySelector(
  "#date"
).innerText = `${week}, ${month} ${date}, ${year}`;

// Weather update append section;
let weather = `https://api.openweathermap.org/data/2.5/weather?q=Delhi&appid=be86a946d56443ab147f0897abfa7dd7`;

getWeather(weather).then((data) => {
  document.getElementById("tem").innerText = Math.round(
    data.main.temp - 273.15
  );
});

//Explore Section
document.querySelectorAll(".topBar")[0].onclick = () => {
  // Explore import here;
};

// searchBar  display section
let hide = document.querySelectorAll(".hidden");
let show = document.getElementById("searchBar");

hide[1].onclick = () => {
  hide[0].style.display = "none";
  hide[1].style.display = "none";
  show.style.display = "block";
  show.style.marginBottom = "-5px";
};

// SearchBar function to search the given value;

show.onkeydown = () => {
  if (event.key === "Enter") {
    console.log(show.value);
    // fetch call

    show.value = "";
    hide[0].style.display = "block";
    hide[1].style.display = "block";
    show.style.display = "none";
  }
};

// My Account section and SignIn section;
let divContent = document.querySelector(".just");
let accS = document.querySelectorAll(".accS");

accS[1].onclick = () => {
  // SignIn page link
  window.location.href = "";
};

let accH = document.querySelectorAll(".accH");
let SignIn = JSON.parse(localStorage.getItem("data")) || [];

// this place is to write the logic to check if the use is sign-in;
// if the user is present display My Accout else display sign-in

// let SignIn = false;
// let SignIn = true;
let id = localStorage.getItem("id");
let check = false;
SignIn.forEach((ele) => {
  if (ele.id === id) {
    if (ele.signIn) check = true;
  }
});
if (check) {
  accH[0].style.display = "block";
  accH[1].style.display = "block";
  accH[2].style.display = "block";
  accS[0].style.display = "none";
  accS[1].style.display = "none";
  divContent.style.width = "auto";
  divContent.onmouseover = () => (divContent.style.color = "#00b1cd");
  divContent.onmouseout = () => (divContent.style.color = "white");
  divContent.onclick = () => {
    // My Account import here;
  };
} else {
  divContent.onclick = () => {
    // My Account import here;
    window.location.href = "../loginSignup/sigin.html";
  };
}

// Subscribe page href link;
document.getElementById("Subscribe").onclick = () => {
  // Subscribition page link here;
  window.location.href = "../../subscribe_page/sub.html";
};

let link = document.querySelectorAll("#options a");
// console.log("Bivek", link[0].innerHTML);

let i = 0;
for (i in link) {
  let btn = link[i];
  btn.onclick = () => {
    link.forEach((el) => {
      // console.log("Hello", el);
      el.classList = "apu";
    });
    btn.classList = "Bivek";
  };
  if (i === 12) break;
}
