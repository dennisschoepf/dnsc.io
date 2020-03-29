import { useState, useEffect } from 'react';
import fetch from 'isomorphic-unfetch';

const totalGlobalInitialState = {
  cases: null,
  deaths: null,
  recovered: null,
  updated: null,
  active: null,
};

export const useCovidData = config => {
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [data, setData] = useState(!config && totalGlobalInitialState);
  const [lastUpdated, setLastUpdated] = useState(0);

  const baseApi = 'https://corona.lmao.ninja';
  let path = '';

  if (!config) {
    // Get global totals
    path = '/all';
  }

  if (config && config.country) {
    // Get country data
    const { country } = config;
    path = `/countries/${country}`;
  }

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(baseApi + path);
        const json = await res.json();
        setData(json);
        setIsLoading(false);

        const timestamp = new Date(json.updated).toLocaleTimeString('en-US');
        setLastUpdated(timestamp);
      } catch (e) {
        setIsError(true);
      }
    };

    fetchData();
  }, [path]);

  return [isError, isLoading, data, lastUpdated];
};
