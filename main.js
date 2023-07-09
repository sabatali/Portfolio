
// window.addEventListener('scroll', () => {
//     document.querySelector('nav').
//         classList.toggle
//         ('window-scrolled'), window.screenY > 0;
// })

const textButtons = document.querySelectorAll('.youtube_btn');

textButtons.forEach(textButtons => {
    let text = textButtons.querySelector
        ('p');
    text.innerHTML = text.innerHTML.split('').map
        ((character, index) => `<span
style="transform: rotate(${index * 15}deg)">${character}</span>`).join('')

})


$(document).ready(function() {
  // Toggle menu on click
  $("#menu-toggler").click(function() {
    toggleBodyClass("menu-active");
  });

  function toggleBodyClass(className) {
    document.body.classList.toggle(className);
  }

 });

