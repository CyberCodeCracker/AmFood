const content = document.getElementById('content');

const clearPage = () => {
    while(content.firstChild) {
        content.removeChild(content.firstChild);
    }
}

export default clearPage;