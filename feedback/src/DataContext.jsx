import { createContext, useState, useEffect } from "react";
import api from './api/post';
import { format } from 'date-fns';

const DataContext = createContext()

export const DataProvider = ({ children }) => {
    const [Posts, setPosts] = useState([])
    const [search, setSearch] = useState("")
    const [searchresult, setSearchresult] = useState([])
    const [title, setTitle] = useState("")
    const [body, setBody] = useState("")

    useEffect(() => {
        const fetchData = async () => {
         
                const res = await api.get("/feedback")
                console.log('Fetched data:', res.data)
                setPosts(res.data)
           
        }
        fetchData()
    }, [])

    useEffect(() => {
        const filteredPosts = Posts.filter((post) => 
            post.title.toLowerCase().includes(search.toLowerCase())
        )
        setSearchresult(filteredPosts)
    }, [Posts, search])

    const handleSubmit = async (e) => {
        e.preventDefault()
        const id = (Posts.length) ? (Number(Posts[Posts.length-1].id) + 1) : 1
        const datetime = format(new Date(), "MMM dd,yyyy hh:mm:ss")
        const newobj = { id: id, title: title, datetime: datetime, body: body }
        
        
            await api.post("/feedback", newobj)
            const newlist = [...Posts, newobj]
            setPosts(newlist)
            setTitle('')
            setBody('')
       
    }

    return (
        <DataContext.Provider value={{
            Posts, search,
            setSearch,
            searchresult,
            title,
            setTitle,
            body,
            setBody,
            handleSubmit
        }}>
            {children}
        </DataContext.Provider>
    )
}
export default DataContext