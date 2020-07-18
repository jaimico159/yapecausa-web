import React from "react";
import Login from "./components/Login";
import { Container } from "@material-ui/core";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import RegistroUsuario from "./components/RegistroUsuario";
import RegistroNegocio from "./components/RegistroNegocio";
import PerfilUsuario from "./components/PerfilUsuario";
import PerfilNegocio from "./components/PerfilNegocio";

function App() {
  return (
    // <Container fixed>
    //   <Login />
    // </Container>
    <Router>
      <Container fixed>
        <Switch>
          <Route path={'/login'} component={Login}></Route>
          <Route path={'/registro-usuario'} component={RegistroUsuario}></Route>
          <Route path={'/registro-negocio'} component={RegistroNegocio}></Route>
          <Route path={'/perfil-usuario'} component={PerfilUsuario}></Route>
          <Route path={'/perfil-negocio'} component={PerfilNegocio}></Route>
        </Switch>
      </Container>
    </Router>
  );
}

export default App;
