import React, { useContext } from 'react'
import { Context } from "./Context";
import { Link } from 'react-router-dom';
import "../Componets/Histroy.css"


const Histroy = () => {
    const {  history } = useContext(Context)
  return (
    <div>
     
       
     <Link to="/" className="back-button">
        Back
              </Link>

      

              <div>
                {Array.isArray(history) && history.length > 0 ? (
                    history.map((item) => (
                        <div key={item._id} className="border p-2 my-2">
                            <p><strong>Query</strong> {item.query}</p>
                            <p><strong>Response:</strong> {item.response}</p>
                        </div>
                    ))
                ) : (
                    <p>No history available</p>
                )}
            </div>

    </div>
  )
}

export default Histroy
