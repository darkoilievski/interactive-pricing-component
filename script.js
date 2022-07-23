const pageviews = document.querySelector(".pageviews");
const perMonth = document.querySelector(".per-month");
let slider = document.querySelector(".slider");
let toggle = document.querySelector(".toggle");
let price = [0, 8, 12, 16, 24, 32];
let pageViews = [0, "10K", "50K", "100K", "500K", "1M"];

/*

EVENT LISTENERS

*/

slider.addEventListener("input", pageViewsShown);
slider.addEventListener("input", toggleMonthly);
toggle.addEventListener("input", toggleMonthly);

/*

FUNCTIONS

*/

function toggleMonthly() {
  val = slider.value;
  if (toggle.value === "1") {
    toggle.style.backgroundColor = "#cdd7ee";
    perMonth.innerHTML = `<p class="per-month"><span class="dollars" >${price[val]}$ </span>/month</p>`;
  } else {
    toggle.style.backgroundColor = "#10d5c2";
    perMonth.innerHTML = `<p class="per-month"><span class="dollars" >${
      price[val] - price[val] * 0.25
    }$ </span>/month</p>`;
  }
}

function pageViewsShown() {
  val = slider.value;
  pageViews.forEach((view) => {
    pageviews.innerHTML = `<p class="pageviews"><span>${pageViews[val]} Pageviews</span></p>`;
    slider.style.background = `linear-gradient(
      to right,
      hsl(174, 77%, 80%) 0%,
      hsl(174, 77%, 80%) ${val}%,
      hsl(224, 65%, 95%) ${val * 25}%,
      hsl(224, 65%, 95%)
    )`;
  });
}
