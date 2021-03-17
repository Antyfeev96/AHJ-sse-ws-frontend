/* eslint-disable consistent-return */
/* eslint-disable no-return-await */
/* eslint-disable class-methods-use-this */
// export default class WS {
//   constructor() {
//     this.ws = new WebSocket('ws://localhost:7070/ws');
//   }

//   init() {
//     this.ws.addEventListener('open', () => this.openListener());
//     this.ws.addEventListener('message', (e) => this.messageListener(e));
//     this.ws.addEventListener('close', (e) => this.closeListener(e));
//     this.ws.addEventListener('error', () => this.errorListener());
//   }

//   openListener() {
//     this.ws.send('hello!');
//   }

//   messageListener(e) {
//     if (e.data === 'welcome') {
//       console.log(e.data);
//       return;
//     }

//     console.log(JSON.parse(e.data));
//     return JSON.parse(e.data);
//   }

//   closeListener(e) {
//     console.log('connection closed', e);
//   }

//   errorListener() {
//     console.log('error');
//   }
// }
