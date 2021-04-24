import React, { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'

import Head from './head'
import Header from './header'

const Repos = () => {
  const { userName } = useParams()
  const [repos, setRepos] = useState([])

  useEffect(() => {
    fetch(`https://api.github.com/users/${userName}/repos`)
    .then((result) => result.json())  
    .then((it) => {
        setRepos(it)
    })
    return () => {}
  }, [userName])
  return (
    <div>
      <Head title="Repos" />
      <Header user={userName}/>
      <div className="flex items-center justify-center h-screen">
        <div className="bg-indigo-800 text-white font-bold rounded-lg border shadow-lg p-10">
          <ol className="">
            {repos.map((repo) => {
              return (
                <div key={repo.id}> 
                  <Link to={`/${userName}/${repo.name}`}>{repo.name}</Link>
                </div>
              )
            })}
          </ol>
        </div>
      </div>
    </div>
  )

}

Repos.propTypes = {}

export default React.memo(Repos)
