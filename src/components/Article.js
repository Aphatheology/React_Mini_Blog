import { Link } from "react-router-dom";

function Article({ articles, handleDelete }) {
    
      return (
        <div className="home w-full sm:px-9 px-3">
          {articles.map(article => (
            <div className="blog-preview py-1 border-b-2 border-solid border-violet-800" key={article.id} >
                <Link to={`/article/${article.id}`}>
                    <h2 className="w-full font-bold text-xl text-gray-800 px-6 mt-6">{ article.title }</h2>
                    {/* <p className="w-full text-gray-600 text-xs md:text-sm px-6 mt-1">Written by { article.author }</p>
                    <button className="py-1 px-2 mt-1 ml-6" onClick={() => handleDelete(article.id)}>Delete Article</button> */}
                </Link>
                    <p className="w-full text-gray-600 text-xs md:text-sm px-6 mt-1">Written by { article.author }</p>
                    {/* <button className="py-1 px-2 mt-1 ml-6" onClick={() => handleDelete(article.id)}>Delete Article</button> */}
              
            </div>
          ))}
        </div>
      );
}

export default Article