import { useState } from "react";
import { useEffect } from "react";
function Page1 () {

    const [data, setData] = useState([]);
  
    useEffect(() => {
      // Using fetch to get data from the backend
      fetch("http://localhost:3000/api/data")
        .then((response) => response.json()) // Convert response to JSON
        .then((data) => {
          console.log(data);
          setData(data.data); // Set the received data in state
        })
        .catch((error) => {
          console.error("There was an error!", error);
        });
    }, []);
    return (
      <>
  <h1>Strona 1</h1>
  <div>
        <h1>Data from Server</h1>
          {data.map((item, index) => (
            <div key={index}>{item}</div>
          ))}
      </div>
      </>
    );
  }
  
  export default Page1;