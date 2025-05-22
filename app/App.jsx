import './global.css'
import {NavigationContainer} from '@react-navigation/native'
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import HomePage from './components/pages/HomePage'
import {StatusBar} from 'expo-status-bar'
import RestaurantPage from './components/pages/RestaurantPage'
import OffersPage from './components/pages/OffersPage'
import ProfilePage from './components/pages/ProfilePage'
import TastyDiscountsPage from './components/pages/TastyDiscountsPage'

const Stack = createNativeStackNavigator()

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomePage} />
        <Stack.Screen name="Restaurant" component={RestaurantPage} />
        <Stack.Screen name="Offers" component={OffersPage} />
        <Stack.Screen name="Profile" component={ProfilePage} />
        <Stack.Screen name="TastyDiscounts" component={TastyDiscountsPage} />
      </Stack.Navigator>
      <StatusBar style="auto" />
    </NavigationContainer>
  )
}
