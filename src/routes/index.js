import React, { PropTypes } from 'react'
import { Router, Route, IndexRedirect } from 'react-router'
import NotFound from '../components/NotFound'
import Main from '../components/Main'
import Index from '../components/Index'
import Menu0Index from '../components/0/Index'
import Menu1Index from '../components/1/Index'
import Menu1Detail from '../components/1/Detail'
import Menu2Index from '../components/2/Index'
import Menu2Detail from '../components/2/Detail'
import Menu2Content from '../components/2/Content'
import Menu2Map from '../components/2/Map'

const Routes = ({ history }) =>
  <Router history={history}>
    <Route path="/">
    	<IndexRedirect to="index" />
    	<Route component={Main}>
        <Route path="index" component={Index}></Route>
        <Route path="0/index" component={Menu0Index}></Route>
        <Route path="1/index" component={Menu1Index}></Route>
        <Route path="1/detail/:id" component={Menu1Detail}></Route>
        <Route path="2/index" component={Menu2Index}></Route>
        <Route path="2/detail/:id" component={Menu2Detail}></Route>
        <Route path="2/content/:id/:unittype" component={Menu2Content}></Route>
        <Route path="2/map/:url" component={Menu2Map}></Route>
    	</Route>
	    <Route path="*" component={NotFound}></Route>
    </Route>
  </Router>

Routes.propTypes = {
  history: PropTypes.any,
}

export default Routes
