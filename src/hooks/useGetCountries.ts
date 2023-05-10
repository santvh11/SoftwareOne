import {useEffect, useState} from 'react';
import {Country} from '../utils/types';

export const useGetCountries = () => {
  const [countries, setCountries] = useState<Country[]>([]);

  const getCountries = () => {
    var requestOptions = {
      method: 'GET',
      redirect: 'follow',
    };

    fetch('http://localhost:3000/account/list', requestOptions)
      .then(response => response.json())
      .then(result => setCountries(result.countries))
      .catch(error => console.log('error', error));
  };

  useEffect(() => {
    getCountries();
  }, []);

  return {
    countries,
  };
};
