(function(ns){
    'use strict';
    window.chat = ns = (ns || {});


    ns.listenForMessages(function messageHandler(data) {
        var messageSection = $('.messages');
        messageSection.append('<p>' + data.username + ' ' + data.message + '</p>');
    });

    var $user;
    // var $msg = $('.message').val();

    $('form').on('submit', function (event) { //TODO name this function
        event.preventDefault();
        $user = $('.username').val();
        login($user);
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
        .done(function displayChat(data){
            console.log(data);
        })
        .fail(function errorMsg(xhr){
            console.log('test = fail for some reason');
        });
    }




})(window.chat);
