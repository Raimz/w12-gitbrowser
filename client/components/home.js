import React, { useState } from 'react'
import Head from './head'

import { history } from '../redux'

const Home = () => {
  const [value, setValue] = useState('')
  
  const onChangeValue = (e) => {
    setValue(e.target.value)
  }

  const onClickHistoryPush = () => {
    history.push(`/${value.trim()}`)
  }

  return (
    <div>
      <Head title="Home" />
      <div className="flex items-center justify-center h-screen">
        <div className="bg-indigo-800 text-white font-semibold rounded-lg border shadow-lg p-8">
          <div className="flex justify-center mb-2"> Enter username </div>
          <input 
            type="text"
            className="rounded p-2 text-black"
            id="input-field"
            onChange={onChangeValue}
            value={value}
          />
          <div className="flex justify-center"> 
            <button 
              type="button" 
              className="flex rounded py-1 mt-2 px-4 bg-gray-100 shadow text-black font-bold hover:bg-gray-200"
              id="search-button"
              onClick={onClickHistoryPush}
            >
              Search
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

Home.propTypes = {}

export default Home
