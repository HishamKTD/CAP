import { LinkToPage } from "@/utils";
import { IS_DEBUG } from '@/config';


/**
 * SideBar navigation items with links for Private Layout
 */
export const SIDE_BAR_ITEMS: Array<LinkToPage> = [
    {
      title: 'Home',
      path: '/',
      icon: 'home',
    },
    {
      title: 'My Profile',
      path: '/me',
      icon: 'account',
    },
    {
      title: '404',
      path: '/wrong-url',
      icon: 'error',
    },
    {
      title: 'About',
      path: '/about',
      icon: 'info',
    },
  ];

  
// ** Add debug links
IS_DEBUG &&
SIDE_BAR_ITEMS.push({
  title: '[Debug Tools]',
  path: '/dev',
  icon: 'settings',
});


  /**
 * SideBar navigation items with links for Public Layout
 */
export const SIDE_BAR_ITEMS_PUBLIC: Array<LinkToPage> = [
  {
    title: 'Log In',
    path: '/auth/login',
    icon: 'login',
  },
  {
    title: 'Sign Up',
    path: '/auth/signup',
    icon: 'signup',
  },
  {
    title: 'About',
    path: '/about',
    icon: 'info',
  },
];


/**
 * BottomBar navigation items with links for Public Layout
 */
export const BOTTOM_BAR_ITEMS: Array<LinkToPage> = [
  {
    title: 'Log In',
    path: '/auth/login',
    icon: 'login',
  },
  {
    title: 'Sign Up',
    path: '/auth/signup',
    icon: 'signup',
  },
  {
    title: 'About',
    path: '/about',
    icon: 'info',
  },
];


// Add debug links
IS_DEBUG &&
SIDE_BAR_ITEMS_PUBLIC.push({
    title: '[Debug Tools]',
    path: '/dev',
    icon: 'settings',
  });

