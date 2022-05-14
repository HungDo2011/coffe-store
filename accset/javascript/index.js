
const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const menuTabs = $$(".menu-tab");
const foodLists = $$(".food-list");

const tabActive = $(".menu-tab.active-tab");
const listActive = $(".food-list.active-list");
const hover = $('.menu-tab:hover')

const line = $('.menu-list .line');

line.style.left = tabActive.offsetLeft + "px";
line.style.width = tabActive.offsetWidth + "px";

menuTabs.forEach((tab, index) => {
    const list = foodLists[index];

    tab.onclick = function() {
        $('.menu-tab.active-tab').classList.remove('active-tab');
        $('.food-list.active-list').classList.remove('active-list');

        line.style.left = this.offsetLeft + "px";
        line.style.width = this.offsetWidth + "px";

        tab.classList.add('active-tab');
        list.classList.add('active-list');
    }
})



