// import { navbar } from "../components/lab.js";

let nav = document.getElementById("navbar");

// nav.innerHTML = navbar();
// let API = "d9d7edd3af2441ee96c35fd33a06b1e5";
// let API = "0c5a1082633244ce98b67785cc0c9daf";
let API = "83e8a12689114d099bf8098dcd203273";
search();

async function search() {
  try {
    let response = await fetch(
      `https://newsapi.org/v2/top-headlines?country=in&apiKey=${API}`
    );

    let data = await response.json();
    console.log(data.articles);

    display(data.articles);
  } catch (err) {
    console.log(err);
  }
}

let main = document.getElementById("main");

function display(arr) {
  main.innerHTML = null;
  arr.forEach(function (elem) {
    let card = document.createElement("div");
    card.setAttribute("class", "news");
    // card.addEventListener('click',function()
    // {
    //     cardfunction(elem)
    // })

    let image = document.createElement("img");
    image.src = elem.urlToImage;

    let title = document.createElement("h3");
    title.innerText = elem.title;

    let publish = document.createElement("p");
    publish.innerText = `Published on ${elem.publishedAt}`;

    let content = document.createElement("p");
    content.innerText = elem.description;

    card.append(title, image, publish, content);

    main.append(card);
  });
}

//  function cardfunction(elem)
//  {
//     localStorage.setItem("news",JSON.stringify(elem))
//    // window.location.href="news.html"
//  }

let opt = document.getElementById("options").children;

for (var elem of opt) {
  elem.addEventListener("click", OptionFn);
}

function OptionFn() {
  searchnews(this.id);
  let caps = this.id.toUpperCase();

  // let key = document.querySelector(`#options>#${this.id}`);

  // key.style.color = "#00b1cd";

  if (caps == "HOME") {
    caps = "TOP";
  }
  document.querySelector("#middle>h2>div").innerHTML = `${caps} NEWS`;
}
// bivek part
let hide = document.querySelectorAll(".hidden");
let show = document.getElementById("searchBar");

hide[1].onclick = () => {
  hide[0].style.display = "none";
  hide[1].style.display = "none";
  show.style.display = "block";
  show.style.marginBottom = "-5px";
};
show.onkeydown = () => {
  if (event.key === "Enter") {
    console.log(show.value);
    // fetch call
    searchnews(show.value);
    let query = show.value.toUpperCase();
    document.querySelector("#middle>h2>div").innerHTML = `${query} NEWS`;
    show.value = "";
    hide[0].style.display = "block";
    hide[1].style.display = "block";
    show.style.display = "none";
  }
};
async function searchnews(id) {
  try {
    console.log(id);
    let response = await fetch(
      `https://newsapi.org/v2/everything?q=${id}&from=2022-09-01&sortBy=popularity&apiKey=${API}`
    );

    let data = await response.json();
    // console.log(data.articles)

    display(data.articles);
  } catch (err) {
    console.log(err);
  }
}

//-----------------------------------------------------------------------------------------------------

let left = document.getElementById("leftside");

searchnewsleft();

async function searchnewsleft() {
  try {
    let response = await fetch(
      `https://newsapi.org/v2/everything?q=latest&from=2022-09-01&sortBy=popularity&apiKey=${API}`
    );

    let data = await response.json();
    // console.log(data.articles)

    displayleft(data.articles);
  } catch (err) {
    console.log(err);
  }
}

function displayleft(arr1) {
  left.innerHTML = null;
  arr1.forEach(function (elem) {
    let card = document.createElement("div");
    card.setAttribute("class", "news");
    // card.addEventListener('click',function()
    // {
    //     cardfunction(elem)
    // })
    // let h3=document.createElement("h3");
    // h3.innerText="INDIA";

    let title = document.createElement("h4");
    title.innerText = elem.title;

    let publish = document.createElement("p");
    publish.innerText = `Published on ${elem.publishedAt}`;

    card.append(title, publish);

    left.append(card);
  });
}

//------------------------------------------------------------------------------------------------------------------

let right = document.getElementById("rightside");

searchnewsright();

async function searchnewsright() {
  try {
    let response = await fetch(
      `https://newsapi.org/v2/everything?q=top&from=2022-09-01&sortBy=popularity&apiKey=${API}`
    );

    let data = await response.json();
    //console.log(data.articles)

    displayright(data.articles);
  } catch (err) {
    console.log(err);
  }
}

function displayright(arr2) {
  right.innerHTML = null;
  arr2.forEach(function (elem) {
    let card = document.createElement("div");
    card.setAttribute("class", "news");
    // card.addEventListener('click',function()
    // {
    //     cardfunction(elem)
    // })

    let image = document.createElement("img");
    image.src = elem.urlToImage;

    let publish = document.createElement("p");
    publish.innerText = `Published on ${elem.publishedAt}`;

    card.append(image, publish);

    right.append(card);
  });
}

//-----------------------------------------------------------------------------------------------------------------

// UCm7lHFkt2yB_WzL67aruVBQ
// let api_key = "AIzaSyC9zC6_-FNcRDzqwg-peisdsLXO8hQHuJA";
const api_key = "AIzaSyCQv3shWsyxkPhUUaGcsgU--ETmG6wc5Mg";

async function data() {
  try {
    let url = `https://youtube.googleapis.com/youtube/v3/search?part=snippet&channelId=UCm7lHFkt2yB_WzL67aruVBQ&maxResults=32&regionCode=IN&key=${api_key}`;

    let response = await fetch(url);

    let data = await response.json();
    // data.articles.forEach(function(elem)
    // {
    //     console.log(elem.source)
    // })

    // console.log(data);
    Append(data.items);
  } catch (err) {
    console.log(err);
  }
}

data();

let Append = (data) => {
  let container = document.getElementById("video");

  // console.log(data)
  container.innerHTML = null;
  data.forEach(
    ({
      id: { videoId },
      snippet: {
        title,
        thumbnails: {
          default: { url },
        },
      },
    }) => {
      // console.log(videoId);
      // console.log(title);
      let video = {
        videoId,
        title,
      };

      let div = document.createElement("div");

      // div.onclick=()=>{

      //     console.log("someone clicked")
      //     playVideo(video)

      //     }

      let iframe = document.createElement("iframe");
      iframe.src = `https://www.youtube.com/embed/${videoId}?thumbnails=${url}`;
      iframe.allow = "fullscreen";
      //iframe.allow="autoplay"

      let h3 = document.createElement("p");
      h3.innerText = title;

      div.append(iframe, h3);

      container.append(div);
    }
  );
};
// left sidebar click search functionality

let categories = document.querySelector(".second ul").children;
console.log(categories);
for (let ele of categories) {
  ele.addEventListener("click", searchby);
}
function searchby() {
  searchnews(this.innerText);
  let query = this.innerText.toUpperCase();
  document.querySelector("#middle>h2>div").innerHTML = `${query} NEWS`;
}
let innercategories = document.querySelector(".second ul li > ul").children;
console.log(innercategories);
for (let ele of innercategories) {
  ele.addEventListener("click", () => {
    console.log(ele.innerText);
    searchnews(this.innerText);
    let query = ele.innerText.toUpperCase();
    document.querySelector("#middle>h2>div").innerHTML = `${query} NEWS`;
  });
}
