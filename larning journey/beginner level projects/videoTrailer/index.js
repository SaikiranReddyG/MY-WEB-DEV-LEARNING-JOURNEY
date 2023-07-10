const btnEL = document.querySelectorAll(".btn");
const closeIconEl = document.querySelectorAll(".close-icon");
const trailerContainerEl = document.querySelectorAll(".trailer-container");
const videoEl = document.querySelectorAll("video");

btnEL.addeventListener("click", () => {
    trailerContainerEl.classlist.remove("active");
});

closeIconEl.addeventListener("click", () => {
    trailerContainerEl.classlist.add("active");
    videoEl.pause();
    videoEl.currentTime = 0;
});