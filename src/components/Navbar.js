import { Link } from 'react-router-dom'

function Navbar() {
    
  return (
    <nav className="gradient w-full z-30 top-0 text-white py-1 lg:py-6">
      <div className="w-full container mx-auto flex items-center justify-between mt-0 px-6 py-2 lg:px-2 lg:py-6">
        <div className="flex items-center">
          <Link className="text-white no-underline hover:no-underline font-bold text-2xl lg:text-4xl" to="/">
            <svg className="h-6 w-6 inline-block fill-current text-yellow-700" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" >
              <path d="M13 8V0L8.11 5.87 3 12h4v8L17 8h-4z" />
            </svg>
            React Blog
          </Link>
        </div>

        <Link to="/create" className="gradient2 hover:underline text-gray-800 font-extrabold rounded py-2 px-4 shadow opacity-75">
            New Article
        </Link>
      </div>
    </nav>
  )
}

export default Navbar