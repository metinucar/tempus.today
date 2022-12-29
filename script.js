function getCurrentDayCount() {
  const firstDateOfYear = new Date(new Date().getFullYear(), 0, 1);
  const currentDate = new Date();
  return Math.ceil(
    ((currentDate - firstDateOfYear) / (1000 * 60 * 60 * 24)).toFixed(4)
  );
}

function getCurrentWeekCount() {
  const firstDateOfYear = new Date(new Date().getFullYear(), 0, 1);
  const currentDate = new Date();
  return Math.ceil(
    ((currentDate - firstDateOfYear) / (1000 * 60 * 60 * 24)).toFixed(0) / 7
  );
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
  const barItem = document.getElementsByClassName("bar")[0];
  barItem.style.width = `${percent}%`;
  const counterItem = document.getElementsByClassName("value-number")[0];
  counterItem.textContent = `${percent}`;

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
  1000000
);
