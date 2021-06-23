import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Etapa1 } from '../pages/etapa1';
import { Etapa2 } from '../pages/etapa2';
import { Etapa4 } from '../pages/etapa4';
import { Etapa5 } from '../pages/etapa5';

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path="/" exact={true} component={Etapa1} />
      <Route path="/etapa2" exact={true} component={Etapa2} />
      <Route path="/etapa4" exact={true} component={Etapa4} />
      <Route path="/etapa5" exact={true} component={Etapa5} />
    </Switch>
  </BrowserRouter>,
  document.getElementById('root')
);
