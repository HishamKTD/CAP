//** SVG assets */
import PencilIcon from './icons/PencilIcon';

//** MUI Icons */
import {
  MoreHoriz,
  Close,
  Menu,
  Settings,
  Visibility,
  VisibilityOff,
  Home,
  Person,
  ExitToApp,
  NotificationsOutlined,
  Dangerous,
  AccessAlarm,
  PersonAdd,
  Brightness4,
  Brightness3,
  Info,
  Brightness5,
  Search,
  AccountCircle,
  AccessAlarms,
  Accessibility,
  AccessibilityNew,
  Accessible,
  AccessibleForward,
  AccountBalance,
  AccountBalanceWallet,
  Nightlife,
  Brightness7
} from '@mui/icons-material';

/**
 * List of all available Icon names
 */
export type IconName = keyof typeof ICONS;

/**
 * How to use:
 * 1. Import all required React, MUI or other SVG icons into this file.
 * 2. Add icons with "unique lowercase names" into ICONS object. Lowercase is a must!
 * 3. Use icons everywhere in the App by their names in <Icon icon="xxx" /> component
 * Important: properties of ICONS object MUST be lowercase!
 * Note: You can use camelCase or UPPERCASE in the <Icon icon="someIconByName" /> component
 */
export const ICONS /* Note: Setting type disables property autocomplete :( was - : Record<string, ComponentType> */ = {
  default: MoreHoriz,
  logo: PencilIcon,
  close: Close,
  menu: Menu,
  settings: Settings,
  visibilityon: Visibility,
  visibilityoff: VisibilityOff,
  daynight: Brightness4,
  night: Brightness3,
  day: Brightness7,
  search: Search,
  info: Info,
  home: Home,
  account: AccountCircle,
  signup: PersonAdd,
  login: Person,
  logout: ExitToApp,
  notifications: NotificationsOutlined,
  error: Dangerous,
  accessalarm: AccessAlarm,
  accessalarms: AccessAlarms,
  accessibility: Accessibility,
  accessibilitynew: AccessibilityNew,
  accessible: Accessible,
  accessibleforward: AccessibleForward,
  accountbalance: AccountBalance,
  accountbalancewallet: AccountBalanceWallet,
  brightness3: Brightness3,
  brightness4: Brightness4,
  brightness5: Brightness5,
  nightlife: Nightlife

  // Continue to add more icons as needed
};

