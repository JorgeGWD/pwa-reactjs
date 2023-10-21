import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { Card } from './components/card/card'
import { Details } from './components/details/details'

const router = createBrowserRouter([
    {
        path: '/',
        element: <Card />,
        errorElement: <h1>Error</h1>
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