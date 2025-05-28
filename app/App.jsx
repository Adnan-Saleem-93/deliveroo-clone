import './global.css'
import {NavigationContainer} from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack'
import HomePage from './components/pages/HomePage'
import {StatusBar} from 'expo-status-bar'
import ProfilePage from './components/pages/ProfilePage'
import RestaurantPage from './components/pages/Restaurant/page'
import CartCard from './components/organisms/CartCard'
import CartPage from './components/pages/CartPage/page'
import ModalComponent from './components/organisms/Modal'
import {useModalStore} from './store/modal'
import {View} from 'react-native'

const Stack = createStackNavigator()

export default function App() {
  const {showModal} = useModalStore()
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
      </Stack.Navigator>
      <StatusBar style="auto" />
      <CartCard />
      <ModalComponent />
      {showModal && <View className={'absolute top-0 w-screen h-screen bg-black/70'} />}
    </NavigationContainer>
  )
}
