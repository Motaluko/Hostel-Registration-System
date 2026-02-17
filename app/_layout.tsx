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
         
        }}/>;
        <Stack.Screen name="classic"
        options={{
          headerShown: false,
         
        }}/>;
        <Stack.Screen name="premium"
        options={{
          headerShown: false,
         
        }}/>;
        <Stack.Screen name="regular"
        options={{
          headerShown: false,
        
        }}/>;
        {/*Classic Hostels*/}
         <Stack.Screen name="Classic/Platinum/FloorA"
        options={{
          headerShown: false,
         
        }}/>;
        <Stack.Screen name="Classic/Platinum/FloorB"
        options={{
          headerShown: false,
        
        }}/>;
        <Stack.Screen name="Classic/Platinum/FloorC"
        options={{
          headerShown: false,
          
        }}/>;
        <Stack.Screen name="Classic/Platinum/FloorD"
        options={{
          headerShown: false,
         
        }}/>;
        <Stack.Screen name="Classic/Crystal/FloorA"
        options={{
          headerShown: false,
          
        }}/>;
        <Stack.Screen name="Classic/Crystal/FloorB"
        options={{
          headerShown: false,
         
        }}/>;
        <Stack.Screen name="Classic/Crystal/FloorC"
        options={{
          headerShown: false,
         
        }}/>;
        <Stack.Screen name="Classic/Crystal/FloorD"
        options={{
          headerShown: false,
         
        }}/>;
        <Stack.Screen name="Classic/Sapphire/FloorA"
        options={{
          headerShown: false,
        
        }}/>;
        <Stack.Screen name="Classic/Sapphire/FloorB"
        options={{
          headerShown: false,
         
        }}/>;
        <Stack.Screen name="Classic/Sapphire/FloorC"
        options={{
          headerShown: false,
        
        }}/>;
        <Stack.Screen name="Classic/Sapphire/FloorD"
        options={{
          headerShown: false,
         
        }}/>;
        {/*Premium Hostels*/}
        <Stack.Screen name="Premium/Diamond/FloorA"
        options={{
          headerShown: false,
          
        }}/>;
        <Stack.Screen name="Premium/Diamond/FloorB"
        options={{
          headerShown: false,
         
        }}/>;
        <Stack.Screen name="Premium/Diamond/FloorC"
        options={{
          headerShown: false,
       
        }}/>;
        <Stack.Screen name="Premium/Diamond/FloorD"
        options={{
          headerShown: false,
         
        }}/>;
        <Stack.Screen name="Premium/Queen_Exsther/FloorA"
        options={{
          headerShown: false,
          
        }}/>;
        <Stack.Screen name="Premium/Queen_Exsther/FloorB"
        options={{
          headerShown: false,
          
        }}/>;
        <Stack.Screen name="Premium/Queen_Exsther/FloorC"
        options={{
          headerShown: false,
         
        }}/>;
        <Stack.Screen name="Premium/Queen_Exsther/FloorD"
        options={{
          headerShown: false,
          
        }}/>;
        <Stack.Screen name="Premium/Ruby/FloorA"
        options={{
          headerShown: false,
         
        }}/>;
        <Stack.Screen name="Premium/Ruby/FloorB"
        options={{
          headerShown: false,
          
        }}/>;
        <Stack.Screen name="Premium/Ruby/FloorC"
        options={{
          headerShown: false,
          
        }}/>;
        <Stack.Screen name="Premium/Ruby/FloorD"
        options={{
          headerShown: false,
         
        }}/>;
        {/*Regular Hostels*/}
        <Stack.Screen name="Regular/Nyberg/FloorA"
        options={{
          headerShown: false,
         
        }}/>;
        <Stack.Screen name="Regular/Nyberg/FloorB"
        options={{
          headerShown: false,
            
        }}/>;
        <Stack.Screen name="Regular/Nyberg/FloorC"
        options={{
          headerShown: false,
          
        }}/>;
        <Stack.Screen name="Regular/Nyberg/FloorD"
        options={{
          headerShown: false,
         
        }}/>;
        <Stack.Screen name="Regular/Ogden/FloorA"
        options={{
          headerShown: false,
         
        }}/>;
        <Stack.Screen name="Regular/Ogden/FloorB"
        options={{
          headerShown: false,
         
        }}/>;
        <Stack.Screen name="Regular/Ogden/FloorC"
        options={{
          headerShown: false,
          
        }}/>;
        <Stack.Screen name="Regular/Ogden/FloorD"
        options={{
          headerShown: false,
          
        }}/>;
        <Stack.Screen name="Regular/White/FloorA"
        options={{
          headerShown: false,
          
        }}/>;
        <Stack.Screen name="Regular/White/FloorB"
        options={{
          headerShown: false,
          
        }}/>;
        <Stack.Screen name="Regular/White/FloorC"
        options={{
          headerShown: false,
        }}/>;
        <Stack.Screen name="Regular/White/FloorD"
        options={{
          headerShown: false,
          
        }}/>;
        {/*Card Paymet Page*/}
        <Stack.Screen name="CardPayment"
        options={{
          headerShown: false,
        }}/>;
         <Stack.Screen name="TransferPayment"
        options={{
          headerShown: false,
        }}/>;
        <Stack.Screen name="CompletePayment"
        options={{
          headerShown: false,
        }}/>;
    </Stack>
  )
} 




