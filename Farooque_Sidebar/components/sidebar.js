let sidebar = (container) => {
  container.innerHTML = `<div class="first">
    <img
      class="logo"
      src="https://www.freelogovectors.net/wp-content/uploads/2021/12/hindustan-times-logo-freelogovectors.net_.png"
      alt=""
    />
    <div class="location-date">
      <p>
        New Delhi <span id=temprature>38</span><sup>o</sup>C
        <img
          class="weather-img"
          src="https://www.hindustantimes.com/res/images/weather-icon1.svg"
          alt=""
        />
      </p>

      <p class="date">${changeDate()}</p>
    </div>
    <i class="fa-solid fa-xmark close"></i>
  </div>
  <!-- all categories -->
  <div class="second">
    <ul>
      <li>Home</li>
      <li>India News</li>
      <li>
        Entertainment
        <i class="fa-solid fa-angle-down"></i>
        <ul>
          <li>Bollywood</li>
          <li>TV</li>
          <li>Web Series</li>
          <li>Music</li>
          <li>Hollywood</li>
          <li>Telegu Cinema</li>
          <li>Tamil Cinema</li>
        </ul>
      </li>
      <li>
        Cricket
        <i class="fa-solid fa-angle-down"></i>
        <ul>
          <li>India vs South Africa</li>
          <li>IPL 2022</li>
          <li>T20 WC</li>
        </ul>
      </li>
      <li>
        Cities
        <i class="fa-solid fa-angle-down"></i>
        <ul>
          <li>Delhi</li>
          <li>Mumbai</li>
          <li>Bengaluru</li>
          <li>Gurugram</li>
          <li>Noida</li>
          <li>Hyderabad</li>
          <li>Chennai</li>
        </ul>
      </li>
      <li>HT Shop</li>
      <li>World News</li>
      <li>
        Lifestyle
        <i class="fa-solid fa-angle-down"></i>
        <ul>
          <li>Fashion</li>
          <li>Health</li>
          <li>Relationships</li>
        </ul>
      </li>
      <li>Trending</li>
      <li>
        Education
        <i class="fa-solid fa-angle-down"></i>
        <ul>
          <li>Exam Results</li>
          <li>Competetive Results</li>
          <li>Board Exams</li>
          <li>Addmission News</li>
          <li>Employment News</li>
        </ul>
      </li>
      <li>
        Astrology
        <i class="fa-solid fa-angle-down"></i>
        <ul>
          <li>Horoscope</li>
          <li>Festive Calender 2022</li>
          <li>Compatibility Calculator</li>
        </ul>
      </li>
      <li>
        Elections
        <i class="fa-solid fa-angle-down"></i>
        <ul>
          <li>Uttar Pradesh</li>
          <li>Punjab</li>
          <li>Uttarakhand</li>
          <li>Goa</li>
          <li>Manipur</li>
        </ul>
      </li>
      <li>Opinion</li>
      <li>Analysis</li>
      <li>
        Videos
        <i class="fa-solid fa-angle-down"></i>
        <ul>
          <li>Explainer Videos</li>
          <li>On The Record</li>
          <li>HT Weekend</li>
          <li>Aur Batao</li>
        </ul>
      </li>
      <li>
        Photos
        <i class="fa-solid fa-angle-down"></i>
        <ul>
          <li>Entertainment Photos</li>
          <li>Lifestyle Photos</li>
          <li>News Photos</li>
        </ul>
      </li>
      <li>
        Sports
        <i class="fa-solid fa-angle-down"></i>
        <ul>
          <li>Tennis News</li>
          <li>Hockey</li>
          <li>Football</li>
        </ul>
      </li>
      <li>Web Stories</li>
      <li>Bussiness</li>
      <li>Science</li>
    </ul>
  </div>
  <div class="third">
    <div>
      <p>My Account</p>
      <h3>Saved Articles</h3>
    </div>
    <div>
      <h3>Sign out</h3>
      <div class="social-handles">
        <img
          src="https://cdn2.iconfinder.com/data/icons/social-media-2285/512/1_Facebook_colored_svg_copy-128.png"
          alt=""
        />
        <img
          src="https://cdn2.iconfinder.com/data/icons/social-media-2285/512/1_Twitter_colored_svg-128.png"
          alt=""
        />
        <img
          src="https://cdn2.iconfinder.com/data/icons/social-media-2285/512/1_Linkedin_unofficial_colored_svg-128.png"
          alt=""
        />
      </div>
    </div>
  </div>`;
};
let changeDate = (container) => {
  const weeks = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thrusday",
    "Friday",
    "Saturday",
  ];
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  let d1 = new Date();
  let week = weeks[d1.getDay()];
  let month = months[d1.getMonth()];
  let date = d1.getDate();
  let year = d1.getFullYear();
  return `${week}, ${month} ${date}, ${year}`;
};
// let user = JSON.parse(localStorage.getItem("user")); //USER INFORMATION FROM LS
let rightSidebar = (container) => {
  let user = JSON.parse(localStorage.getItem("user")) || [];
  container.innerHTML = `<div class="top-head">
  <i class="fa-solid fa-xmark rightSidebarclose"></i>
  <img
    id="user-image"
    src="${user.image}"
    alt=""
  />
  <p id="user-name">${user.name}</p>
  <p id="user-email">${user.email}</p>

  <button id="editProfile">Edit Profile</button>
</div>
<div class="rightSidebar-body">
  <div>
    <p>Start 15 Days Free Trial</p>
    <p>Subscribe Now</p>
  </div>
  <div>Saved Articles</div>
  <div>Following</div>
  <div>My Reads</div>
  <div id="signout">Sign out</div>
</div>`;
};

export { sidebar, rightSidebar };
