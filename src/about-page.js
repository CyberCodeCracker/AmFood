import clearPage from "./clear-page";

const content = document.getElementById('content');

const createAboutPage = () => {
    clearPage();
    const aboutPageTitle = document.createElement('h1');
    aboutPageTitle.textContent = "About Us";
    aboutPageTitle.classList.add('page-title');
    content.appendChild(aboutPageTitle);

    const aboutPageImage = document.createElement('img');
    aboutPageImage.src = "../images/home.jpeg";
    aboutPageImage.classList.add('page-image');
    content.appendChild(aboutPageImage);

    const aboutPageDescription = document.createElement('p');
    aboutPageDescription.textContent = "Founded in 1998. Our restaurant specializes in delivering delicacies from exquisite cuisines. From Confit de Canard to Kaiseki Ryori, your needs wil be more than satisfied";
    aboutPageDescription.classList.add('page-description');
    content.appendChild(aboutPageDescription);
    console.log('about page works')
};

export default createAboutPage;