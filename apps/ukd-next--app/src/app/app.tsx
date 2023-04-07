// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { Routes, Route, redirect } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import NewsScreen from './screens/NewsScreen/NewsScreen';
import ProfileScreen from './screens/ProfileScreen/ProfileScreen';
import Schedule from './screens/Schedule/Schedule';
import { ScreenPaths } from './screens/ScreenPaths';


export function App() {
  return (
    <>
      <Routes>
        <Route path="*" element={<Schedule />} />
        <Route path={ScreenPaths.Schedule} element={<Schedule />} />
        <Route path={ScreenPaths.News} element={<NewsScreen />} />
        <Route path={ScreenPaths.Profile} element={<ProfileScreen />}/>
      </Routes>

      <Navbar />
    </>
  );
}

export default App;
