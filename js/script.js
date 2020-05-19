'use strict';

$( document ).ready(function() {
  $('.js-trigger').on('click', function() {
     $('.modal').toggleClass('open');
     $('.modal-wrapper').toggleClass('close');
     return false;
  });
});