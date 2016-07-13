(function(ns){
    'use strict';
    window.chat = ns = (ns || {});

    var $user;
    var $msg;
    var messageSection = $('.messages');

    ns.listenForMessages(function messageHandler(data) {
        $user = data.username;
        $msg = data.message;
        messageSection.append('<p>' + $user + ' ' + $msg + '</p>');
    });



})(window.chat);
