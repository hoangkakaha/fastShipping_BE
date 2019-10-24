const SocketController = (io) => {
    let connected = [];

    io.on('connection', (socket) => {
        //listen adduser
        socket.on('adduser', (username) => {
            //save
            socket.username = username;
            connected.push(username);

            //notify to myself
            const data = {
                sender: 'SERVER',
                message: 'You have join chat room'
            };

            socket.emit('server_message', data);

            //notify to other users
            const data2 = {
                sender: 'SERVER',
                message: username + ' has join chat room'
            }

            //notify all users
            socket.broadcast.emit('server_message', data2);
        });

        //listen user send message
        socket.on('send_message', (message) => {
            //notify to myself
            const data = {
                sender: 'YOU',
                message: message
            };

            socket.emit('update_message', data);

            //notify to other uses
            const data2 = {
                sender: socket.username,
                message: message
            };

            socket.broadcast.emit('update_message', data2);
        });

        //listen user disconnect 
        socket.on('disconnect', () => {
            //delete usrname
            connected = connected.filter(conn => {
                return conn !== socket.id;
            });
              

            //notify to other users
            const data = {
                sender: 'SERVER',
                message: socket.username + ' has left chat room'
            };

            socket.broadcast.emit('server_message', data);
        });
    });
}

module.exports = {
    SocketController
}
