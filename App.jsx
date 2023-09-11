import { registerRootComponent } from 'expo';
import React from 'react';

import Route from './src/routes';

function App() {
  return <Route />
}

registerRootComponent(App);