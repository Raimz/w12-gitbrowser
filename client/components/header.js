import React from 'react'
import { Link } from 'react-router-dom'

const Header = (props) => {
  return (
    <div className="flex flex-col justify-center items-center bg-indigo-800 text-white font-bold shadow-lg p2 w-screen">
      <div id="repository-name"> 
        {props.user}
      </div>
      <div id="go-back" className="rounded py-1 mt-2 px-4">
        <Link to="/">  Back </Link>
      </div>  
      <div id="go-repository-list" className="rounded py-1 mt-2 px-4">
        <Link to={`/${props.user}`}>  To repo list </Link>
      </div>
    </div>
  )
}

Header.propTypes = {}

export default React.memo(Header)
