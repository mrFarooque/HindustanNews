import { sidebar, rightSidebar } from "../components/sidebar.js";
import { getWeather } from "../../NavBar/component_navbar/importNavbar/navbarImport.js";
console.log("hello from farooque");
// var user =JSON.parse(localStorage.getItem("user"))
// let user = {
//   name: "",
//   email: "",
//   image: "",
// };
// localStorage.setItem("user", JSON.stringify(user));

// append sidebar
sidebar(document.querySelector(".sidebar"));
//SIDEBAR FUNCTIONALITY
let explore = document.querySelector(".explore"); //button that needs to explored for sidebar
let close = document.querySelector(".close"); //button to close the sidebar
explore.addEventListener("click", () => {
  document.querySelector(".sidebar").classList.toggle("sidebarGo");
});
close.addEventListener("click", () => {
  document.querySelector(".sidebar").classList.toggle("sidebarGo");
});
//get data from LS and implement DOM
// N.B its important to stroe user in LS first and then append rightsidebar
rightSidebarAppend();
function rightSidebarAppend() {
  console.log("hello world");
  //append rightSidebar
  rightSidebar(document.querySelector(".rightSidebar"));
  //Right SIDEBAR FUNCTIONALITY
  let explore = document.querySelector(".rightSidebarexplore"); //button that needs to explored for sidebar
  let close = document.querySelector(".rightSidebarclose"); //button to close the sidebar
  explore.addEventListener("click", () => {
    document.querySelector(".rightSidebar").classList.toggle("rightSidebarGo");
  });
  close.addEventListener("click", () => {
    document.querySelector(".rightSidebar").classList.toggle("rightSidebarGo");
  });
}
// edit profile
let editProfile = () => {
  console.log("eidt profile");
  window.location.href = "./Farooque_Sidebar/editProfile.html";
};
document.getElementById("editProfile").addEventListener("click", editProfile);
//sign out
let data = JSON.parse(localStorage.getItem("data"));
function signout() {
  data.forEach((el) => {
    if (el.id === id) {
      el.signIn = false;
      localStorage.setItem("data", JSON.stringify(data));
    }
  });
  window.location.reload();
}
document.getElementById("signout").onclick = () => {
  signout();
};
// Weather update append section;
let weather = `https://api.openweathermap.org/data/2.5/weather?q=Delhi&appid=be86a946d56443ab147f0897abfa7dd7`;

getWeather(weather).then((data) => {
  document.getElementById("temprature").innerText = Math.round(
    data.main.temp - 273.15
  );
});
var id;
document.getElementById("signedin").addEventListener("click", () => {
  console.log("hello world");
  let user;
  let display = document.getElementById("signedin").style.display;
  let newDetails = JSON.parse(localStorage.getItem("newDetails"));
  id = localStorage.getItem("id");
  if (display == "block") {
    let name = id.split("@")[0];
    if (newDetails == null) newDetails = [];
    if (name !== newDetails.name) {
      console.log("if");
      if (newDetails.name == undefined) newDetails.name = name;
      name = newDetails.name;
      user = {
        name: name,
        email: id,
        image:
          "https://t4.ftcdn.net/jpg/00/65/77/27/360_F_65772719_A1UV5kLi5nCEWI0BNLLiFaBPEkUbv5Fv.jpg",
      };
    } else {
      console.log("else");
      user = {
        name: name,
        email: id,
        image:
          "https://t4.ftcdn.net/jpg/00/65/77/27/360_F_65772719_A1UV5kLi5nCEWI0BNLLiFaBPEkUbv5Fv.jpg",
      };
    }

    localStorage.setItem("user", JSON.stringify(user));
    rightSidebar(document.querySelector(".rightSidebar"));
    rightSidebarAppend();
    document
      .getElementById("editProfile")
      .addEventListener("click", editProfile);
  }
  document.getElementById("signout").onclick = () => {
    signout();
  };
});
