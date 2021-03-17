// import API from './Api';
import AppController from './AppController';
import Layout from './Layout';
// import WS from './WebSocket';

const app = new AppController(new Layout());

app.initLogin();
