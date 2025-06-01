import './global.css'
import {NavigationContainer} from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack'
import HomePage from './components/pages/Home/page'
import {StatusBar} from 'expo-status-bar'
import ProfilePage from './components/pages/ProfilePage'
import RestaurantPage from './components/pages/Restaurant/page'
import CartCard from './components/organisms/CartCard'
import CartPage from './components/pages/Cart/page'
import ModalComponent from './components/organisms/Modal'
import DarkenedBackground from './components/organisms/DarkenedBackground'
import PreparingOrderPage from './components/pages/PreparingOrderPage'
import DeliveryPage from './components/pages/DeliveryPage'

const Stack = createStackNavigator()

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomePage} />
        <Stack.Screen name="Restaurant" component={RestaurantPage} />
        <Stack.Screen name="Profile" component={ProfilePage} />
        <Stack.Screen
          name="Cart"
          component={CartPage}
          options={{presentation: 'modal', headerShown: false}}
        />
        <Stack.Screen
          name="PreparingOrder"
          component={PreparingOrderPage}
          options={{presentation: 'card', headerShown: false}}
        />
        <Stack.Screen
          name="Delivery"
          component={DeliveryPage}
          options={{presentation: 'card', headerShown: false}}
        />
      </Stack.Navigator>
      <StatusBar style="auto" />
      <CartCard />
      <ModalComponent />
      <DarkenedBackground />
    </NavigationContainer>
  )
}
