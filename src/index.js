import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import './index.css';
import Home from './pages/Home';
import CadastroVideo from './pages/cadastro/Video'

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path="/" component={Home} exact />
      <Route path="/cadastro/video" component={CadastroVideo} />
      <Route component={() => 'Página 404'} />
    </Switch>
  </BrowserRouter>,
  document.getElementById('root')
);
