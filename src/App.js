import React from 'react'
import { Provider } from 'react-redux'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import { store } from './redux/store'
import { routes } from './routes'

import Navigation from './components/navigation'
// import ThemeGlobal from './styles/themeGlobal'
import CustomBackground from './components/background'


const App = () => {

  return (
    <Provider store={store}>
      <BrowserRouter>
          {/* <ThemeGlobal> */}
            <Navigation/>
            <CustomBackground/>
            <Switch>
              {
                routes.map((item) => {

                  return (
                    <Route key={item.key} path={item.path} component={item.component} exact/>
                  )
                })
              }
            </Switch> 
          {/* </ThemeGlobal> */}
      </BrowserRouter>
    </Provider>
  );
}

export default App;
