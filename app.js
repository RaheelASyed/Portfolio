const sections = document.querySelectorAll('.section');
const sectBtns = document.querySelectorAll('.controls');
const sectBtn = document.querySelectorAll('.control');
const allSections = document.querySelectorAll('.main-content');

function PageTransitions() {
    for (let i = 0; i < sectBtn.length; i++) {
        sectBtn[i].addEventListener('click', function () {
            sectBtn.forEach(btn => btn.classList.remove('active-btn'));
            this.classList.add('active-btn');
            sections.forEach(section => section.classList.remove('active'));
            const id = this.getAttribute('data-id');
            document.getElementById(id).classList.add('active');
        });
    }
    const themeButton = document.querySelector('.theme-button');
    themeButton.addEventListener('click', () => {
        let element = document.body;
        element.classList.toggle('light-mode')
    })
}

PageTransitions();