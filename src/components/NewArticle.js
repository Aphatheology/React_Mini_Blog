import { useState } from "react"
import { useNavigate } from "react-router-dom"


function NewArticle() {
    const [form, setForm] = useState({
        title: "",
        author: "",
        body: ""
    })

    const navigate = useNavigate();

    function handleFormChange(event) {
        const {name, value} = event.target
        setForm(prevForm => ({
            ...prevForm,
            [name]: value
        }))
    }

    function handleFormSubmit(e) {
        e.preventDefault();
        fetch('https://my-json-server.typicode.com/Aphatheology/React_Mini_Blog/blogs/', {
            method: 'POST',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(form)
          })
          .then(() => {
            navigate("/");
          })
          .catch(error => console.log(error))
    }

  return (
    <div className="w-full sm:px-9 px-3">
        <h2 className="w-full font-bold text-xl text-gray-800 px-6 mt-6 sm:py-2 py-4">Create new article</h2>
        <form className="flex flex-wrap justify-between px-6" onSubmit={handleFormSubmit}>
            {/* <label htmlFor="title">Blog Title</label>
            <input id="title" type="text"
                className="flex-1 mt-4 appearance-none border border-gray-400 rounded shadow-md p-3 text-gray-600 mr-2 focus:outline-none"
                // value={form.title}
            /> */}

            <div className="sm:w-2/4 w-full mb-6 pt-3 rounded bg-gray-200">
                <label className="block text-gray-700 text-sm font-bold mb-2 ml-3" htmlFor="title">Article Title</label>
                <input type="text" id="title" 
                    className="bg-gray-200 rounded w-full text-gray-700 focus:outline-none border-b-4 border-gray-300 focus:border-purple-600 transition duration-500 px-3 pb-3" 
                    name="title"
                    value={form.title}
                    onChange={handleFormChange}
                />
            </div>

            <div className="sm:w-2/4 w-full mb-6 pt-3 rounded bg-gray-200">
                <label className="block text-gray-700 text-sm font-bold mb-2 ml-3" htmlFor="author">Author</label>
                <input type="text" id="author" className="bg-gray-200 rounded w-full text-gray-700 focus:outline-none border-b-4 border-gray-300 focus:border-purple-600 transition duration-500 px-3 pb-3" 
                    name="author"
                    value={form.author}
                    onChange={handleFormChange}
                />
            </div>

            <div className="w-full mb-6 pt-3 rounded bg-gray-200">
                <label className="block text-gray-700 text-sm font-bold mb-2 ml-3" htmlFor="content">Article Content</label>
                <textarea id="content" rows="8" className="bg-gray-200 rounded w-full text-gray-700 focus:outline-none border-b-4 border-gray-300 focus:border-purple-600 transition duration-500 px-3 pb-3 mb-0 resize-none"
                    name="body"
                    value={form.body}
                    onChange={handleFormChange}
                ></textarea>
            </div>

            <button type="submit" class=" w-2/4 mx-auto mt-2 mb-4 block md:inline-block appearance-none bg-purple-500 text-white text-base font-semibold tracking-wider uppercase py-4 rounded shadow hover:bg-purple-400">Post Article</button>
        </form>
    </div>
  )
}

export default NewArticle