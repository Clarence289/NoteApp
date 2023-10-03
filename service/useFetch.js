import { useState, useEffect } from "react";
import { db } from "../config/firabase";

// hook that handles data from the db
const useFetch = () => {
  const [data, setData] = useState([]);   //notes data
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

 
  const fetchData = async () => {
    setIsLoading(true);

    try {

//etch data from firebase (notes collection)
const snapshot = await db.collection("notes").get();
// map through the available notes by id
      const data = snapshot.docs.map((doc) => ({
        
        id: doc.id,
        ...doc.data(),
        
      }));

      // setData(response.data.data);
      setData(data)
      setIsLoading(false);
    } catch (error) {
      setError(error);
      console.log(error)
    } finally {
      setIsLoading(false);
      
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const refetch = () => {
    setIsLoading(true);
    fetchData();
    console.log("note: " +fetchData())
  };

  return { data, isLoading, error, refetch };
};

export default useFetch;