import BurgerAndFriesIMG from '../../assets/offers/burger-and-fries.png'
import ChickenRoleIMG from '../../assets/offers/chicken-role.png'
import ClubSandwichIMG from '../../assets/offers/club-sandwich.png'
import CrispyChickenWithMustardIMG from '../../assets/offers/crispy-chicken-with-mustard.png'
import FriedRiceIMG from '../../assets/offers/fried-rice.png'
import LargePizzaWithExtraSlicesIMG from '../../assets/offers/large-pizza-with-extra-slices.png'
import {CATEGORY_NAMES} from '../utils/constants'

export const OffersNearYouList = [
  {
    id: 'offer-1',
    text: 'Burger and Fries',
    rating: 4.7,
    category: CATEGORY_NAMES.BURGER,
    location: '21 Jump Street',
    img: BurgerAndFriesIMG
  },
  {
    id: 'offer-2',
    text: 'Club Sandwich',
    rating: 4.2,
    category: CATEGORY_NAMES.CONTINENTAL,
    location: 'Main Market Area',
    img: ClubSandwichIMG
  },
  {
    id: 'offer-3',
    text: 'Crispy Chicken With Mustard',
    rating: 4.1,
    category: CATEGORY_NAMES.CONTINENTAL,
    location: 'Near HBL Bank',
    img: CrispyChickenWithMustardIMG
  },
  {
    id: 'offer-4',
    text: 'Chicken Role',
    rating: 4,
    category: CATEGORY_NAMES.CONTINENTAL,
    location: 'Courtyard',
    img: ChickenRoleIMG
  },
  {
    id: 'offer-5',
    text: 'Fried Rice',
    rating: 3.8,
    category: CATEGORY_NAMES.CHINESE,
    location: '4th Avenue',
    img: FriedRiceIMG
  },
  {
    id: 'offer-6',
    text: 'Large Pizza with Extra Slices',
    rating: 5,
    category: CATEGORY_NAMES.PIZZA,
    location: 'Bank Avenue',
    img: LargePizzaWithExtraSlicesIMG
  }
]
