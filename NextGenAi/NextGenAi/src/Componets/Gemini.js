
import {
    GoogleGenerativeAI,
    HarmCategory,
    HarmBlockThreshold,
} from "@google/generative-ai";

import axios from "axios";

const MODEL_NAME = "gemini-1.5-pro-latest";
const API_KEY = "AIzaSyDH-PyvV8A5izrLQVWJcSRewPYHEgY_cLU"; 

async function runChat(prompt) {
    const genAI = new GoogleGenerativeAI(API_KEY);
    const model = genAI.getGenerativeModel({ model: MODEL_NAME });

    const generationConfig = {
        temperature: 1,
        topK: 0,
        topP: 0.95,
        maxOutputTokens: 8192,
    };

    const safetySettings = [
        {
            category: HarmCategory.HARM_CATEGORY_HARASSMENT,
            threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
        },
        {
            category: HarmCategory.HARM_CATEGORY_HATE_SPEECH,
            threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
        },
        {
            category: HarmCategory.HARM_CATEGORY_SEXUALLY_EXPLICIT,
            threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
        },
        {
            category: HarmCategory.HARM_CATEGORY_DANGEROUS_CONTENT,
            threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
        },
    ];

    const chat = model.startChat({
        generationConfig,
        safetySettings,
        history: [],
    });

    try {
        const result = await chat.sendMessage(prompt); 
                const textResponse = result.response.text();

        console.log(textResponse);
        
        console.log("Request Body:", { query: prompt, response: textResponse }); 
        const postResult = await axios.post( "http://localhost:5000/api/finals", { 
            query: prompt,
            response: textResponse,
        });

        console.log("Response saved to MongoDB:", postResult.data); 

        return textResponse; 

    } catch (error) {
        console.error("Error interacting with Gemini API or saving to DB:", error);
        if (axios.isAxiosError(error)) {
            console.error("Axios Error Details:", error.response?.data);         }

        return "Error: Could not process your request.";
    }
}

export default runChat;