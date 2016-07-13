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
        login($user.val())
            .done(foo)
            .fail(error);
        $user.val('');
    });

    function foo(data) {
        console.log(data.token);
    }

    function login(username) {

        var xhr = $.ajax({
            url: '/login',
            method: 'post',
            headers: {
                'Content-Type': 'application/json'
            },
            data: JSON.stringify({username: username}),
            dataType: 'json'
        });
        return xhr;
    }


    // function displayChat(data) {
    //
    // }




})(window.chat);
