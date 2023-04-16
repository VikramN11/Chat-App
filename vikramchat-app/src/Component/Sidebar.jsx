import React from 'react'
import Navbarside from './Navbarside'
import Search from './Search'
import Chatbar from './Chatbar'

const Sidebar = () => {
  return (
    <div className="sidebar">
        <Navbarside />
        <Search />
        <Chatbar />
    </div>
  )
}

export default Sidebar