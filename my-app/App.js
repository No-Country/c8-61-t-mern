import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { AuthProvider } from "./src/context/AuthContext";
import IsLoginNavigation from './src/navigation/IsLoginNavigation';
export default function App() {
  return (
      <NavigationContainer>
        <AuthProvider>
          <IsLoginNavigation />
        </AuthProvider>
      </NavigationContainer>
  )
}
