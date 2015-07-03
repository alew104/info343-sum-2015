"use strict";

//initialize Parse library with your application ID and your app's JavaScript library key
Parse.initialize('PMRBASNRndF9U2SCtipGUNOhcYthMwEcJQJLmcxj', 'XH7KP60iAPjuSIv8zfOCLp1dHPH9f1imSZud8FTA');

/**
 * Shows an error in an element on the page with the class 'error-message'
 * @param err {Object} the error to be shown
 */
function showError(err) {
    $('.error-message').html(err.message).fadeIn();
}


/**
 * Clears any currently showing error
 */
function clearError() {
    $('.error-message').fadeOut().empty();
}
