import Article from "./Article";
import useFetch from "./useFetch";

const Home = () => {
    const {fetchData: articles, isLoading, error} = useFetch("https://my-json-server.typicode.com/Aphatheology/React_Mini_Blog/blogs", 400)

    // const handleDelete = (id) => {
    //     // const newFetchData = articles.filter(article => article.id !== id);
    //     // setArticles(newfetchData);
    //   }

  return (
    <div className="home">
        { error && <p className="w-80 text-red-600 text-xl px-6 mt-6 mx-auto">{error}</p> }
        {isLoading && <p className="w-80 text-red-600 text-xl px-6 mt-6 mx-auto">Articles are loading...</p>}
        {articles && <Article articles={articles} />}
    </div>
  );
}
 
export default Home;