const middle_header_button = document.querySelector('.middle header button')

document.addEventListener("scroll", (event) => {
    lastKnownScrollPosition = window.scrollY;
    if(lastKnownScrollPosition > 300){
        middle_header_button.style.display = 'inline-block'
    } else {
        middle_header_button.style.display = 'none'
    }
  });