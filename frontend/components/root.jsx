import React from 'react';
import { Provider } from 'react-redux';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';
import App from './app';
import Home from './Home';

const Root = ({store}) => (
	<Provider store={store}>
		<MuiThemeProvider>
			<Router history={browserHistory}>
				<Route path="/" component={ App } >
					<IndexRoute component={Home} />
				</Route>
			</Router>
		</MuiThemeProvider>
	</Provider>
);

export default Root;