import React, { createContext, useState, useEffect } from "react";
import axios from "axios";
import runChat from "../Componets/Gemini";

export const Context = createContext();

export const ContextProvider = ({ children }) => {
    const [query, setInput] = useState("");
    const [resultData, setResult] = useState("");
    const [loading, setLoading] = useState(false);
    const [showResult, setShowResult] = useState(false);
    const [history, setHistory] = useState([]);

    useEffect(() => {
        fetchHistory();
    }, []);

    const fetchHistory = async () => {
        try {
            const res = await axios.get("http://localhost:5000/api/finals"); 
            setHistory(res.data.data || []); 
        } catch (err) {
            console.error("Error fetching history:", err);
        }
    };

    const onSent = async () => {
        if (!query.trim()) return;
        setLoading(true);
        setShowResult(true);

        try {
            const response = await runChat(query);
            setResult(response);
            await fetchHistory(); 
        } catch (error) {
            console.error("Error fetching Gemini API:", error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <Context.Provider value={{ onSent, showResult, loading, resultData, setInput, query, history }}>
            {children}
        </Context.Provider>
    );
};