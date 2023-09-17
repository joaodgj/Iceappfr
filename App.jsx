import 'react-native-gesture-handler';
import React from 'react';

import Route from './src/routes';
import Providers from './src/providers';

export default function App() {
  return (
    <Providers>
      <Route />
    </Providers>
  )
}