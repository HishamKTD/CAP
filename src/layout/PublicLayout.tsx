import { FunctionComponent, PropsWithChildren } from 'react';
import { Stack } from '@mui/material';
import { useIsMobile } from '@/hooks';
import { BottomBar } from './components';
import TopBarAndSideBarLayout from './TopBarAndSideBarLayout';
import { BOTTOM_BAR_DESKTOP_VISIBLE } from './config';
import { SIDE_BAR_ITEMS_PUBLIC, APPAPP_TITLEPUBLIC, BOTTOM_BAR_ITEMS } from '@/constants';

/**
 * Renders "Public Layout" composition
 * @layout PublicLayout
 */
const PublicLayout: FunctionComponent<PropsWithChildren> = ({ children }) => {
  const onMobile = useIsMobile();
  const bottomBarVisible = onMobile || BOTTOM_BAR_DESKTOP_VISIBLE;

  document.title = APPAPP_TITLEPUBLIC;

  return (
    <TopBarAndSideBarLayout sidebarItems={SIDE_BAR_ITEMS_PUBLIC} title={APPAPP_TITLEPUBLIC} variant="sidebarAlwaysTemporary">
      {children}
      <Stack component="footer">{bottomBarVisible && <BottomBar items={BOTTOM_BAR_ITEMS} />}</Stack>
    </TopBarAndSideBarLayout>
  );
};

export default PublicLayout;
