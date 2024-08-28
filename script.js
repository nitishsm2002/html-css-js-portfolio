function toggleMenu(){
    const menu=document.querySelector(".menu-links");
    const icon=document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
}
function toggleReadMore() {
    const textContainer = document.getElementById('textContainer');
    const readMoreBtn = textContainer.querySelector('.read-more');
    
    if (textContainer.classList.contains('expanded')) {
        textContainer.classList.remove('expanded');
        readMoreBtn.textContent = 'Read More';
    } else {
        textContainer.classList.add('expanded');
        readMoreBtn.textContent = 'Read Less';
    }
}