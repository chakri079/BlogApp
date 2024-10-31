import { createBrowserRouter, RouterProvider, Navigate } from 'react-router-dom';
import './App.css';
import RootLayout from './RootLayout';
import Home from './components/home/Home';
import Signup from './components/signup/Signup';
import Signin from './components/signin/Signin';
import UserProfile from './components/user-profile/UserProfile';
import AuthorProfile from './components/author-profile/AuthorProfile';
import ArticlesByAuthor from './components/articles-by-author/ArticlesByAuthor';
import Article from './components/article/Article';
import AddArticle from './components/add-article/AddArticle';
import Articles from './components/Articles/Articles';
//import NotFound from './components/NotFound'; // Import your NotFound component
import { useSelector } from 'react-redux';

function App() {
  let { currentUser } = useSelector((state) => state.userLogin);

  const browserRouter = createBrowserRouter([
    {
      path: '/',
      element: <RootLayout />,
      children: [
        {
          path: '', // This should route to Home component
          element: <Home />
        },
        {
          path: '/signup',
          element: <Signup />
        },
        {
          path: '/signin',
          element: <Signin />
        },
        {
          path: '/user-profile',
          element: <UserProfile />,
          children: [
            {
              path: 'articles',
              element: <Articles />
            },
            {
              path: 'article/:articleId',
              element: <Article />
            },
            {
              path: '',
              element: <Navigate to='articles' />
            }
          ]
        },
        {
          path: '/author-profile',
          element: <AuthorProfile />,
          children: [
            {
              path: 'new-article',
              element: <AddArticle />
            },
            {
              path: 'articles-by-author/:username',
              element: <ArticlesByAuthor />
            },
            {
              path: 'article/:articleId',
              element: <Article />
            },
            {
              path: '',
              element: <Navigate to={`articles-by-author/${currentUser?.username}`} />
            }
          ]
        },
        {
          path: '*', // Catch-all route for 404 Not Found
          element: <Home /> // Ensure you have a NotFound component
        }
      ]
    }
  ]);

  return (
    <div>
      <RouterProvider router={browserRouter}></RouterProvider>
    </div>
  );
}

export default App;
