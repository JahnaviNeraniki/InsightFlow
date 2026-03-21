import DashboardIcon from '@mui/icons-material/Dashboard';
import AnalyticsIcon from '@mui/icons-material/Analytics';
import SpeedIcon from '@mui/icons-material/Speed';
import NotificationsIcon from '@mui/icons-material/Notifications';
import SettingsIcon from '@mui/icons-material/Settings';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import SecurityIcon from '@mui/icons-material/Security';
import LogoutIcon from '@mui/icons-material/Logout';

export const preferences = [
  { id: 1, label: "Theme", icon: DarkModeIcon } ,
  { id: 2, label: "Security", icon: SecurityIcon } ,
  { id: 3, label: "Logout", icon: LogoutIcon }
];

export const menuItems = [
  { id: 1, label: "Dashboard", icon: DashboardIcon },
  { id: 2, label: "Analytics", icon: AnalyticsIcon },
  { id: 3, label: "Performance", icon: SpeedIcon },
  { id: 4, label: "Notifications", icon: NotificationsIcon },
  { id: 5, label: "Settings", icon: SettingsIcon }
];