export function initialize( container, application ) {
   application.inject('component', 'sockjs', 'service:sockjs');
}

export default {
  name: 'websockets',
  initialize: initialize
};
