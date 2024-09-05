import React from 'react'
import { useLoaderData } from 'react-router-dom'

function Github() {
    const data = useLoaderData()

  return (
    <div className=" mx-auto bg-gray-800 text-white rounded-lg shadow-lg overflow-hidden my-8">
      <div className="p-6 text-center">
        <h2 className="text-4xl font-bold mb-4">GitHub Profile</h2>
        <img 
          src={data.avatar_url} 
          alt="GitHub Avatar" 
          className="rounded-full mx-auto mb-4 border-4 border-gray-600"
          width={150} 
        />
        <h3 className="text-2xl font-semibold">{data.login}</h3>
        <p className="text-gray-400">Followers : {data.followers}</p>
        <p className="text-gray-400">Public Repos : {data.public_repos}</p>
          {data.bio && (
            <p className="mt-4 text-gray-300 italic">"{data.bio}"</p>
          )}
          {data.location && (
            <p className="text-gray-400 mt-2">📍 {data.location}</p>
          )}
        <p className="mt-6">
          <a 
            href={data.html_url} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-blue-400 hover:underline">
            Visit GitHub Profile
          </a>
        </p>
      </div>
    </div>
  )
}

export default Github


export const githubInfoLoader = async () => {
    const response = await fetch('https://api.github.com/users/rushhaabhhh')
    return response.json()
}