import { Link, useLocation } from 'react-router-dom';
import { ScreenPaths } from '../../screens/ScreenPaths';
import './Navbar.scss';

export default function Navbar() {
  const location = useLocation();

  function getIconClassName(pathname: ScreenPaths): string {
    if (pathname === location.pathname) {
      return 'navbar_icon_base navbar_icon_active';
    }
    return 'navbar_icon_base navbar_icon';
  }

  return (
    <div className="navbar_container">
      <Link to={ScreenPaths.News}>
        <div className={getIconClassName(ScreenPaths.News)}>
          <img src="/app/icons/news-icon.svg" alt="" />
        </div>
      </Link>

      <Link to={ScreenPaths.Schedule}>
        <div className={getIconClassName(ScreenPaths.Schedule)}>
          <img src="/app/icons/schedule-icon.svg" alt="" />
        </div>
      </Link>

      <Link to={ScreenPaths.Profile}>
        <div className={getIconClassName(ScreenPaths.Profile)}>
          <img src="/app/icons/profile-icon.svg" alt="" />
        </div>
      </Link>
    </div>
  );
}
