let indicator = document.getElementById("progress-bar");

let height = document.documentElement.scrollHeight - document.documentElement.clientHeight;

const animateProgressBar = () => {
  let scrollTop = document.documentElement.scrollTop;
  indicator.style.width=`${(scrollTop / height)*100}%`
}
window.addEventListener("scroll",animateProgressBar);