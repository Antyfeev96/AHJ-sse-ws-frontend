import AppController from './AppController';
import Layout from './Layout';

const app = new AppController(new Layout());

app.initLogin();
