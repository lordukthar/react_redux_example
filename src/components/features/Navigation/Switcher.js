import React from "react"
import { Switch, Route } from "react-router-dom"
import Home, {
    UserPage,
    UsersPage,
    CounterPage,
    AddUserPage,
    LoginPage
} from "../../../pages"


const Switcher = () => (
    <Switch>
        <Route path="/user">
            <UserPage />
        </Route>
        <Route path="/users">
            <UsersPage />
        </Route>
        <Route path="/counter">
            <CounterPage />
        </Route>
        <Route path="/add-user">
            <AddUserPage />
        </Route>
        <Route path="/login">
            <LoginPage />
        </Route>
        <Route path="/">
            <Home />
        </Route>
    </Switch>)

export default Switcher