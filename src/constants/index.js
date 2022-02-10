import HomeScreen from '../containers/Home';
import AlertScreen from '../containers/Alert';
import NotesScreen from '../containers/Notes';
import ContactScreen from '../containers/Contact';
import FavouriteScreen from '../containers/Favourite';

export const BOTTOM_TAB_SCREENS = [
  {
    name: 'Recent',
    component: HomeScreen,
    // activeIcon: 'home',
    // inactiveIcon: 'home',
  },
  {
    name: 'Notes',
    component: NotesScreen,
      activeIcon: 'categories',
      inactiveIcon: 'categories',
  },
  {
    name: 'Contacts',
    component: ContactScreen,
    // activeIcon: 'brand_store',
    // inactiveIcon: 'brand_store',
  },
  {
    name: 'Favourite',
    component: FavouriteScreen,
    // activeIcon: 'orders',
    // inactiveIcon: 'orders',
  },
  {
    name: 'Alerts',
    component: AlertScreen,
    // activeIcon: 'profile',
    // inactiveIcon: 'profile',
  },
];

export const APP_STACK_SCREENS = [
  {
    name: 'Home',
    component: HomeScreen,
  },
  {
    name: 'Profile',
    component: AlertScreen,
  },
];
