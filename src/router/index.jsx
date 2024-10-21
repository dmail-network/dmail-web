import React, { Suspense, lazy } from 'react';
import { Switch, Router, Route, Redirect } from 'react-router-dom';

const Inbox = lazy(() => import('@/pages/inbox/index'));
const Compose = lazy(() => import('@/pages/inbox/compose'));
const Setting = lazy(() => import('@/pages/setting/index'));
const Login = lazy(() => import('@/pages/login/index'));

const Routes = () => (
  <Suspense fallback={'loading...'}>
    <Switch>
      < Route exact path='/' component={Inbox} />
      < Route exact path='/inbox' component={Inbox} />
      < Route exact path='/compose' component={Compose} />
      < Route exact path='/setting' component={Setting} />
      < Route exact path='/login' component={Login} />
      {/* < Route exact path='/account' component={Account} /> */}
      
      <Redirect from="*" to='/' />
    </Switch>
  </Suspense>
);

export default Routes;
