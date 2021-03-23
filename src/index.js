import React from 'react'
import styles from './styles.module.css'
import LandingPage from './Pages/Landing/LandingPage'
import DashboardPage from './Pages/App/index'
import { Banner } from "./Components/Banner/Banner";
const ExampleComponent = ({ text }) => {
  return <div className={styles.test}>Example Component: {text}</div>
}

/**
 * @description Add components that you want to export from your library.
 * 
 */

export {
  ExampleComponent,
  LandingPage,
  Banner,
  DashboardPage
}
