import API from './Api';
import AppController from './AppController';
import Layout from './Layout';

const app = new AppController(new Layout(), new API('http://localhost:7070/'));

app.initLogin();
