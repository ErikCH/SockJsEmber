/* global SockJS */
import Ember from 'ember';
var run = Ember.run;

export default Ember.Service.extend(Ember.Evented,{
    setupSockjs: function() {
        var socket = new SockJS('http://localhost:7000/echo');
        socket.addEventListener('message', run.bind(this, function(event) {
            this.trigger('messageReceived', event.data);
            console.log(event.data);
        }));
    }.on('init')
});
