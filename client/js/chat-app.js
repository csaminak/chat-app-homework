(function(ns){
    'use strict';
    window.chat = ns = (ns || {});


    ns.listenForMessages(function messageHandler(data) {
        var messageSection = $('.messages');
        messageSection.append('<p>' + data.username + ' ' + data.message + '</p>');
    });


    var $msg = $('.message').val();

    $('form').on('submit', function (event) { //TODO name this function
        event.preventDefault();
        var $user = $('.username').val();
        login($user);
    });

    function login(username) {
        console.log(username);
    }




})(window.chat);
