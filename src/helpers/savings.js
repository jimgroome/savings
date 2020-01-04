import { dayOfYear } from "weeknumber";
const dateFormat = require("dateformat-light");
const daysInYear = require("year-days");

const days = () => {
  const currentDate = new Date();
  const currentDay = dayOfYear(currentDate);
  const currentYear = currentDate.getFullYear();
  const daysInCurrentYear = daysInYear(currentYear);
  const dateFriendlyFormat = "dS mmmm yyyy";

  let totalSavings = 0;
  let days = [];
  let totalDays = 1;
  let increment = 1;
  while (totalDays <= daysInCurrentYear) {
    let dayDate = dateFormat(
      new Date(currentYear, 0).setDate(totalDays),
      "yyyy-mm-dd"
    );
    let dayData = {};
    dayData.day = totalDays;
    dayData.date = dayDate;
    dayData.week = dateFormat(dayDate, "W");
    totalDays < currentDay ? (dayData.passed = true) : (dayData.passed = false);
    totalDays === currentDay
      ? (dayData.current = true)
      : (dayData.current = false);

    dayData.increment = totalDays * increment;

    totalSavings = totalSavings + dayData.increment;

    dayData.totalSoFar = totalSavings;

    dayData.friendly = {};
    dayData.friendly.date = dateFormat(dayDate, dateFriendlyFormat);
    dayData.friendly.increment = "£" + (dayData.increment / 100).toFixed(2);
    dayData.friendly.totalSoFar = "£" + (dayData.totalSoFar / 100).toFixed(2);

    days.push(dayData);
    totalDays++;
  }

  return days;
};
export default days;
