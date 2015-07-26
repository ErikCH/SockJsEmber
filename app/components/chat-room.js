import Ember from 'ember';

export default Ember.Component.extend({
    message: '',

    setup: function() {
           this.get('sockjs').on('messageReceived',this, 'messageReceived');
//            this.get('sockjs');
    }.on('init'),

    messageReceived: function(message){
        this.set('message',message);
    }

});
