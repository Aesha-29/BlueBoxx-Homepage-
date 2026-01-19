const counters = document.querySelectorAll(".counter");

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const counter = entry.target;
        const target = +counter.dataset.target;
        let current = 0;
        const increment = target / 120;

        const update = () => {
          current += increment;

          if (current < target) {
            counter.innerText = Math.floor(current) + "+";
            requestAnimationFrame(update);
          } else {
            counter.innerText = target + "+";
          }
        };

        update();
        observer.unobserve(counter);
      }
    });
  },
  { threshold: 0.6 },
);

counters.forEach((counter) => observer.observe(counter));


const slider = document.getElementById("slider");
const next = document.getElementById("nextBtn");
const prev = document.getElementById("prevBtn");

next.addEventListener("click", () => {
  slider.scrollLeft += 220;
});

prev.addEventListener("click", () => {
  slider.scrollLeft -= 220;
});