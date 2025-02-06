import React, { useContext } from "react";
import "../Componets/Home.css";
import { Context } from "./Context";


const Home = () => {
    const { onSent, showResult, loading, resultData, setInput, query } = useContext(Context);

    return (
        <div>
            <div   className="main">
                {!showResult ? 
                    <>
                        <h5>Hi Samarth <br /> How Can I Help You ..?</h5>
                    </>
                    :
<div className="response-container">
    {loading ? (
        <div className="loading">Loading... Please Wait</div>
    ) : (
        <p dangerouslySetInnerHTML={{ __html: resultData }}></p>
    )}
</div>

                }
            </div>

            <div className="container">
                <input 
                    onChange={(e) => setInput(e.target.value)} 
                    value={query} 
                    className="input1" 
                    type="text" 
                    placeholder="Enter your Prompt" 
                />
                <button onClick={onSent} className="overlap">Send</button>
            </div>
        </div>
    );
};

export default Home;
