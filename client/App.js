import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import RootReducer from './redux/rootReducer';
import Structure from './screens/structure';

const store = createStore(RootReducer);


export default function App() {
  return (
    <Provider store={store}>
      <Structure />
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
