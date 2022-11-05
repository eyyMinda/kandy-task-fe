/// Needed for transfering first paragraph to 'left-side' div
var descMove = function () {
  if (window.innerWidth < 800) {
    $('#landingDescription').detach().appendTo('#landingLeft');
    console.log('smallScreen');
  }
  else if (window.innerWidth > 800) {
    $('#landingDescription').detach().prependTo('#landingRight');
    console.log('bigScreen');
  }
};
window.addEventListener("resize", descMove);
window.addEventListener("onload", descMove);


//switch preview section tabs
let previousIndex = 0;
let activeIndex = 0; //navLink

function switchTab(currentNav) {
  const currentIndex = currentNav.dataset.index;
  if (currentIndex == previousIndex) return;

  activeIndex = currentIndex;
  const previousNav = document.querySelector(`[data-index="${previousIndex}"]`);
  const previousTab = document.querySelectorAll(`[data-status]`)[previousIndex];
  const currentTab = document.querySelectorAll(`[data-status]`)[currentIndex];

  previousNav.classList = '';
  currentNav.classList = 'active';

  previousTab.dataset.status = "inactive";
  setTimeout(() => {
    currentTab.dataset.status = "active";
    previousIndex = activeIndex;
  });
}

//toggle mobile menu
function toggleMenu(menu) {
  if (window.innerWidth <= 1000) menu.classList.toggle('open');
}