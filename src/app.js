import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';
import 'normalize.css/normalize.css';
import './styles/styles.scss';

const ExpenseDashboardPage = () => (
  <div>
    This is from my dashboard
  </div>
);

const AddExpensePage = () => (
  <div>
    This is my add expense page
  </div>
);

const EditExpensePage = () => (
  <div>
    This is edit page
  </div>
);

const HelpPage = () => (
  <div>
    This is help page
  </div>
);
  


const routes = (
  <BrowserRouter>
    <div>
      <Route path="/" component={ExpenseDashboardPage} exact={true}/>
      <Route path="/create" component={AddExpensePage}/>
      <Route path="/edit" component={EditExpensePage}/>
      <Route path="/help" component={HelpPage}/>
    </div>
  </BrowserRouter>
);


ReactDOM.render(routes, document.getElementById('app'));
