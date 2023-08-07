import React, { useEffect, useState } from "react";
import axios from "axios";
import uuid from "uuid";

const useFlip = () => {
    const [isFacingUp, setIsFacingUp] = useState(true);
    const flipCard = () => {
        setIsFacingUp(isUp => !isUp);
    }
    return [isFacingUp, flipCard];
};


const useAxios = (baseUrl) => {
    const [responses, setResponses] = useState([]);

    const getData = async (formatter = data => data, restOfUrl = "") => {
        const res = await axios.get(`${baseUrl}${restOfUrl}`);
        setResponses(data => [...data, formatter(res.data)]);
    };
    const clearResponses = () => setResponses([]);
    return [responses, getData, clearResponses]
};

export { useFlip, useAxios };