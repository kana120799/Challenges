/*
calculation:
for h hour:   30*h + min/2
for min :  6*min
for sec:- 6*sec         
 */

setInterval(() => {
  date = new Date();
  hr = date.getHours();
  min = date.getMinutes();
  sec = date.getSeconds();
  hr_rotation = 30 * hr + min / 2;
  min_rotation = 6 * min;
  sec_rotation = 6 * sec;

  document.getElementById("hour").style.transform = `rotate(${hr_rotation}deg)`;
  document.getElementById(
    "minute"
  ).style.transform = `rotate(${min_rotation}deg)`;
  document.getElementById(
    "second"
  ).style.transform = `rotate(${sec_rotation}deg)`;
}, 1000);
