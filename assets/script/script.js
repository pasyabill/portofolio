const bar = document.querySelector('nav.smartphone i.fa-bars');

const nav = document.querySelector('nav.desktop');

bar.addEventListener('click', () => {
    nav.classList.toggle('active');
    bar.classList.toggle('active2');
});