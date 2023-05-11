import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  decoratorContainer: {
    backgroundColor: '#7FA99B',
    marginHorizontal: 30,
    marginTop: 10,
  },
  itemContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: 'white',
    padding: 20,
    borderWidth: 1,
    position: 'relative',
    right: 10,
    bottom: 10,
  },
  buttonContainer: {
    width: 100,
    backgroundColor: '#FDC57B',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    padding: 16,
  },
  buttonText: {
    fontSize: 40,
  },
  textContainer: {
    flex: 1,
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 18,
    textTransform: 'uppercase',
    fontWeight: '700',
  },
  capital: {
    fontSize: 16,
    textTransform: 'capitalize',
    marginVertical: 8,
  },
  region: {
    fontSize: 18,
    textTransform: 'uppercase',
    fontWeight: '500',
  },
});
