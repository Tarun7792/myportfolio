var typed = new Typed('#element', {
    strings: ['Web Designer', 'A Graphic Designer'],
    typeSpeed: 60,
});

for (let i = 0; i < 20; i++) {
    const box = document.createElement("div");
    box.classList.add("box");
    box.style.left = Math.random() * 100 + "vw";
    box.style.height = 20 + Math.random() * 80 + "px";
    box.style.width = 10 + Math.random() * 40 + "px";
    box.style.animationDuration = 5 + Math.random() * 10 + "s";
    document.body.appendChild(box);
}

const filterButtons = document.querySelectorAll('.filter-btn');
const skillItems = document.querySelectorAll('.skill-item');

filterButtons.forEach(btn => {
    btn.addEventListener('click', () => {
        // Active class toggle
        filterButtons.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');

        const filter = btn.getAttribute('data-filter');

        skillItems.forEach(item => {
            if (filter === 'all' || item.classList.contains(filter)) {
                item.classList.remove('hide');
            } else {
                item.classList.add('hide');
            }
        });
    });
});

window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('nav ul li a');

    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        if (pageYOffset >= sectionTop - 100) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === '#' + current) {
            link.classList.add('active');
        }
    });
});