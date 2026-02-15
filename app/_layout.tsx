import React from 'react';

import { useColorScheme } from '@/hooks/use-color-scheme';
import { Stack } from "expo-router";


 
    export default function RootLayout() {
       const colorScheme = useColorScheme();
  return(
    <Stack>
      <Stack.Screen name="index"
        options={{
          headerShown: false,
        }}/>;
        <Stack.Screen name="register"
        options={{
          headerShown: false,
          
        }}/>;   
        <Stack.Screen name="hostelType"
        options={{
          headerShown: false,
          headerTitle: 'Select Hostel Type',
          headerStyle: { backgroundColor: '#2321c4' },
          headerTintColor: '#fff',
          headerTitleStyle: { fontWeight: 'bold' },
          headerBackTitleStyle:{ fontSize: 12,  },
        }}/>;
        <Stack.Screen name="classic"
        options={{
          headerShown: false,
          headerTitle: 'Select Your Hostel',
          headerStyle: { backgroundColor: '#2321c4' },
          headerTintColor: '#fff',
          headerTitleStyle: { fontWeight: 'bold' },
          headerBackTitleStyle:{ fontSize: 12,  },
        }}/>;
        <Stack.Screen name="premium"
        options={{
          headerShown: false,
          headerTitle: 'Select Your Hostel',
          headerStyle: { backgroundColor: '#2321c4' },
          headerTintColor: '#fff',
          headerTitleStyle: { fontWeight: 'bold' },
          headerBackTitleStyle:{ fontSize: 12,  },
        }}/>;
        <Stack.Screen name="regular"
        options={{
          headerShown: false,
          headerTitle: 'Select Your Hostel ',
          headerStyle: { backgroundColor: '#2321c4' },
          headerTintColor: '#fff',
          headerTitleStyle: { fontWeight: 'bold' },
          headerBackTitleStyle:{ fontSize: 12,  },
        }}/>;
         <Stack.Screen name="Classic/Platinum/FloorA"
        options={{
          headerShown: false,
          headerTitle: 'Select Your Hostel ',
          headerStyle: { backgroundColor: '#2321c4' },
          headerTintColor: '#fff',
          headerTitleStyle: { fontWeight: 'bold' },
          headerBackTitleStyle:{ fontSize: 12,  },
        }}/>;


    </Stack>
  )
} 




