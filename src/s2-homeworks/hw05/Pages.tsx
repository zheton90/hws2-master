import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import Error404 from './pages/Error404'
import PreJunior from './pages/PreJunior'
import Junior from './pages/Junior'
import JuniorPlus from './pages/JuniorPlus'

export const PATH = {
    PRE_JUNIOR: '/pre-junior',
    JUNIOR: '/junior',
    JUNIOR_PLUS: '/junior-plus',
}

function Pages() {
    return (
        <div style={{ flexGrow: 1, margin: "70px"}}>
            {/*<PreJunior/>*/}
            {/*Routes выбирает первый подходящий роут*/}
            <Routes >
                <Route path={"/"} element={<Navigate to={'/pre-junior'} />}></Route>
                <Route path={PATH.PRE_JUNIOR} element={<PreJunior/>}></Route>
                <Route path={PATH.JUNIOR} element={<Junior/>}></Route>
                <Route path={PATH.JUNIOR_PLUS} element={<JuniorPlus/>}></Route>
                <Route path={"/error404"} element={<Error404/>}></Route>
                <Route path={"/*"} element={<Navigate to={'/error404'} />}></Route>
                {/*роутинг будут писать студенты*/}
                {/*в начале мы попадаем на страницу '/' и переходим сразу на страницу /pre-junior*/}
                {/*<Route ...*/}

                {/*роуты для /pre-junior, /junior, /junior-plus*/}
                {/*<Route ...*/}
                {/*<Route ...*/}
                {/*<Route ...*/}

                {/*роут для несуществующей страницы должен отрисовать <Error404 />*/}
                {/*<Route ...*/}
            </Routes>
        </div>
    )
}

export default Pages
