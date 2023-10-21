import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { Card } from './components/card/card'
import { Details } from './components/details/details'
import { Error404 } from './components/common/404/404'

const router = createBrowserRouter([
    {
        path: '/',
        element: <Card />,
        errorElement: <Error404 />
    },
    {
        path: '/character-details/:id',
        element: <Details />
    }
])

function App() {
    return (
        <div className="App">
           <RouterProvider router={router} />
        </div>
    )
}

export default App