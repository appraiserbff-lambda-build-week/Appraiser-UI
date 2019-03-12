// Get Variables
let peeps = document.querySelectorAll('.person'),
    cta = document.querySelector('.cta'),
    header = document.querySelector('header'),
    sticky = cta.offsetTop;

// People Class
class People {
    constructor(person) {
        this.person = person;
        this.data = this.person.dataset.person;
        this.person.style.background = `linear-gradient( rgba(0, 0, 0, 0.25), rgba(50, 50, 50, 0.45)), url('images/${this.data}.jpg') scroll no-repeat center / contain`;
    }
}

// Plinks Class
class Plinks extends People {
    constructor(person) {
        super(person);
        this.person = person;
        this.name = this.person.querySelector('h3').innerText;
        this.position = this.person.querySelector('h4').innerText;
        this.id = this.person.id;
        this.element = document.createElement('a');
        this.element.href = `#${this.id}`;
        this.element.innerText = this.name;
        const us = document.querySelector('.us');
        us.appendChild(this.element);
        console.log(this.element);
    }
}

// CTA Scroll
window.onscroll = function () { engage() };
function engage() {
    if (window.pageYOffset >= sticky) {
        cta.classList.add('sticky');
        header.classList.add('nojump');
        cta.innerHTML = '<div>Find A Listing</div>';
    } else {
        cta.classList.remove('sticky');
        header.classList.remove('nojump');
        cta.innerHTML = 'Find A Listing';
    }
}

// Push peeps to People and Plinks Class
peeps.forEach(per => new People(per));
peeps.forEach(per => new Plinks(per));