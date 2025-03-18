import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
    return (
        <section>
            <h2>Home</h2>
            <p>Welcome to our website!</p>
            <div>
                <Link>
                    Dashboard
                </Link>
                <Link>
                    Dashboard
                </Link>
            </div>
        </section>
    )
}

export default Home