const userName = prompt("İsminizi Giriniz.");
const nameUser = document.querySelector("#name");
const clock = document.querySelector("#clock");

function showDate() {
  let date = new Date();

  let day = date.getDay();
  let hour = date.getHours();
  let minute = date.getMinutes();
  let second = date.getSeconds();

  let _day = [
    "Pazar",
    "Pazartesi",
    "Salı",
    "Çarşamba",
    "Perşembe",
    "Cuma",
    "Cumartesi",
  ];

  switch (true) {
    case second < 10:
      second = `0${second}`;
      break;
    case minute < 10:
      minute = `0${minute}`;
      break;
    case hour < 10:
      hour = `0${hour}`;
      break;
  }

  nameUser.innerHTML = `Merhaba,<strong> ${userName}! </strong> Hoş Geldin!`;
  clock.innerHTML = `${hour}:${minute}:${second} ${_day[day]} `;
}
setInterval(showDate, 1000);
