(function(ns){
    'use strict';
    window.chat = ns = (ns || {});

    var user = $('.username');
    var msg = $('.message');
    var msgField = $('.send-message');
    var token;

    $('.send-message input').hide();

    ns.listenForMessages(function messageHandler(data) {
        msgField
            .append('<p>' + data.message + ' ' + data.username + '</p>');
    });

    $('.login').on('submit', function sendUserName(event) {
        event.preventDefault();
        login(user.val())
            .done(startChat)
            .fail(error);
        user.val('');
    });

    function error(xhr) {
        msgField
            .append('<p>Sorry something isn\'t right, please check back later.</p>');
    }

    /**
     * What should happen when user submits login.
     * @param  {[object]} data [this is where token will be retrieved]
     * @return {token}         [this will be used later with the messages]
     */
    function startChat(data) {
        token = data.token;
    }

    /**
     * login will submit username and retrieve xhr object for the token
     * @param  {[string]} username [what the user types as their username]
     * @return {object}            [xhr object that contains the token that will be used]
     */
    function login(username) {
        $('.login').hide();
        $('.send-message input').show();
        return $.ajax({
            url: '/login',
            method: 'post',
            headers: {
                'Content-Type': 'application/json'
            },
            data: JSON.stringify({'username': username}),
            dataType: 'json'
        });
    }


    msgField.on('submit', function submitText(event) {
        event.preventDefault();

        sendMsg(msg.val())
            .done(clearMsg)
            .fail(error);
    });

    /**
     * clears message
     * @return {void}
     */
    function clearMsg() {
        msg.val('');
    }

    /**
     * what happens when a message is sent
     * @param  {[string]} message [the message]
     * @return {[object]}         [xhr object data]
     */
    function sendMsg(message) {
        return $.ajax({
            url: '/chat',
            method: 'post',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': token
            },
            data: JSON.stringify({ 'message': message }),
            dataType: 'json'
        });
    }

})(window.chat);
