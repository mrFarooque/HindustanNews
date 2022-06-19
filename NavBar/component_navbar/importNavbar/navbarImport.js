const navbar = () => {
  return `<div id="upper">
      <div id="content">
        <div>
          <div id="leftBarTop">
            <div class="topBar">
              <i class="fi fi-br-menu-burger explore"></i>
              <strong>Explore</strong>
            </div>
            <div class="topBar hide">
              <i class="fi fi-br-search hidden"></i>
              <strong class="hidden">Search</strong>
              <input
                type="text"
                id="searchBar"
                placeholder="Search"
                onkeydown="find(this)"
              />
            </div>
          </div>
          <div id="leftBarBottom">
            <div id="date"></div>
            <p></p>
            <div id="weather">
              New Delhi <span id="tem"></span><sup>o</sup>C
              <img
                src="https://www.hindustantimes.com/res/images/weather-icon1.svg"
                alt="icon"
              />
            </div>
          </div>
        </div>
        <div id="center">
          <img
            src="https://www.hindustantimes.com/res/images/ht-logo.svg"
            alt="Hindustan Times"
          />
        </div>
        <div id="rightSide">
          <div>
            <div class="topBar">
              <i class="fi fi-br-gamepad"></i><strong> Games</strong>
            </div>
            <div class="topBar">
              <i class="fi fi-br-indent"></i>
              <strong> E-Paper</strong>
            </div>
            <div class="topBar just ">
              <i class="fi fi-br-user-add accS"></i>
              <strong class="accS"> Sign in</strong>
              <i class="fi fi-br-user accH"></i>
              <strong id="signedin" class="accH rightSidebarexplore">My Account</strong>
              <i class="fi fi-br-angle-small-down accH"></i>
            </div>
          </div>
          <div>
            <button id="Subscribe">Subscribe</button>
            <div id="invisible">
              <div id="Enjoy">Enjoy unlimited access</div>
              <p>Subscribe Now! Get features like</p>
              <div class="subList">
                <div class="items">
                  <div class="icon">
                    <img
                      src="https://www.hindustantimes.com/static-content/1y/2021/ad-free-icon.svg"
                      alt="icon"
                    />
                  </div>
                  <div class="name">
                    <span>Ad lite</span>
                    A Minimal Ad Experience
                  </div>
                </div>
                <div class="items">
                  <div class="icon">
                    <img
                      src="https://www.hindustantimes.com/static-content/1y/2021/premium-icon-1.svg"
                      alt="icon"
                    />
                  </div>
                  <div class="name">
                    <span>HT Premium Articles</span>
                    Expertly crafted articles
                  </div>
                </div>
                <div class="items">
                  <div class="icon">
                    <img
                      src="https://www.hindustantimes.com/static-content/1y/2021/quick-read-icon-1.svg"
                      alt="icon"
                    />
                  </div>
                  <div class="name">
                    <span>Quickreads Segment</span>
                    News brief in summary format
                  </div>
                </div>
                <div class="items">
                  <div class="icon">
                    <img
                      src="https://www.hindustantimes.com/static-content/1y/2021/epaper-icon-1.svg"
                      alt=""
                    />
                  </div>
                  <div class="name">
                    <span>Ht E-paper</span>
                    Access digital news experience
                  </div>
                </div>
                <div id="premiumImg">
                  <img
                    src="https://www.hindustantimes.com/static-content/1y/2021/subc-pop-img.png"
                    alt="img"
                  />
                </div>
                <div id="freeTrail">
                  <a href="./subscribe_page/sub.html">Start 15 Days free Trail</a>
                </div>
              </div>
            </div>
            <div>Start 15 Days Free Trail</div>
          </div>
        </div>
      </div>
    </div>
    <div id="bottom">
      <div id="options">
        <a class="Bivek" id="home" href="./index.html">Home</a>
        <a class="apu" id="latest" href="#">Latest</a>
        <a class="apu" id="india" href="#">India</a>
        <a class="apu" id="world" href="#">World</a>
        <a class="apu" id="cities" href="#">Cities</a>
        <a class="apu" id="entertainment" href="#">Entertainment</a>
        <a class="apu" id="cricket" href="#">Cricket</a>
        <a class="apu" id="lifestyle" href="#">Lifestyle</a>
        <a class="apu" id="astrology" href="#">Astrology</a>
        <a class="apu" id="editorial" href="#">Editorials</a>
        <a class="apu" id="technology" href="#">For You<span class="hightlight">*</span></a>
        <a class="apu" href="#">Show Now<span class="hightlight">*</span></a>
      </div>
    </div>
`;
};

const getWeather = async (weather) => {
  try {
    let js = await fetch(weather);
    let data = await js.json();
    return data;
  } catch (err) {
    console.log(err);
  }
};
export { navbar, getWeather };
