import createAboutPage from "./about-page";
import createHomePage from "./home-page";

const homePageButton = document.getElementById('home');
const aboutPageButton = document.getElementById('about');

homePageButton.addEventListener('click', () => {
    createHomePage();
    console.log('home button works')
});

aboutPageButton.addEventListener('click', () => {
    createAboutPage();
    console.log('about button works')
})