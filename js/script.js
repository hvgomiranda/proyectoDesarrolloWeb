addEventListener('DOMContentLoaded', () => 
{
    var header__button = document.querySelector('.header__button');
    var header__menuElements = document.querySelector('.header__menuElements');

    if (header__button)
    {
        header__button.addEventListener('click', () => 
        {
            var header__button = document.querySelector('.header__button');
            header__menuElements.classList.toggle('show');
        })
    }
});