import { Link } from 'react-router-dom';
import AdminFooter from './admin/AdminFooter';

const PageNotAccess = () => {
  return (
    <>
    <div className="mt-32 h-[66vh]">
      <div className="text-center">
        <h1 className="mb-4 text-6xl font-semibold text-red-500">403</h1>
        <p className="mb-4 text-lg text-gray-600">Oops! You don{"'"}t have permission to access this page.</p>
        
        <div className="animate-bounce">
          <svg className="mx-auto h-16 w-16 text-red-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"></path>
          </svg>
        </div>
        <p className="mt-4 text-gray-600">If you believe this is an error, please contact your administrator.</p>
      </div>
          <p className="mt-10 text-center text-gray-600">
            If you are an admin, you can <Link to="/admin/login" className="text-blue-500">login here</Link>.
          </p>
    </div>

    <AdminFooter/>
    </>
  );
}

export default PageNotAccess;
