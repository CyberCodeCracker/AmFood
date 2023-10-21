import clearPage from "./clear-page";

const content = document.getElementById('content');

const createHomePage = () => {
    clearPage();
    const homePageTitle = document.createElement('h1');
    homePageTitle.textContent = "AMFood";
    homePageTitle.classList.add('page-title');
    content.appendChild(homePageTitle);
    
    const homePageImage = document.createElement('img');
    homePageImage.src = "../images/home.jpeg";
    homePageImage.classList.add('page-image')
    content.appendChild(homePageImage);

    const homePageDescription = document.createElement('p');
    homePageDescription.textContent = "Welcome to our exquisite restaurant;;";
    homePageDescription.classList.add('page-description');
    content.appendChild(homePageDescription);
    console.log("homepage works")
}

export default createHomePage;