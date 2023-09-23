import axios from "axios";
import React, { useEffect, useState } from "react";

export const useFetch = (endpoint, query) => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);
  const evnKey = process.env.REPID_API_KEY;

  const options = {
    method: "GET",
    url: `https://jsearch.p.rapidapi.com/${endpoint}`,
    params: { ...query },
    headers: {
      "X-RapidAPI-Key": "2cebab78dbmsh7ab053d7ef08aeep1f3462jsn78a59aaa0058",
      "X-RapidAPI-Host": "jsearch.p.rapidapi.com",
    },
  };

  const fetchData = async () => {
    setIsLoading(true);
    try {
      const response = await axios.request(options);
      setData(response?.data?.data);
      setIsLoading(false);
    } catch (error) {
      setError(error);
      alert("There is an Error ..!");
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const refetchData = () => {
    setIsLoading(true);
    fetchData();
  };

  return { isLoading, error, data, refetchData };
};
