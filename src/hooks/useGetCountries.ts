import {useEffect, useState} from 'react';

export interface Root {
  name: string;
  code: string;
  capital: string;
  region: string;
  currency: Currency;
  language: Language;
  flag: string;
}

export interface Currency {
  code: string;
  name: string;
  symbol: string;
}

export interface Language {
  code: string;
  name: string;
}

export const useGetCountries = () => {
  const [countries, setCountries] = useState<Country[]>([]);

  const getToken = async () => {
    var myHeaders = new Headers();
    myHeaders.append('Accept', 'application/json');
    myHeaders.append(
      'api-token',
      'CYb4tPVit_ByNWbwDyf6d13yCHRt9OnqqchmUiXC4IikIGyapGYQ_9Hv0hAqIrlRFKQ',
    );
    myHeaders.append('user-email', 'santvh11@gmail.com');

    var requestOptions = {
      method: 'GET',
      headers: myHeaders,
      redirect: 'follow',
    };

    fetch(
      'https://www.universal-tutorial.com/api/getaccesstoken',
      requestOptions,
    )
      .then(response => response.json())
      .then(result => {
        getCounties(result.auth_token);
      })
      .catch(error => console.log('error', error));
  };

  const getCounties = token => {
    console.log(token);
    var myHeaders = new Headers();
    myHeaders.append('Accept', 'application/json');
    myHeaders.append('Authorization', 'Bearer ' + token);

    var requestOptions = {
      method: 'GET',
      headers: myHeaders,
      redirect: 'follow',
    };

    fetch('https://www.universal-tutorial.com/api/countries', requestOptions)
      .then(response => response.json())
      .then(result => setCountries(result))
      .catch(error => console.log('error', error));
  };

  useEffect(() => {
    getToken();
  }, []);

  return {
    countries,
  };
};
