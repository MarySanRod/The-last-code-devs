import { Switch, Route, BrowserRouter} from "react-router-dom";
import Inicio from '../components/Inicio'
import GestionUsuario from '../components/GestionUsuario'
import PaginaPrincipal from '../components/PaginaPrincipal'

const Routes = () => {
    return (
        <BrowserRouter>
        
            <Switch>
                <Route exact path='/' component={Inicio} />
                <Route exact path='/PaginaPrincipal' component={PaginaPrincipal} />
                <Route exact path='/GestionUsuario' component={GestionUsuario} />
            </Switch>

        </BrowserRouter>
    )
}

export default Routes;