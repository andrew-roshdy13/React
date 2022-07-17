
import axios from "axios";
import { useEffect, useState } from "react";

function Ap(){
    const [fetchedData,setFetchedData] = useState ([]);
    useEffect (() => {
        const getData =async () => {
            const data = await axios.get ("https://jsonplaceholder.typicode.com/todos/1");
            setFetchedData (data);
        };
        getData();
    }, []);
    console.log("data",fetchedData);
    return (
        <div className="Ap">
            <h1>Test</h1>
            {fetchedData.data ? <h2>{fetchedData.data.title}</h2> : null}
        </div>
    );
}
export default Ap;