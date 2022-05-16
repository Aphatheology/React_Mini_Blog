import {useState, useEffect} from 'react'



function useFetch(url, awaitTime) {
    const [fetchData, setfetchData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  

  useEffect(() => {
      const abortCont = new AbortController();
      setTimeout(() => {
        fetch(url, {signal: abortCont.signal})
      .then(res => {
        if (!res.ok) { // error coming back from server
          throw Error('could not fetch the data for that resource');
        } 
        return res.json();
      })
      .then(data => {
        setIsLoading(false);
        setfetchData(data);
        setError(null);
      })
      .catch(err => {
        if(err.name === "AbortError") 
        {
            console.log("useFetch aborted")
        } else {
            setIsLoading(false);
            setError(err.message);
        }
        
      })
    }, awaitTime);

    return () => abortCont.abort();
    //   fetch('http://localhost:8000/blogs')
    //   .then(res => res.json())
    //   .then(data => setfetchData(data))
    //   setIsLoading(false)
  }, [url, awaitTime])

    return {fetchData, isLoading, error}
}

export default useFetch