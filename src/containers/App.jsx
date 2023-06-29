import { Suspense } from 'react';
import { connect } from 'react-redux';

// Dispatch Redux Action Mapping
import { setLoading } from '../store/actions/LoadingReduxAction';

// UI Component Mapping
import Spinner from '../components/UI/Spinner/SpinnerComponent';

// Application Routing
import AppRouter from '../routes/AppRouter';

import './App.css';

const mapStateToProps = (state) => {
  console.log(state);
  const { authReducer, loadingReducer } = state;
  const { user, isLogin } = authReducer;
  const { isLoading } = loadingReducer;

  return {
    user,
    isLogin,
    isLoading
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setLoading: (isLoading) => {
      dispatch(setLoading(isLoading));
    }
  }
};

function App(props) {

  return (
    <div>
      <Suspense fallback={<Spinner />}>
        <AppRouter />
      </Suspense>
    </div>
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(App);