import React from "react";
import { Button, Navbar } from "react-bootstrap";
import { Container } from "react-bootstrap";
import { Nav } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { selectIsAuth, selectUser } from "../store/selectors";
import { inputAccount, setAuth, setUser } from "../store/userSlicer";
import { ADMIN_ROUTE, CATALOG_ROUTE, LOGIN_ROUTE, SHOP_ROUTE } from "../utils/consts";
import { NavLink, useNavigate } from "react-router-dom";

function Navigation() {

  const navigate = useNavigate();
  const isAuth = useSelector(selectIsAuth);
  const dispatch = useDispatch();

  const authorizing = () => {
    navigate(LOGIN_ROUTE)
  }

  const LogOut = () => {
    dispatch(setUser({}))
    dispatch(setAuth(false))
  }

  const user = useSelector(selectUser)
  console.log(user)
  return (
    <>
      <Navbar bg="light" variant="light">
          <Container>
              <NavLink style={{color: 'black'}} to={SHOP_ROUTE}>FlowersJoy</NavLink>
              <Nav className="m-auto">
                  <NavLink style={{color: 'gray'}} className="m-3" to={CATALOG_ROUTE}>КАТАЛОГ</NavLink>
                  <NavLink style={{color: 'gray'}} className="m-3" to={SHOP_ROUTE}>О НАС</NavLink>
                  <NavLink style={{color: 'gray'}} className="m-3" to={SHOP_ROUTE}>КОМПАНИЯМ</NavLink>
              </Nav>
              {isAuth ?
                <Nav className="ml-auto">
                  {user.role === 'ADMIN' ?
                    <Button
                      variant={"outline-dark"}
                      className="m-1"
                      onClick={() => navigate(ADMIN_ROUTE)}
                      >
                        Админ панель
                    </Button>
                    :
                    false
                  }
                  <Button
                    variant={"outline-dark"}
                    className="m-1"
                    onClick={LogOut}
                    >
                      Выйти
                    </Button>
                </Nav>
                :
                <Nav className="ml-auto">
                  <Button variant={"outline-dark"} onClick={authorizing}>Авторизация</Button>
                </Nav>
              }
          </Container>
      </Navbar>
    </>
  );
}

export default Navigation;