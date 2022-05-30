/** @format */

import "./App.css"
import "bootstrap/dist/css/bootstrap.min.css"
import MyNav from "./components/MyNav"
import MyFooter from "./components/MyFooter"
import Welcome from "./components/Welcome"
//import SingleBook from "./components/SingleBook"
import WarningSign from "./components/WarningSign"
import MyBadge from "./components/MyBadge"
import BookList from "./components/BookList"

function App() {
  return (
    <div className='App'>
      <MyNav />
      <WarningSign alert='hello' />
      <MyBadge color='success' />
      <Welcome />
      <BookList />
      <MyFooter />
    </div>
  )
}

export default App
