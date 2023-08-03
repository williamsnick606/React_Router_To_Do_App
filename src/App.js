import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

import Layout from './components/Layout';
import Home from './components/Home';
import About from './components/About';
import Posts from './components/Posts';

const App = () => {
  return (
	<Router>
		<Routes>
			<Route path="/" element={<Layout />}>
				<Route index element={<Home />} />
				<Route path="about" element={<About />} />
				<Route path="posts" element={<Posts />} />
			</Route>
		</Routes>
	</Router>
  );
};

export default App;
