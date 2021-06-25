import React from 'react'
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import Search from '../pages/Search'

import Home from '../pages/Home'
import Simpsons from '../pages/Simpsons'

const Routes = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path = '/' component= {Home}/>
                <Route path = '/simpsons' component= {Simpsons}/>
                <Route path='/search' component= {Search}/>
            </Switch>
        </BrowserRouter>
    )
}
export default Routes