const hotelsSearchButton = document.getElementById("hotels-search");
const hotelsSearchForm = document.getElementById("hotels-search-form");
const hotelsSearchCheckInDate = document.getElementById("search-form__check-in-date");
const hotelsSearchCheckOutDate = document.getElementById("search-form__check-out-date");

hotelsSearchForm.classList.add("visually-hidden");

/* Открытие формы */
hotelsSearchButton.addEventListener("click", function(evt) {
  evt.preventDefault();
  hotelsSearchForm.classList.toggle("visually-hidden");
  hotelsSearchForm.classList.toggle("search-form--show");
  hotelsSearchForm.classList.remove("search-form--error");
});

/* Проверка формы на ошибки перед отпавркой */
hotelsSearchForm.addEventListener("submit", function(evt) {
  if (hotelsSearchCheckInDate.value == "" || hotelsSearchCheckOutDate.value == "") {
    evt.preventDefault();
    hotelsSearchForm.classList.remove("search-form--error");
    hotelsSearchForm.offsetWidth = hotelsSearchForm.offsetWidth;
    hotelsSearchForm.classList.add("search-form--error");
  }
});

/* Интерактивная карта с индивидуальным маркером в виде логотипа */
function mainMap() {
  const coordinates = {
    lat: 34.86,
    lng: -111.77
  };
  const image = "img/site_logo.svg";
  const map = new google.maps.Map(document.getElementById("map"), {
    center: coordinates,
    zoom: 14
  });
  marker = new google.maps.Marker({
    position: coordinates,
    map: map,
    icon: image,
    animation: google.maps.Animation.BOUNCE
  });

}
