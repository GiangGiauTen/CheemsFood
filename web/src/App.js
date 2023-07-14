import React, { useState } from 'react'
import { Routes, BrowserRouter as Router, Route, Link, NavLink, useNavigate } from 'react-router-dom'
import Home from './components/Home'
import LoginForm from './components/LoginForm'
import RegisterForm from './components/RegisterForm'
const App = () => {
	return (
		<div>
			<Router>
				<Routes>
					<Route path='/login' element={<LoginForm />} />
					<Route path='/' exact element={<Home />} />
					<Route path='/register' element={<RegisterForm />} />
				</Routes>
			</Router>
		</div>
	)
}
export default App
