let btn = document.getElementById("angleBtn");
let btnAngle = 1;
let link = document.getElementById("angleLink");

btn.addEventListener("click", animateBtn);

function animateBtn()
{
    btn.classList.toggle("animateBtn");

    if (btnAngle == 1)
    {
        link.setAttribute("href", "#about");
        btnAngle = 0;
    }

    else
    {
        link.setAttribute("href", "#header");
        btnAngle = 1;
    }
}