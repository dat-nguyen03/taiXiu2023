//Selector elements
const btnStart = document.querySelector(".start");
const bowl = document.querySelector(".bowl");
const plate = document.querySelector(".plate");
const openBowl = document.querySelector(".open");
const boxItem = document.querySelectorAll(".box-item");
const boxItem1 = document.querySelector(".item1");
const boxItem2 = document.querySelector(".item2");
const boxItem3 = document.querySelector(".item3");
// const audio = document.querySelector('.audio')
const faces = document.querySelectorAll(".face");
const faces_item1 = document.querySelectorAll(".face-item1");
const faces_item2 = document.querySelectorAll(".face-item2");
const faces_item3 = document.querySelectorAll(".face-item3");
const resultElement = document.querySelector(".result");
// console.log(dataElement);
// console.log(faces_item3);

let data = 0;
const arr = [0, 1, 2, 3, 4, 5];
const arrDeg = [0, 33, 122, 172, 246, 288];

btnStart.addEventListener("click", function () {
  bowl.style.transform = "translate(0%,0%)";
  bowl.classList.add("shake");
  plate.classList.add("shake");
  btnStart.setAttribute("disabled", "disabled");

  const item1 = Math.floor(Math.random() * arr.length);
  const item2 = Math.floor(Math.random() * arr.length);
  const item3 = Math.floor(Math.random() * arr.length);

  setTimeout(() => {
    openBowl.removeAttribute("disabled");
    bowl.classList.remove("shake");
    plate.classList.remove("shake");

    faces.forEach(function (item) {
      item.classList.remove("active");
      item.style.transform = "rotate(0deg)";
    });
    faces_item1[item1].classList.add("active");
    faces_item1[item1].style.transform = `rotate(${arrDeg[item1]}deg)`;

    faces_item2[item2].classList.add("active");
    faces_item2[item2].style.transform = `rotate(${arrDeg[item2]}deg)`;

    faces_item3[item3].classList.add("active");
    faces_item3[item3].style.transform = `rotate(${arrDeg[item3]}deg)`;

    const data_face1 = faces_item1[item1].getAttribute("data-face");
    const data_face2 = faces_item2[item2].getAttribute("data-face");
    const data_face3 = faces_item3[item3].getAttribute("data-face");
    data = Number(data_face1) + Number(data_face2) + Number(data_face3);
  }, 1000);

  // console.log(openBowl.disabled);
});

const calcResult = () => {
  bowl.style.transform = "translate(60%,-70%)";
  openBowl.setAttribute("disabled", "disabled");
  btnStart.removeAttribute("disabled");
  if (data == 1 || data == 2 || data == 3 || data == 18) {
    resultElement.innerHTML = `Kết quả: ${data} - null`;
  } else if (data >= 4 && data <= 10) {
    resultElement.innerHTML = `Kết quả: ${data} - Xỉu`;
  } else if (data >= 11 && data <= 17) {
    resultElement.innerHTML = `Kết quả: ${data} - Tài`;
  }
};

openBowl.addEventListener("click", calcResult);
