import React, {useState} from 'react';
import {
  FlatList,
  SafeAreaView,
  Text,
  TouchableOpacity,
  View,
  Linking,
} from 'react-native';
import {useGetCountries} from '../../hooks/useGetCountries';
import {Country} from '../../utils/types';
import SearchBar from '../searchBar/SearchBar';
import {styles} from './styles';

const GOOGLE_MAPS_LINK = 'https://www.google.com/maps/place/';

function CountriesList() {
  const {countries} = useGetCountries();
  // I will not use a deep copy because in this case is not necessary
  const [filteredCountries, setFilteredCountries] = useState(countries);

  const handleOnPress = (countryName: string) =>
    Linking.openURL(GOOGLE_MAPS_LINK + countryName);

  const ItemSeparatorComponent = () => <View style={{height: 20}} />;

  const renderItem = ({item}: {item: Country}) => (
    <View style={styles.decoratorContainer}>
      <View style={styles.itemContainer}>
        <TouchableOpacity
          onPress={() => handleOnPress(item.name)}
          style={styles.buttonContainer}>
          <Text style={styles.buttonText}>GO</Text>
        </TouchableOpacity>
        <View style={styles.textContainer}>
          <Text style={styles.title}>{item.name}</Text>
          <Text style={styles.capital}>{item.capital}</Text>
          <Text style={styles.region}>{item.region}</Text>
        </View>
      </View>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <SearchBar
        countries={countries}
        filteredCountries={filteredCountries}
        setFilteredCountries={setFilteredCountries}
      />

      <FlatList
        data={filteredCountries}
        ItemSeparatorComponent={ItemSeparatorComponent}
        renderItem={renderItem}
      />
    </SafeAreaView>
  );
}

export default CountriesList;
