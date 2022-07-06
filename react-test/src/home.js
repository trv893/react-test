import { useState } from 'react';

const Home = () => {
    const [blogs, setName] = useState([
        { title: "sfgbs", body: 'sakjdbjkasf', author: 'thomas', id: 1 },
        { title: "fghfghsfgbs", body: 'bbbbsakjdbjkasf', author: 'sam', id: 2 },
        { title: "retrtrsfgbs", body: 'zzzsakjdbjkasf', author: 'jake', id: 3 }
    ]);
    return ( 
        <div className="home">
            <h2>Home Page</h2>
            {blogs.map((b) => (
                <div className="blog-preview" key={b.id}>
                <h2> {b.title} </h2>
                <p>written by: { b.author } </p>
                </div>

            ))}
        </div>
     );
}
 
export default Home;