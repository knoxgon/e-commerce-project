import { Route, Redirect, Switch } from 'react-router-dom';
import PrivateRoute from './private';
import Home from '../component/Home/home';

const Routes = ({auth}) => {
  return (
    <Switch>
      <PrivateRoute exact path="/account" authenticated={auth.uid} />
      <Route path="/home" component={Home} />
      <Redirect to="/home"></Redirect>
    </Switch>
  );
}

const mapStateToProps = (state) => {
  return {
    auth: state.firebase.auth
  }
}

export default connect(mapStateToProps)(Routes)
