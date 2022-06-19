let pop1 = document.querySelector("#popup1");
let pop2 = document.querySelector("#popup2");
let pop3 = document.querySelector("#popup3");

function openpopup1() {
  pop1.classList.add("open-popup");
  // console.log("hiii")
}
function closepopup1() {
  pop1.classList.remove("open-popup");
}
function openpopup2() {
  pop2.classList.add("open-popup");
  // console.log("hiii")
}
function closepopup2() {
  pop2.classList.remove("open-popup");
}
function openpopup3() {
  pop3.classList.add("open-popup");
  // console.log("hiii")
}
function closepopup3() {
  pop3.classList.remove("open-popup");
}

var more = document.querySelector("#more");
var symbol = document.querySelector("#symbol");

function moreless() {
  if (more.style.display != "none") {
    more.style.display = "none";
    symbol.innerHTML = "﹀";
  } else {
    symbol.innerHTML = "︿";
    more.style.display = "block";
  }
}

function qnashow1() {
  let ans = document.querySelector(".ans1");
  let pm = document.querySelector(".pm1");
  let bpm = document.querySelector(".bpm1");

  if (pm.innerHTML != "+") {
    ans.style.display = "none";
    pm.innerHTML = "+";
    pm.style.color = "#41A3D2";

    bpm.style.backgroundColor = "white";
    pm.style.marginLeft = "1px";
    pm.style.marginTop = "-5px";
  } else {
    ans.style.display = "block";
    pm.innerHTML = "-";
    pm.style.color = "white";
    bpm.style.backgroundColor = "#41A3D2";
    pm.style.marginLeft = "4.5px";
    pm.style.marginTop = "-8px";
  }
}
function qnashow() {
  let ans = document.querySelector(".ans");
  let pm = document.querySelector(".pm");
  let bpm = document.querySelector(".bpm");

  if (pm.innerHTML != "+") {
    ans.style.display = "none";
    pm.innerHTML = "+";
    pm.style.color = "#41A3D2";

    bpm.style.backgroundColor = "white";
    pm.style.marginLeft = "1px";
    pm.style.marginTop = "-5px";
  } else {
    ans.style.display = "block";
    pm.innerHTML = "-";
    pm.style.color = "white";
    bpm.style.backgroundColor = "#41A3D2";
    pm.style.marginLeft = "4.5px";
    pm.style.marginTop = "-8px";
  }
}
function qnashow2() {
  let ans = document.querySelector(".ans2");
  let pm = document.querySelector(".pm2");
  let bpm = document.querySelector(".bpm2");

  if (pm.innerHTML != "+") {
    ans.style.display = "none";
    pm.innerHTML = "+";
    pm.style.color = "#41A3D2";

    bpm.style.backgroundColor = "white";
    pm.style.marginLeft = "1px";
    pm.style.marginTop = "-5px";
  } else {
    ans.style.display = "block";
    pm.innerHTML = "-";
    pm.style.color = "white";
    bpm.style.backgroundColor = "#41A3D2";
    pm.style.marginLeft = "4.5px";
    pm.style.marginTop = "-8px";
  }
}
function qnashow3() {
  let ans = document.querySelector(".ans3");
  let pm = document.querySelector(".pm3");
  let bpm = document.querySelector(".bpm3");

  if (pm.innerHTML != "+") {
    ans.style.display = "none";
    pm.innerHTML = "+";
    pm.style.color = "#41A3D2";

    bpm.style.backgroundColor = "white";
    pm.style.marginLeft = "1px";
    pm.style.marginTop = "-5px";
  } else {
    ans.style.display = "block";
    pm.innerHTML = "-";
    pm.style.color = "white";
    bpm.style.backgroundColor = "#41A3D2";
    pm.style.marginLeft = "4.5px";
    pm.style.marginTop = "-8px";
  }
}
function qnashow4() {
  let ans = document.querySelector(".ans4");
  let pm = document.querySelector(".pm4");
  let bpm = document.querySelector(".bpm4");

  if (pm.innerHTML != "+") {
    ans.style.display = "none";
    pm.innerHTML = "+";
    pm.style.color = "#41A3D2";

    bpm.style.backgroundColor = "white";
    pm.style.marginLeft = "1px";
    pm.style.marginTop = "-5px";
  } else {
    ans.style.display = "block";
    pm.innerHTML = "-";
    pm.style.color = "white";
    bpm.style.backgroundColor = "#41A3D2";
    pm.style.marginLeft = "4.5px";
    pm.style.marginTop = "-8px";
  }
}
function qnashow5() {
  let ans = document.querySelector(".ans5");
  let pm = document.querySelector(".pm5");
  let bpm = document.querySelector(".bpm5");

  if (pm.innerHTML != "+") {
    ans.style.display = "none";
    pm.innerHTML = "+";
    pm.style.color = "#41A3D2";

    bpm.style.backgroundColor = "white";
    pm.style.marginLeft = "1px";
    pm.style.marginTop = "-5px";
  } else {
    ans.style.display = "block";
    pm.innerHTML = "-";
    pm.style.color = "white";
    bpm.style.backgroundColor = "#41A3D2";
    pm.style.marginLeft = "4.5px";
    pm.style.marginTop = "-8px";
  }
}
function qnashow6() {
  let ans = document.querySelector(".ans6");
  let pm = document.querySelector(".pm6");
  let bpm = document.querySelector(".bpm6");

  if (pm.innerHTML != "+") {
    ans.style.display = "none";
    pm.innerHTML = "+";
    pm.style.color = "#41A3D2";

    bpm.style.backgroundColor = "white";
    pm.style.marginLeft = "1px";
    pm.style.marginTop = "-5px";
  } else {
    ans.style.display = "block";
    pm.innerHTML = "-";
    pm.style.color = "white";
    bpm.style.backgroundColor = "#41A3D2";
    pm.style.marginLeft = "4.5px";
    pm.style.marginTop = "-8px";
  }
}
function qnashow7() {
  let ans = document.querySelector(".ans7");
  let pm = document.querySelector(".pm7");
  let bpm = document.querySelector(".bpm7");

  if (pm.innerHTML != "+") {
    ans.style.display = "none";
    pm.innerHTML = "+";
    pm.style.color = "#41A3D2";

    bpm.style.backgroundColor = "white";
    pm.style.marginLeft = "1px";
    pm.style.marginTop = "-5px";
  } else {
    ans.style.display = "block";
    pm.innerHTML = "-";
    pm.style.color = "white";
    bpm.style.backgroundColor = "#41A3D2";
    pm.style.marginLeft = "4.5px";
    pm.style.marginTop = "-8px";
  }
}
function qnashow8() {
  let ans = document.querySelector(".ans8");
  let pm = document.querySelector(".pm8");
  let bpm = document.querySelector(".bpm8");

  if (pm.innerHTML != "+") {
    ans.style.display = "none";
    pm.innerHTML = "+";
    pm.style.color = "#41A3D2";

    bpm.style.backgroundColor = "white";
    pm.style.marginLeft = "1px";
    pm.style.marginTop = "-5px";
  } else {
    ans.style.display = "block";
    pm.innerHTML = "-";
    pm.style.color = "white";
    bpm.style.backgroundColor = "#41A3D2";
    pm.style.marginLeft = "4.5px";
    pm.style.marginTop = "-8px";
  }
}
function qnashow9() {
  let ans = document.querySelector(".ans9");
  let pm = document.querySelector(".pm9");
  let bpm = document.querySelector(".bpm9");

  if (pm.innerHTML != "+") {
    ans.style.display = "none";
    pm.innerHTML = "+";
    pm.style.color = "#41A3D2";

    bpm.style.backgroundColor = "white";
    pm.style.marginLeft = "1px";
    pm.style.marginTop = "-5px";
  } else {
    ans.style.display = "block";
    pm.innerHTML = "-";
    pm.style.color = "white";
    bpm.style.backgroundColor = "#41A3D2";
    pm.style.marginLeft = "4.5px";
    pm.style.marginTop = "-8px";
  }
}
function qnashow10() {
  let ans = document.querySelector(".ans10");
  let pm = document.querySelector(".pm10");
  let bpm = document.querySelector(".bpm10");

  if (pm.innerHTML != "+") {
    ans.style.display = "none";
    pm.innerHTML = "+";
    pm.style.color = "#41A3D2";

    bpm.style.backgroundColor = "white";
    pm.style.marginLeft = "1px";
    pm.style.marginTop = "-5px";
  } else {
    ans.style.display = "block";
    pm.innerHTML = "-";
    pm.style.color = "white";
    bpm.style.backgroundColor = "#41A3D2";
    pm.style.marginLeft = "4.5px";
    pm.style.marginTop = "-8px";
  }
}
function qnashow11() {
  let ans = document.querySelector(".ans11");
  let pm = document.querySelector(".pm11");
  let bpm = document.querySelector(".bpm11");

  if (pm.innerHTML != "+") {
    ans.style.display = "none";
    pm.innerHTML = "+";
    pm.style.color = "#41A3D2";

    bpm.style.backgroundColor = "white";
    pm.style.marginLeft = "1px";
    pm.style.marginTop = "-5px";
  } else {
    ans.style.display = "block";
    pm.innerHTML = "-";
    pm.style.color = "white";
    bpm.style.backgroundColor = "#41A3D2";
    pm.style.marginLeft = "4.5px";
    pm.style.marginTop = "-8px";
  }
}
function qnashow12() {
  let ans = document.querySelector(".ans12");
  let pm = document.querySelector(".pm12");
  let bpm = document.querySelector(".bpm12");

  if (pm.innerHTML != "+") {
    ans.style.display = "none";
    pm.innerHTML = "+";
    pm.style.color = "#41A3D2";

    bpm.style.backgroundColor = "white";
    pm.style.marginLeft = "1px";
    pm.style.marginTop = "-5px";
  } else {
    ans.style.display = "block";
    pm.innerHTML = "-";
    pm.style.color = "white";
    bpm.style.backgroundColor = "#41A3D2";
    pm.style.marginLeft = "4.5px";
    pm.style.marginTop = "-8px";
  }
}
function qnashow13() {
  let ans = document.querySelector(".ans13");
  let pm = document.querySelector(".pm13");
  let bpm = document.querySelector(".bpm13");

  if (pm.innerHTML != "+") {
    ans.style.display = "none";
    pm.innerHTML = "+";
    pm.style.color = "#41A3D2";

    bpm.style.backgroundColor = "white";
    pm.style.marginLeft = "1px";
    pm.style.marginTop = "-5px";
  } else {
    ans.style.display = "block";
    pm.innerHTML = "-";
    pm.style.color = "white";
    bpm.style.backgroundColor = "#41A3D2";
    pm.style.marginLeft = "4.5px";
    pm.style.marginTop = "-8px";
  }
}
function qnashow14() {
  let ans = document.querySelector(".ans14");
  let pm = document.querySelector(".pm14");
  let bpm = document.querySelector(".bpm14");

  if (pm.innerHTML != "+") {
    ans.style.display = "none";
    pm.innerHTML = "+";
    pm.style.color = "#41A3D2";

    bpm.style.backgroundColor = "white";
    pm.style.marginLeft = "1px";
    pm.style.marginTop = "-5px";
  } else {
    ans.style.display = "block";
    pm.innerHTML = "-";
    pm.style.color = "white";
    bpm.style.backgroundColor = "#41A3D2";
    pm.style.marginLeft = "4.5px";
    pm.style.marginTop = "-8px";
  }
}
function qnashow15() {
  let ans = document.querySelector(".ans15");
  let pm = document.querySelector(".pm15");
  let bpm = document.querySelector(".bpm15");

  if (pm.innerHTML != "+") {
    ans.style.display = "none";
    pm.innerHTML = "+";
    pm.style.color = "#41A3D2";

    bpm.style.backgroundColor = "white";
    pm.style.marginLeft = "1px";
    pm.style.marginTop = "-5px";
  } else {
    ans.style.display = "block";
    pm.innerHTML = "-";
    pm.style.color = "white";
    bpm.style.backgroundColor = "#41A3D2";
    pm.style.marginLeft = "4.5px";
    pm.style.marginTop = "-8px";
  }
}
function qnashow4() {
  let ans = document.querySelector(".ans4");
  let pm = document.querySelector(".pm4");
  let bpm = document.querySelector(".bpm4");

  if (ans.style.display != "none") {
    ans.style.display = "none";
    pm.innerHTML = "+";
    pm.style.color = "#41A3D2";

    bpm.style.backgroundColor = "white";
    pm.style.marginLeft = "1px";
    pm.style.marginTop = "-5px";
  } else {
    ans.style.display = "block";
    pm.innerHTML = "-";
    pm.style.color = "white";
    bpm.style.backgroundColor = "#41A3D2";
    pm.style.marginLeft = "4.5px";
    pm.style.marginTop = "-8px";
  }
}

function viewallless() {
  var a = document.querySelector("#d2");
  var mlbtn = document.querySelector(".mlbtn");
  // console.log(a.style.display)
  if (mlbtn.innerHTML != "View All") {
    a.style.display = "none";
    mlbtn.innerHTML = "View All";
  } else {
    a.style.display = "block";
    mlbtn.innerHTML = "View Less";
  }
}

//  subscribe links and functions

let sub = document.getElementById("subsbtn");
sub.onclick = () => {
  let price = document.getElementById("subPrice");
  localStorage.setItem("subcribe", (price.innerText));
  console.log(price.innerText)
  window.location.href = "payment.html";
};

let cart = document.querySelectorAll(".cardbut");
let trail = document.querySelectorAll(".trail");

cart[0].onclick = () => {
  localStorage.setItem("subcribe", trail[0].innerHTML);
  window.location.href = "payment.html";
};
cart[1].onclick = () => {
  localStorage.setItem("subcribe", trail[1].innerHTML);
  window.location.href = "payment.html";
};
