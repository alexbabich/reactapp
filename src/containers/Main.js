import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Home from './Home'
import Actors from './../components/actors'
import Films from './../components/films'

const Main = () => (
    <main>
        <Switch>
            <Route exact path='/' component={Home}/>
            <Route path='/actors' component={Actors}/>
            <Route path='/films' component={Films}/>
        </Switch>
    </main>
)

export default Main
