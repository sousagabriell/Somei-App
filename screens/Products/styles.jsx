// styles.js
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    padding: 30,
    flexDirection: 'column',
    justifyContent: 'left',
    alignItems: 'left',
    height: 300,
    backgroundColor: '#052B38',
  },
  left: {
    marginTop: '5%',
  },
  settingsButton: {
    flexDirection: 'row',
    alignItems: 'center',
    margin: 30,
  },
  content: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    padding: '5%',
  },
  buttonProduct: {
    backgroundColor: '#06D6A0',
    paddingVertical: 15,
    paddingHorizontal: 80,
    borderRadius: 8,
    marginBottom: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
  smallButton: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 8,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: '#fff',
  },
  favoritosButton: {
    backgroundColor: '#fff',
    marginRight: 10,
  },
  geralButton: {
    backgroundColor: '#052B38',
    borderColor: '#fff',
    borderWidth: 1,
  },
  buttonText: {
    color: '#fff',
    marginLeft: 10,
    fontSize: 16,
    fontWeight: 'bold',
  },
  productsDataContainer: {
    padding: 10,
    marginTop: 20,
  },
  buttonText: (selected) => ({
    color: selected ? '#06D6A0' : 'white',
    marginLeft: 10,
    fontSize: 16,
    fontWeight: 'bold',
  }),
  ml_2: {
    marginLeft: 2,
  },
  selectedButton: (selected) => ({
    backgroundColor: selected ? 'white' : '#06D6A0',
    borderColor: 'white',
    borderWidth: selected ? 2 : 0,
  }),
  unselectedButton: {
    backgroundColor: '#06D6A0',
    borderColor: 'white',
    borderWidth: 2,
  },
});
