setTimeout(function () {
    let progress = document.getElementById("progressbar");
    let totalHeight = document.body.scrollHeight - window.innerHeight;
    let sliderTexts = document.querySelectorAll(".slide-in");
    window.onscroll = debounce(function () {
      scrollBar(progress, totalHeight);
      checkSlide(sliderTexts);
    }, 16)
  }, 1000)

function scrollBar(progress, totalHeight) {
    let progressHeight = (window.pageYOffset / totalHeight) * 100;
    progress.style.width = progressHeight + "%";
}
  
  
function debounce(func, wait = 20, immediate = true) {
    var timeout;
    return function () {
      var context = this,
        args = arguments;
      var later = function () {
        timeout = null;
        if (!immediate) func.apply(context, args);
      };
      var callNow = immediate && !timeout;
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
      if (callNow) func.apply(context, args);
    };
};

function checkSlide(sliderTexts) {
    sliderTexts.forEach(sliderText => {
      const slideInAt = window.scrollY + window.innerHeight
      var rect = sliderText.getBoundingClientRect();
      if(window.innerWidth > 500){
        if (rect.top - window.innerHeight/1.2 < 0) {
          sliderText.classList.add("active");
        }
      } else{
        if (rect.top - window.innerHeight/1.1 < 0) {
          sliderText.classList.add("active");
        }
      }
  
    })
  }