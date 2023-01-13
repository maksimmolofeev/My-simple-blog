import './style_css/App.css';
import { BrowserRouter } from 'react-router-dom';
import AppRouter from './components/AppRouter';
import Navigation from './components/Navigation';
import { useDispatch, useSelector } from 'react-redux';
import { selectUser } from './store/selectors';
import { useEffect, useState } from 'react';
import { check } from './http/userApi';
import { setAuth } from './store/userSlicer';
import { Spinner } from 'react-bootstrap';

function App() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  const [loading, setLoading] = useState(true)

  useEffect(() => {
    check().then(data => {
      dispatch(setAuth(true))
    }).finally (() => {
      setLoading(false)
    })
  }, [])

  if (loading === true) {
    return <Spinner animation={'grow'} />
  }

  return (
    <>
      <BrowserRouter>
        <Navigation />
        <AppRouter />
      </BrowserRouter>
    </>
  );
}

export default App;