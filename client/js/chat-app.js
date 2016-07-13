(function(ns){
    'use strict';
    window.chat = ns = (ns || {});


    ns.listenForMessages(function messageHandler(data) {
        var messageSection = $('.messages');
        messageSection.append('<p>' + data.message + ' ' + data.username + '</p>');
    });

    var $user = $('.username');
    var $msg = $('.message');

    $('form').on('submit', function (event) { //TODO name this function
        event.preventDefault();
        login($user.val());
        $user.val('');
    });

    function login(username) {
        $.ajax({
            url: '/login',
            method: 'post',
            headers: {
                'Content-Type': 'application/json'
            },
            data: JSON.stringify({username: username}),
            dataType: 'json'
        })
        .done(function(data){
            displayChat(data);
        })
        .fail(function errorMsg(xhr){
            console.log('test = fail for some reason');
        });
    }

    function displayChat(data) {
        
    }




})(window.chat);
