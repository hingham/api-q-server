'use strict';

const io = require('socket.io-client');


const SERVER = process.env.Q_SERVER || 'http://localhost:3333';

class Q {

  constructor(q) {
    this.q = io.connect(`${SERVER}`);
    this.count = 0;
    this.pings = [];
  }

  /**
   * Publish an event (room) with payload 
   * @param queue
   * @param event
   * @param payload
   */

  resetCounter () {
    this.count= 0;
  }

  updatePings(){
      this.pings.push(this.count);
  }
   
  publish(queue, event, payload) {
    this.count +=1;
    let pings = this.pings;

      let count = this.count;
      console.log('in publish', payload);
    let message = {queue, event, payload, count, pings};
    this.q.emit('publish', message); 
  }
  
}

module.exports = Q;
