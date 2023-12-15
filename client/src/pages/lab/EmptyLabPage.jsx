import { Link } from 'react-router-dom'

const EmptyLabPage = () => {
  return (
    <div>
              <div className="mt-10 mb-10">
        <div className="text-center">
          <h1 className="mb-4 text-4xl font-semibold text-red-500">No Laboratories Yet</h1>
          <p className="mb-4 text-lg text-gray-600">Oops! It seems there are no laboratories at the moment.</p>
          <div className="animate-bounce">
            <svg className="mx-auto h-16 w-16 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"></path>
            </svg>
          </div>
          <p className="mt-4 text-gray-600">Let{"'"}s get you back <Link to="/" className="text-blue-500">Home</Link>.</p>
        </div>
      </div>
    </div>
  )
}

export default EmptyLabPage