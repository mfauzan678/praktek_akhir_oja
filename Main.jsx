import React, {useState, useEffect} from "react";
import "./main.css"

export function Main() {
    const [posts, setPosts] = useState([]) 

    useEffect(() => {
        const getRandomMeal = async() => {
            try {
                const response = await fetch(
                    "www.themealdb.com/api/json/v1/1/random.php"
                );
                const data = await response.json();
                console.log(data);
                setPosts(data);
            } catch (error) {
                console.log(error);
            }
        }
        getRandomMeal()
    }, [])

    if (!posts) {
        <p>Loading...</p>
    }

    return (
        <div className="main-container">
            <h1>Random Meal of the Day...</h1>

            {posts.map(post => {
                return(
                <div key={post.idMeal}>
                    <h3>{post.strMeal} halooo</h3>
                    <p>{post.strArea}</p>
                    {/* <ul>
                        <li>{...post.strIngredients1}</li>
                    </ul> */}
                </div>
                )
            })}
        </div>
    )
}