var toggleCarPark = function(carPark) {
  $(carPark).toggleClass('booked');
};

var renderParkList = function() {
  $('#booking-section, #summary-section').show();
};

var calculatePrice = function() {
  var totalCarPark = $('.booking-item').length;
	var totalBooked = $('.booked').length;
  var price = $('#price-input').val();
  $('#carpark-totalprice').text(price * totalBooked);
  $('#carpark-avaliable').text(totalCarPark - totalBooked);
};

var checkout = function() {
  var totalPrice = $('#carpark-totalprice').text();
  var totalBooked = $('.booked').length;
  alert(totalPrice + ' baht for ' + totalBooked + ' cars');
};

$(document).ready(function() {  
  $('.booking-item').on('click', function() {
    toggleCarPark(this);
    calculatePrice();
  });
  
  $('#price-input').on('change keyup', function() {
    calculatePrice();
  });

  $('#price-form').on('submit', function(e) {
    e.preventDefault();
    renderParkList();
  });

  $('#checkout').on('click', function() {
    checkout();
  });
});