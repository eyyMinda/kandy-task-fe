const items = [
  {
    id: 0,
    paragraphs:
      ["This thinner, slant-tipped container provides ease of application once only dreamed of!",
        "Nerdwax is a beeswax-based blend of All Natural and Certified Organic Ingredients specially formulated to keep your glasses in place while you live your life.",
        "Nerdwax works by creating a layer of friction between your glasses and your skin. So it doesn’t matter what type of glasses you have, as long as they fit properly nerdwax will keep them in place! It’s also super easy to apply: Simply rub nerdwax on the nose pads of your favorite specs or sunnies and enjoy slip free bliss.",
        "We pride ourselves in our commitment to using only the best All-Natural, Cosmetic Grade Ingredients.",
        "We use Certified Organic and Sustainably Sourced products whenever possible."],
    bolds:
      ["Ingredients: Beeswax, Coconut Oil, Gum Rosin"]
  },
  {
    id: 1,
    paragraphs:
      ["Nerdwax Magic Drops are guaranteed to provide a magical clean for your sunnies, specs, and screens!",
        "Just 1-2 little drops of the magic formula and wipe clean with the included nerdwax Microfiber cloth.",
        "Next thing you know you’ll be singing to the heavens… oh oh it’s magic 🎶"],
    bolds:
      ["Magic drops net wt. 0.17oz/5ml",
        "Magic drops refill net wt. 2oz/59ml"]
  },
  {
    id: 2,
    paragraphs:
      ["Slap this baby onto one our Secretly Nerdy microfiber cloths, clip it to your bag, and you’re good to go!",
        "Holds on nice and tight so you don’t have to worry about losing your cloth."]
  },
  {
    id: 3,
    paragraphs:
      ["There’s a lot of things you need to get across this universe. Warp drive… wormhole refractors…",
        "You know the thing you need most of all? A blue herringbone cleaning cloth that will leave your spectacles spick and span.",
        "All Secretly Nerdy microfiber cloths are made from recycled plastic water bottles and guaranteed to remove Nerdwax® from lenses."],
    bolds:
      ["Dimensions: 12” X 12”"]
  },
]

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