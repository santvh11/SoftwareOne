/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {
  FlatList,
  SafeAreaView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {useGetCountries} from './src/hooks/useGetCountries';

function App(): JSX.Element {
  const {countries} = useGetCountries();

  const ItemSeparatorComponent = () => <View style={{height: 20}} />;

  return (
    <SafeAreaView style={{flex: 1, justifyContent: 'center'}}>
      <FlatList
        data={countries}
        ItemSeparatorComponent={ItemSeparatorComponent}
        renderItem={({item}) => (
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <TouchableOpacity
              style={{
                width: 50,
                backgroundColor: 'red',
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Text>GO</Text>
            </TouchableOpacity>
            <View style={{flex: 1, paddingHorizontal: 20}}>
              <Text>{item.name}</Text>
              <Text>{item.capital}</Text>
              <Text>{item.region}</Text>
            </View>
          </View>
        )}
      />
    </SafeAreaView>
  );
}

export default App;
