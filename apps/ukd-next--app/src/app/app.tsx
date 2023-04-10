// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import NewsScreen from './screens/NewsScreen/NewsScreen';
import ProfileScreen from './screens/ProfileScreen/ProfileScreen';
import Schedule from './screens/Schedule/Schedule';
import { ScreenPaths } from './screens/ScreenPaths';
import AuthScreen from './screens/AuthScreen/AuthScreen';
import SettingsScreen from './screens/SettingsScreen/SettingsScreen';

export function App() {
  return (
    <>
      <Routes>
        <Route path="*" element={<Schedule />} />
        <Route path={ScreenPaths.Schedule} element={<Schedule />} />
        <Route path={ScreenPaths.News} element={<NewsScreen />} />
        <Route path={ScreenPaths.Profile} element={<ProfileScreen />} />
        <Route path={ScreenPaths.Auth} element={<AuthScreen />} />
        <Route path={ScreenPaths.Auth} element={<AuthScreen />} />
        <Route path={ScreenPaths.Settings} element={<SettingsScreen />} />
      </Routes>
      <Navbar />
    </>
  );
}

export default App;
