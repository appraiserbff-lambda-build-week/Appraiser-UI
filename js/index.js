// Get Variables
let peeps = document.querySelectorAll('.person'),
    cta = document.querySelector('.ctaholder'),
    header = document.querySelector('header'),
    us = document.querySelector('.us'),
    nav = document.querySelector('nav'),
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
        header.classList.add('no-jump');
    } else {
        cta.classList.remove('sticky');
        header.classList.remove('nojump');
        header.classList.remove('no-jump');
    }
}

// Push peeps to People and Plinks Class
peeps.forEach(per => new People(per));
peeps.forEach(per => new Plinks(per));

// Add login feature
let login = document.createElement('p');
login.innerHTML = '<img src="images/dropdown.png">Log In';
login.addEventListener('click', function () {
    login.classList.toggle('dropdown');
    let username = document.createElement('input'),
        password = document.createElement('input'),
        inputs = document.createElement('div');
    username.placeholder = 'Username';
    password.placeholder = 'Password';
    inputs.appendChild(username);
    inputs.appendChild(password);
    nav.children.length === 4 ? nav.appendChild(inputs) : null;
    let dd = nav.querySelector('div'),
        ddc = dd.querySelectorAll('input');
    dd.classList.toggle('drop');
    dd.classList.contains('drop') ? ddc.forEach(dd => dd.classList.add('dd')) : ddc.forEach(dd => dd.classList.remove('dd'));
    inputs.classList.add('drop');
})
nav.appendChild(login);