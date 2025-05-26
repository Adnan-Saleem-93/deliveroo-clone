import './global.css'
import {NavigationContainer} from '@react-navigation/native'
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import HomePage from './components/pages/HomePage'
import {StatusBar} from 'expo-status-bar'
import ProfilePage from './components/pages/ProfilePage'
import RestaurantPage from './components/pages/Restaurant/page'
import CartCard from './components/organisms/CartCard'
import CartPage from './components/pages/CartPage/page'

const Stack = createNativeStackNavigator()

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomePage} />
        <Stack.Screen name="Restaurant" component={RestaurantPage} />
        <Stack.Screen name="Profile" component={ProfilePage} />
        <Stack.Screen name="Cart" component={CartPage} />
      </Stack.Navigator>
      <StatusBar style="auto" />
      <CartCard />
    </NavigationContainer>
  )
}
