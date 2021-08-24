import React from 'react';
import ReactDOM from 'react-dom';
import { createServer, Model } from 'miragejs';
import { App } from './App';

createServer({
  models: {
    trasaction: Model,
  },

  routes() {
    this.namespace = 'api'; //todas chamadas a api vão esta a partir do .../api/
    this.get('/transitions', () => {
      return this.schema.all('trasaction');
    });

    this.post('/transitions', (schema, request) => {
      const data = JSON.parse(request.requestBody);

      return schema.create('trasaction', data);
    });
  }
})

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
