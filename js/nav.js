const menuBtn = document.querySelector('.menu-btn');
let menuOpen = false;
menuBtn.addEventListener('click', () => {
    if(!menuOpen) {
        menuBtn.classList.add('open');
        menuOpen = true;
    } else {
        menuBtn.classList.remove('open');
        menuOpen = false;
    }
});
function toggleMenu() {
    const menuToggle = document.querySelector('.toggle')
    const navigation = document.querySelector('.nav')
    const logoFont = document.querySelector('.logo')
    const shopCart = document.querySelector('.cart')
    menuToggle.classList.toggle('active')
    navigation.classList.toggle('active')
    logoFont.classList.toggle('active')
    shopCart.classList.toggle('active')
}