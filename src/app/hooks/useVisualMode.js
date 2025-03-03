import react from "react";
import { useState } from "react";

export function useVisualMode(init){
    const [mode, setMode] = useState(init)
    const [history, setHistory] = useState(init)
    function transition(newMode, replace){
        if(replace){
            setMode((prev) =>newMode)
            let tempHistory = [...history];
            tempHistory[length - 1] = newMode
            setHistory((prev) => newMode)
            return
        }
        setMode((prev) => newMode)
        let tempHistory = [...history];
        tempHistory.push(newMode);
        setHistory((prev) => tempHistory);
    }
    function back() {
        let tempHistory = [...history];
        tempHistory.pop(mode)
        setHistory((prev) => tempHistory)
        if (tempHistory.length > 1) {
            setMode((prev) => tempHistory[tempHistory.length-1])
        }
    }
}