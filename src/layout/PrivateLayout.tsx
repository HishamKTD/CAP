import { FunctionComponent, PropsWithChildren } from 'react';
import TopBarAndSideBarLayout from './TopBarAndSideBarLayout';
import { APP_TITLE, SIDE_BAR_ITEMS } from '@/constants';


/**
 * Renders "Private Layout" composition
 * @layout PrivateLayout
 */
const PrivateLayout: FunctionComponent<PropsWithChildren> = ({ children }) => {
  document.title = APP_TITLE;

  return (
    <TopBarAndSideBarLayout sidebarItems={SIDE_BAR_ITEMS} title={APP_TITLE} variant="sidebarAlwaysTemporary">
      {children}
    </TopBarAndSideBarLayout>
  );
};

export default PrivateLayout;
