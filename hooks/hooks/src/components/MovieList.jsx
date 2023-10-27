import React , {useState} from "react";
import MovieCard from "./MovieCard";


const MovieList = () => {
    const [list, setList] = useState([])
    const [title, setTitle] = useState([])
    const [description, setDescription] = useState([])
    const [posterUrl, setPosterUrl] = useState([])
    const [rating, setRating] = useState([])
    const [searchByTitle, setSearchByTitle] = useState([])
    const [searchByRating, setSearchByRating] = useState([])


    const handleSubmit =(e) => {
        e.preventDefault()
        setList([...list, {title, description, posterUrl, rating}])
    }

    const SearchingByTitle = (e) => {
        e.preventDefault()
        setList(list.filter((el)=>el.title.includes(searchByTitle)))
    }
    const SearchingByRating = (e) => {
        e.preventDefault()
        setList(list.filter((el)=>el.rating === (searchByRating)))
    }
    

    return(
    <>
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder="Title" onChange={(e)=> setTitle(e.target.value)}/>
            <input type="text" placeholder="Description" onChange={(e)=> setDescription(e.target.value)}/>
            <input type="text" placeholder="Poster URL" onChange={(e)=> setPosterUrl(e.target.value)}/>
            <input type="number" placeholder="Rating" onChange={(e)=> setRating(e.target.value)}/>
            <button type="submit">Add</button>
        </form>

        <form onSubmit={SearchingByTitle}>
            <input type="text" placeholder="Search by Title" onChange={(e)=> setSearchByTitle(e.target.value)}/>
            <button type="submit">Search</button>
        </form>

        <form onSubmit={SearchingByRating}>
            <input type="text" placeholder="Search by Rating" onChange={(e)=> setSearchByRating(e.target.value)}/>
            <button type="submit">Search</button>
        </form>

        { list.map((el)=> (<MovieCard title={el.title} description={el.description} posterUrl={el.posterUrl} rating={el.rating}/> ))}
    </>
)}

export default MovieList;