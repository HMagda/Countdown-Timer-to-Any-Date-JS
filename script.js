const settings = document.querySelector('.settings');
const settingsBtn = document.querySelector('.settings-btn');
const imageSection = document.querySelector('.image-section');

const eventName = document.querySelector('#event-name');
const eventDay = document.querySelector('#event-day');
const eventMonth = document.querySelector('#event-month');
const eventYear = document.querySelector('#event-year');
const eventImg = document.querySelector('#event-image');

const daysCount = document.querySelector('.days-count');
const hoursCount = document.querySelector('.hours-count');
const minutesCount = document.querySelector('.minutes-count');
const secondsCount = document.querySelector('.seconds-count');

const saveBtn = document.querySelector('.save');
const eventSetName = document.querySelector('.event-set-name');

let eventSetDate;

const setTime = () => {
  const currentTime = new Date();
  const timeDifference = eventSetDate - currentTime;
  const daysDifference = Math.floor(timeDifference / (1000 * 3600 * 24));
  const hoursDifference = Math.floor(timeDifference / (1000 * 3600)) % 24;
  const minutesDifference = Math.floor(timeDifference / (1000 * 60)) % 60;
  const secondsDifference = Math.floor(timeDifference / 1000) % 60;

  daysCount.textContent = daysDifference;
  hoursCount.textContent = hoursDifference;
  minutesCount.textContent = minutesDifference;
  secondsCount.textContent = secondsDifference;
};

const updateAppContent = () => {
  eventSetName.innerText = eventName.value;
  eventSetDate = new Date(
    `${eventMonth.value} ${eventDay.value} ${eventYear.value}`
  );
  imageSection.style.backgroundImage = `url('${eventImg.value})`;
  setTime();
};

settingsBtn.addEventListener('click', () => {
  settings.classList.toggle('active');
});

saveBtn.addEventListener('click', () => {
  updateAppContent();
});

updateAppContent();
setInterval(setTime, 1000);
