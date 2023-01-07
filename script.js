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

setInterval(
  (function () {
    updateUI();
    return arguments.callee;
  })(),
  1000
);
