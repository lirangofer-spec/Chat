(function () {
    const socket = io();

    socket.on('createRoom', app.createRoom);
    socket.on('message', app.newMessage);

    const server = {
        changeRoom(oldRoom, newRoom) {
            socket.emit('changeRoom', { oldRoom, newRoom });
                    const url = "http://localhost:3000/chat/?roomMessages="+newRoom;
                    $.getJSON(url, function (json) {
                        delete json._id;
                        console.log(json);
                        $(jQuery.parseJSON(JSON.stringify(json))).each(function() {  
                            delete this._id;
                            delete json._id;
                        });
                        console.log(json);
                        $.each(json, function () {
                            $.each(json, function () {
                            $.each(this, function (name, value) {
                            console.log(name + '=' + value);
                            $('.panel').append(
                                $('<li>').append(
                                    /*
                                    $('<b>').text(name+':').append('</b>').text(value)).
                                    append('</li>')
                                    */
                                   $('<b>').text(value+':').append('</b>').text(value))
                                   
                            ); 
                            
                            });
                            });
                            });




                    
                    });
                   
        },

        sendMessage(text) {
            socket.emit('message', text);
        },

        createRoom(roomName) {
            socket.emit('createRoom', roomName);
        },

        login(name) {
            socket.emit('login', { username: name });
        }
    };

    app.setServer(server);
}());