import React, { useState } from "react";
import { Container, Form, Card, Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { registration, login } from "../http/userApi";
import { setUser, setAuth } from "../store/userSlicer";
import { LOGIN_ROUTE, REGISTRATION_ROUTE, SHOP_ROUTE } from "../utils/consts";

function Auth() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const location = useLocation()
  const isLogin = location.pathname === LOGIN_ROUTE;
  console.log(isLogin)

  const click = async () => {
    try {
      let data
      if (isLogin) {
        data = await login(email, password);
      } else {
        data = await registration(email, password);
      }
      dispatch(setUser(data))
      dispatch(setAuth(true))
      navigate(SHOP_ROUTE)
    } catch (error) {
      console.log(error)
      alert(error.response.data.message)
    }
    
  }

    return (
      <Container
        className="d-flex justify-content-center align-items-center"
        style={{height: window.innerHeight - 54}}
      >
        <Card style={{width: 600}} className="p-5">
          <h2 className="m-auto">{isLogin ? 'Авторизация' : 'Регистрация'}</h2>
          <Form className="d-flex flex-column">
            <Form.Control
              placeholder="Введите ваш email..."
              className="mt-3"
              value={email}
              onChange={e => setEmail(e.target.value)}
            />
            <Form.Control
              placeholder="Введите ваш пароль..."
              className="mt-3"
              value={password}
              onChange={e => setPassword(e.target.value)}
              type="password"
            />

            <Form className="d-flex justify-content-between mt-3">

              {isLogin ? 
                <div>
                Нет аккаунта? <NavLink to={REGISTRATION_ROUTE}>Зарегистрируйтесь!</NavLink>
                </div>
                :
                <div>
                Есть аккаунт? <NavLink to={LOGIN_ROUTE}>Войдите!</NavLink>
                </div>
              }

              <Button
                variant="outline-secondary"
                onClick={click}
              >
                {isLogin ? 'Войти' : 'Регистрация'}
              </Button>

            </Form>
          </Form>
        </Card>
      </Container>
    );
  }
  
  export default Auth;