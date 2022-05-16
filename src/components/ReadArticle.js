import { useNavigate, useParams } from "react-router-dom"
import useFetch from "./useFetch"


function ReadArticle() {
    const {id} = useParams()
    const {fetchData: articles, isLoading, error} = useFetch(`http://localhost:8000/blogs/${id}`, 100);
    const navigate = useNavigate();

    function handleDelete() {
        fetch(`http://localhost:8000/blogs/${id}`, {
            method: "DELETE"
        }).then(() => navigate("/"))
    }

  return (
    <div>
        {isLoading && <p className="w-80 text-red-600 text-xl px-6 mt-6 mx-auto">Articles are loading...</p>}
        { error && <p className="w-80 text-red-600 text-xl px-6 mt-6 mx-auto">{error}</p> }
        {articles && 
            <div className="w-full sm:px-9 px-3">
                <h2 className="w-full font-bold text-xl text-gray-800 px-6 mt-6">{ articles.title }</h2>
                <p className="w-full text-gray-600 text-xs md:text-sm px-6 py-4 mt-1">Written by { articles.author }</p>
                <p className="w-full text-gray-600 text-justify text-xl md:text-xl px-6 mt-1">{articles.body}</p>
                <button className="py-1 px-2 mt-1 ml-6" onClick={handleDelete}>Delete Article</button>
            </div>
            // <Article articles={articles} />
        }
    </div>
  )
}

export default ReadArticle