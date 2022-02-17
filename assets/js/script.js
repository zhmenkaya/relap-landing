function test(a, b) {
    return a + b
}

// console.log(test(5, 2));

// включение burger_menu по клику

function burgerMenu() {
    let burgerIcon = document.querySelector(".header__burger-btn");
    let closeIcon = document.getElementById("close_icon");
    let burgerMenu = document.getElementById("burger_menu");

    burgerIcon.addEventListener("click", function (e) {
       burgerMenu.classList.toggle("header__navigation_active");
       this.style.display = "none";
       closeIcon.style.display = "block";
    })

    closeIcon.addEventListener("click", function () {
        burgerMenu.classList.toggle("header__navigation_active");
        this.style.display = "none";
        burgerIcon.style.display = "block";
    })
}

burgerMenu();


var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function() {
        /* Toggle between adding and removing the "active" class,
        to highlight the button that controls the panel */
        this.classList.toggle("active");

        /* Toggle between hiding and showing the active panel */
        var panel = this.nextElementSibling;
        if (panel.style.display === "block") {
            panel.style.display = "none";
        } else {
            panel.style.display = "block";
        }
    });
}

//# sourceMappingURL=script.js.map
