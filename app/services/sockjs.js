/* global SockJS */
import Ember from 'ember';
var run = Ember.run;
var socket;

export default Ember.Service.extend(Ember.Evented,{
    socket: '',
    setupSockjs: function() {
        socket = new SockJS('http://localhost:7000/echo');
        socket.addEventListener('message', run.bind(this, function(event) {
            this.trigger('messageReceived', event.data);
            console.log('received: ' + event.data);
        }));
    }.on('init'),
    sendInfo: function(message) {
        socket.send(message);
        console.log(socket);
    }
});
