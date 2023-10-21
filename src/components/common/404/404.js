import { useEffect } from 'react'
import './404.css'

export const Error404 = () => {

  useEffect(() => {
      document.title = '404 Page not found.'
  }, [])

  return (
    <section className='error-404'>
        <h1>404 Page not faund</h1>
    </section>
  )
}