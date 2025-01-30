var popSpan = document.querySelectorAll(".pop span");
var containImg = document.querySelectorAll(".container img");
popSpan.forEach((ele) => {
  ele.onclick = function () {
    document.querySelector(".pop").style.display = "none";
  };
});

containImg.forEach((ele) => {
  ele.onclick = function () {
    document.querySelector(".pop").style.display = "block";

    document.querySelector(".pop img").src = ele.getAttribute("src");
  };
});
