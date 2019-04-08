const changeButton = () => {
    const button = document.querySelector('.button-toggle');
    button.classList.toggle('button-toggle--active');
};

function toggleForm(){
    const button = document.querySelector('.button-toggle');
    if(button.classList.contains('button-toggle--active')){
        console.log(2);
        document.getElementById('form').style.width = '100%';
        document.getElementById('form').style.height = '400px';
    }
    else{
        document.getElementById('form').style.width = '0px';
    }
}


const getHeight = elem => {
    elem.style.display = 'block'; // make element visible
    const height = elem.scrollHeight + 'px';
    elem.style.display = ''; // hide element
    return height;
};

const showElem = elem => {
    const height = getHeight(elem);
    elem.classList.add('is-visible');
    elem.style.height = height;

    window.setTimeout( () => {
        elem.style.height = '';
    }, 350);
};

const hideElem = elem => {
    elem.style.height = getHeight(elem);

    window.setTimeout( () => {
        elem.style.height = '0';
    }, 1);

    window.setTimeout( () => {
        elem.classList.remove('is-visible');
    }, 350);
};
const toggle = elem => {
    if (elem.classList.contains('is-visible')) {
        hideElem(elem);
        return;
    }
    showElem(elem);
};

document.addEventListener('click', (event) => {
   if (!event.target.classList.contains('header__button-toggle')) return;
   event.preventDefault();
   const content = document.querySelector('.form');
   if (!content) return;

   toggle(content);
}, false);