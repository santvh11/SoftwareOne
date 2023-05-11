import React, {useEffect, useState} from 'react';
import {TextInput, View} from 'react-native';
import {Country} from '../../utils/types';
import {styles} from './styles';

interface Props {
  countries: Country[];
  filteredCountries: Country[];
  setFilteredCountries: (filteredCountries: Country[]) => void;
}

function SearchBar({
  countries,
  filteredCountries,
  setFilteredCountries,
}: Props) {
  const [value, setValue] = useState('');

  useEffect(() => {
    setFilteredCountries(countries);
  }, [countries]);

  const filterCountries = (filter: string) => {
    return countries.filter(country =>
      country.name.toLowerCase().includes(filter.toLowerCase()),
    );
  };

  const onChange = (str: string) => {
    if (value === '' && filteredCountries.length !== countries.length) {
      setFilteredCountries(countries);
    } else {
      const newFilteredCountries = filterCountries(str);
      setFilteredCountries(newFilteredCountries);
    }
    setValue(str);
  };

  return (
    <View style={styles.searchContainer}>
      <TextInput
        value={value}
        onChangeText={onChange}
        placeholder="Search countries by name..."
        style={styles.searchInput}
      />
    </View>
  );
}

export default SearchBar;
