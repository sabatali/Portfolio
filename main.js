
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



const nav = document.querySelector('.nav_link');
const openNavBtn = document.querySelector('#nav_toggle_open');
const closeNavBtn = document.querySelector('#nav_toggle_close');

const openNav = () => {
     nav.style.display = 'flex';
     openNavBtn.style.display = 'none';
     closeNavBtn.style.display = 'inline-block';
}

openNavBtn.addEventListener('click', openNav);

const closeNav = () => {
    nav.style.display = 'none';
    openNavBtn.style.display = 'inline-block';
    closeNavBtn.style.display = 'none';
}

 closeNavBtn.addEventListener('click', closeNav);


 nav.querySelectorAll('li a').forEach(navlink => {
    navlink.addEventListener('click' , closeNav);
 })


