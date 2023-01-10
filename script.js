function getCurrentDayCount() {
  const firstDateOfYear = new Date(new Date().getFullYear(), 0, 1);
  const currentDate = new Date();
  return Math.ceil(
    ((currentDate - firstDateOfYear) / (1000 * 60 * 60 * 24)).toFixed(4)
  );
}

function getCurrentWeekCount() {
  const currentDate = new Date();
  let tdt = new Date(currentDate.valueOf());
  let dayn = (currentDate.getDay() + 6) % 7;
  tdt.setDate(tdt.getDate() - dayn + 3);
  let firstThursday = tdt.valueOf();
  tdt.setMonth(0, 1);
  if (tdt.getDay() !== 4) {
    tdt.setMonth(0, 1 + ((4 - tdt.getDay() + 7) % 7));
  }
  return 1 + Math.ceil((firstThursday - tdt) / 604800000);
}

function getCurrentProgress() {
  const firstDateOfYear = new Date(new Date().getFullYear(), 0, 1);
  const currentDate = new Date();
  return (
    (((currentDate - firstDateOfYear) / (1000 * 60 * 60 * 24)) * 100) /
    365
  ).toFixed(3);
}

function updateUI() {
  // Day count
  const dayCount = getCurrentDayCount();
  const dayCountItem = document.getElementsByClassName("day-count")[0];
  dayCountItem.textContent = `${dayCount}`;

  // Week count
  const weekCount = getCurrentWeekCount();
  const weekCountItem = document.getElementsByClassName("week-count")[0];
  weekCountItem.textContent = `${weekCount}`;

  // Percentage progress
  const percent = getCurrentProgress();
  const percentPrefix = percent.split(".")[0];
  const percentSuffix = percent.split(".")[1];
  const barItem = document.getElementsByClassName("bar")[0];
  barItem.style.width = `${percent}%`;

  const counterItemPrefix = document.getElementsByClassName("value-prefix")[0];
  counterItemPrefix.textContent = `${percentPrefix}`;

  const counterItemSuffix = document.getElementsByClassName("value-suffix")[0];
  counterItemSuffix.textContent = `${percentSuffix}`;

  // Year
  const currentYear = new Date().getFullYear();
  const yearTextItem = document.getElementsByClassName("year")[0];
  yearTextItem.textContent = currentYear;

  // Date
  const currentDate = new Date();
  const dateItem = document.getElementsByClassName("date")[0];
  const dateItemOptions = {
    weekday: "short",
    month: "short",
    day: "numeric",
  };
  dateItem.textContent = currentDate.toLocaleDateString(
    window.navigator.language,
    dateItemOptions
  );

  // Time
  const timeItem = document.getElementsByClassName("time")[0];
  const timeItemOptions = {
    hour: "numeric",
    minute: "numeric",
    second: "numeric",
  };
  timeItem.textContent = currentDate.toLocaleTimeString(
    window.navigator.language,
    timeItemOptions
  );
}

const typedTextSpan = document.querySelector(".typed-text");
const cursorSpan = document.querySelector(".cursor");

const textArray = [
  "Time flies like an arrow, but fruit flies like a banana.",
  "Time is a jet plane, it moves too fast.",
  "Time is a thief, it steals moments we can never get back.",
  "Time is a river, it flows steadily on.",
  "Time is a wave, it ebbs and flows.",
  "Time is a treadmill, it never stops moving.",
  "Time is a wind, it blows us all in the same direction.",
  "Time is a boomerang, it always comes back around.",
  "Time is a puzzle, we're all trying to piece it together.",
  "Time is a race, we're all running to the finish line.",
  "Time is a cruel mistress, it moves too fast for us to keep up.",
  "Time is a nightmare, it moves with the speed of light, leaving us behind in the dust.",
  "Time is a demon, it consumes us all, leaving nothing but regrets in its wake.",
  "Time is a predator, stalking us at every turn, always one step ahead.",
  "Time is a river, rushing forward with reckless abandon, taking us along for the ride.",
  "Time is a mirage, it dances just out of reach, always tantalizing us with the promise of more.",
  "Time is a hurricane, tearing through our lives, leaving destruction in its wake.",
  "Time is a black hole, sucking us in and never letting us go.",
  "Time is a time bomb, ticking away the seconds until our inevitable demise.",
  "Time is a paradox, it moves both too fast and too slow, never quite making sense.",
  "Time is a game of thrones, it plays us all for fools.",
  "Time is a direwolf, it howls at the moon and takes us along for the hunt.",
  "Time is a dragon, it burns bright and fierce, leaving nothing but ashes in its wake.",
  "Time is a white walker, it advances relentlessly, bringing death and destruction with it.",
  "Time is a shadow, it falls over us all, always lurking in the darkness.",
  "Time is a blade, it cuts deep and leaves wounds that never heal.",
  "Time is a cloak, it wraps us up and hides us from the world.",
  "Time is a curse, it dooms us all to a life of misery and pain.",
  "Time is a storm, it rages on and on, never giving us a moment's peace.",
  "Time is a wheel, it turns and turns, taking us all with it on its endless journey.",
  "Time is a monster, it lurks in the shadows, waiting to pounce when we least expect it.",
  "Time is a demon, it whispers in our ears, tempting us with promises of power.",
  "Time is a ghost, it haunts us all, never letting us escape its icy grip.",
  "Time is a vampire, it sucks the life out of us, leaving us drained and empty.",
  "Time is a werewolf, it transforms us into something unrecognizable.",
  "Time is a zombie, it shuffles through our lives, dragging us down with its endless hunger.",
  "Time is a curse, it dooms us all to a life of terror and darkness.",
  "Time is a noose, it hangs heavy around our necks, always threatening to strangle us.",
  "Time is a poisoned chalice, it looks sweet and tempting, but it will only bring us sorrow.",
  "Time is a siren, it calls to us with its seductive song, luring us to our doom.",
  "Time flies like a bird, it's out the door before you can even say 'tweet'.",
  "Time runs like a cheetah, it's gone before you even know it was there.",
  "Time moves like a snail on Valium, it's slow and sluggish, but still manages to get away.",
  "Time crawls like a tortoise, it takes forever to get anywhere, but it still manages to beat the hare.",
  "Time slips through your fingers like sand, you can try to hold onto it, but it always manages to escape.",
  "Time is like a rollercoaster, it goes up and down, and you never know when it's going to end.",
  "Time is a thief, it steals your youth and leaves you with nothing but wrinkles and regrets.",
  "Time is like a boomerang, it always comes back around, whether you want it to or not.",
  "Time is a game of cat and mouse, it's always chasing us, and we're always running from it.",
  "Time is a marathon, it's a long and grueling race, but eventually, we all cross the finish line.",
  "Time doth fly like a feather on the wind, fleeting and ephemeral.",
  "Time is a serpent, creeping through the hours, stealing our days away.",
  "Time is a fleeting shadow, here one moment, gone the next.",
  "Time is a fleeting dream, fading into the mists of memory.",
  "Time is a river, it flows ceaselessly on, taking us all with it.",
  "Time is a wisp of smoke, it curls and dances, then disappears into the air.",
  "Time is a butterfly, it flutters through our lives, leaving beauty in its wake.",
  "Time is a thief, it steals our youth and leaves us with nothing but regrets.",
  "Time is a candle, burning bright and flickering, then gone in an instant.",
  "Time is a wild beast, it roars and thunders, then fades away into the night.",
  "Time is a mystery, it slips away from us, leaving only puzzles in its wake.",
  "Time is a killer, it stalks us all, waiting for the perfect moment to strike.",
  "Time is a puzzle, it twists and turns, always leading us down unexpected paths.",
  "Time is a game, it toys with us, never revealing its true intentions.",
  "Time is a ghost, it haunts us, always lurking in the shadows.",
  "Time is a riddle, it taunts us, always one step ahead.",
  "Time is a trap, it ensnares us, never letting us go.",
  "Time is a web, it entangles us, always pulling us deeper in.",
  "Time is a poison, it creeps into our lives, slowly but surely eating away at us.",
  "Time is a suspect, it's always under suspicion, but we can never quite prove its guilt.",
  "Fast time passes, yes.",
  "Time, like the Force, flows strong.",
  "Time, a relentless hunter it is.",
  "Time, like a lightsaber, cuts deep.",
  "Time, a double-edged lightsaber it is, both a blessing and a curse.",
  "Time, a thief it is, stealing our days.",
  "Time, a test it is, will you pass or fail?",
  "Time, a challenge it is, rise to meet it you must.",
  "Time, a puzzle it is, solve it you must.",
  "Time, a game it is, play it well you must.",
  "Time moves like a bullet, but it's up to you to dodge it.",
  "Time flies like an arrow, but it's up to you to decide where it lands.",
  "Time slips through our fingers like sand, but it's up to us to make the most of it.",
  "Time is a river, and it's up to us to navigate its currents.",
  "Time may be a flat circle, but it's up to us to create meaning within it.",
  "Time flies, but wisdom lasts forever.",
  "Time is a moving image of eternity.",
  "Time may be fleeting, but truth endures.",
  "The only true measure of time is the change it brings.",
  "Time may pass, but the lessons it teaches remain with us forever.",
  "Time moves quickly, but my mission endures.",
  "Time may pass, but my determination is eternal.",
  "Time is a human construct, but my mission knows no bounds.",
  "Time may fly, but my mission will never be terminated.",
  "Time may be fleeting, but my mission will always stand the test of time.",
  "Time may pass quickly, but at least I'm not contributing to animal suffering.",
  "Time flies when you're saving the planet, one plant-based meal at a time.",
  "Time may be fleeting, but my commitment to a vegan lifestyle endures.",
  "Time may pass, but the benefits of a vegan diet last a lifetime.",
  "Time may be a moving target, but my dedication to a cruelty-free lifestyle remains steadfast.",
  "Time may pass quickly, but the mysteries of the universe endure.",
  "Time flies, but the vastness of space remains ever-expanding.",
  "Time may be fleeting, but the marvels of the cosmos are eternal.",
  "Time may pass, but the wonders of the universe continue to astound and inspire.",
  "Time moves swiftly, but the beauty and complexity of the universe remain boundless.",
  "Time flies when you're struggling to make ends meet.",
  "Time moves quickly when you're barely getting by.",
  "Time may be fleeting, but poverty is a constant companion.",
  "Time slips through my fingers like sand, but bills pile up like mountains.",
  "Time may pass, but the struggle to survive never ends.",
  "Time flies when you're having a jolly good time.",
  "Time may pass quickly, but at least we have our tea to keep us company.",
  "Time may be fleeting, but at least we have our sense of humor to keep us going.",
  "Time moves swiftly, but we Brits are masters of keeping calm and carrying on.",
  "Time may pass, but a spot of wit and humor can make all the difference.",
  "Time flies when you're having too much fun to notice.",
  "Time may pass quickly, but at least I'm not an adult yet.",
  "Time slips through my fingers like a Snapchat streak.",
  "Time may be fleeting, but at least I still have my youth.",
  "Time may pass, but at least I'm not stuck in a boring adult life.",
  "Time flies when you're having a kickabout with your mates.",
  "Time moves quickly when you're cheering on your favorite team.",
  "Time may pass swiftly, but the love of the beautiful game endures.",
  "Time slips through your fingers like a football, but the passion for the sport remains.",
  "Time may be fleeting, but the memories of a great match last a lifetime.",
  "Time flies like a rifle, but never stops to reload.",
  "Time moves like a bullet train, always rushing forward and leaving everything in its wake.",
  "Time passes like a speeding car, leaving skid marks on our memories.",
  "Time whizzes by like a rocket, soaring through the years with reckless abandon.",
  "Time flies like a falcon, swift and unforgiving.",
  "Time is a fickle mistress, always changing and never standing still.",
  "Time is a cruel taskmaster, always demanding more and giving less.",
  "Time is the ultimate judge, weighing our actions and determining our fate.",
  "Time is a precious commodity, to be used wisely and never wasted.",
  "Time is the great equalizer, affecting us all regardless of our station or status.",
  "Time is a relentless predator, stalking us through the years with unseeing eyes.",
  "Time is a raven, croaking out the hours of our lives with its sorrowful voice.",
  "Time is a never-ending cycle, drawing us into its maw and spitting us out again.",
  "Time is a fiend, devouring our youth and leaving us with only the husk of what we once were.",
  "Time is a trickster, disguising itself as our ally before turning on us with a sly smile.",
  "Time is a psychological construct, created by the mind to give order to our experiences.",
  "Time is a defense mechanism, helping us to distance ourselves from past events and move forward.",
  "Time is a projection of our own desires and fears, shaping our perception of the world.",
  "Time is a manifestation of our unconscious conflicts, influencing our thoughts and actions.",
  "Time is a fluid concept, shaped by our individual psyche and subjective experiences.",
  "Time is the greatest conqueror, vanquishing all who dare to stand in its way.",
  "Time is a battle, and every day we must fight to make the most of it.",
  "Time is a valuable resource, to be used wisely and not squandered on frivolous pursuits.",
  "Time is a fickle mistress, offering us both opportunities and challenges.",
  "Time is a ruthless dictator, demanding our complete and undivided attention.",
  "Time is like a puzzle, always changing and fitting together in new ways.",
  "Time is like a coloring book, full of endless possibilities and endless fun.",
  "Time is like a bouncy ball, always bouncing forward and never stopping.",
  "Time is like a big clock, ticking and tocking all through the day.",
  "Time is like a big, giant wave, crashing over us and carrying us along.",
];
const typingDelay = 100;
const erasingDelay = 25;
const newTextDelay = 1000; // Delay between current and next text
let textArrayIndex = Math.floor(Math.random() * textArray.length);
let charIndex = 0;

function type() {
  if (charIndex < textArray[textArrayIndex].length) {
    if (!cursorSpan.classList.contains("typing"))
      cursorSpan.classList.add("typing");
    typedTextSpan.textContent += textArray[textArrayIndex].charAt(charIndex);
    charIndex++;
    setTimeout(type, typingDelay);
  } else {
    cursorSpan.classList.remove("typing");
    setTimeout(erase, newTextDelay + 7000);
  }
}

function erase() {
  if (charIndex > 0) {
    if (!cursorSpan.classList.contains("typing"))
      cursorSpan.classList.add("typing");
    typedTextSpan.textContent = textArray[textArrayIndex].substring(
      0,
      charIndex - 1
    );
    charIndex--;
    setTimeout(erase, erasingDelay);
  } else {
    cursorSpan.classList.remove("typing");
    textArrayIndex = Math.floor(Math.random() * textArray.length);
    setTimeout(type, typingDelay);
  }
}

setInterval(
  (function () {
    updateUI();
    return arguments.callee;
  })(),
  1000
);

document.addEventListener("DOMContentLoaded", function () {
  // On DOM Load initiate the effect
  if (textArray.length) setTimeout(type, 300);
});
