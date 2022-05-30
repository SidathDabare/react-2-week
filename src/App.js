/** @format */

import "./App.css"
import "bootstrap/dist/css/bootstrap.min.css"
import MyNav from "./components/MyNav"
import BookList from "./components/BookList"

function App() {
  return (
    <div className='App'>
      <MyNav />
      <BookList />
    </div>
  )
}

export default App
