var tablinks = document.getElementsByClassName("tab-links");
var tabcontents = document.getElementsByClassName("tab-content");

function opentab(event, tabname) {
    for (tablink of tablinks) {
        tablink.classList.remove("active-link");
    }
    for (tabcontent of tabcontents) {
        tabcontent.classList.remove("active-tab");
    }
    event.currentTarget.classList.add("active-link");
    document.getElementById(tabname).classList.add("active-tab");
}



var sidemenu = document.getElementById("side-menu");

function openmenu() {
    sidemenu.style.right = "0";
}

function closemenu() {
    sidemenu.style.right = "-200px";
}



const seeMoreBtn = document.getElementById('see-more-btn');
const hiddenTabs = document.querySelectorAll('.hidden');

seeMoreBtn.addEventListener('click', () => {
    hiddenTabs.forEach(tab => {
        tab.style.display = 'block';
    });

    seeMoreBtn.style.display = 'none';
});
