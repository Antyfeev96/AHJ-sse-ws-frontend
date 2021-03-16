import API from './Api';
import AppController from './AppController';
import Layout from './Layout';
import WS from './WebSocket';

const app = new AppController(new Layout(), new API('http://localhost:7070/'), new WS());

app.initLogin();
