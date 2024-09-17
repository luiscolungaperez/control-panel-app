import { Link, useMatches } from 'react-router-dom';
import styles from './styles.module.css';

const Breadcrumbs: React.FC = () => {
  const matches = useMatches();

  const breadcrumbsData: Record<string, string> = {
    '/': 'Home',
    '/profile': 'Profile',
    '/user/:name': 'User',
    '/messages': 'Messages',
  };

  return (
    <nav>
      <ul className={styles.breadcrumbs}>
        {matches[0].pathname === matches[1].pathname ? (
          <li className={styles['breadcrumb-item']}>
            {breadcrumbsData[matches[0].pathname]}
          </li>
        ) : (
          <>
            {matches.map((match, index) => {
              const isLast = index === matches.length - 1;
              const name = breadcrumbsData[match.pathname] || match.params.name;

              return (
                <li
                  key={`${match.pathname}-${index}`}
                  className={styles['breadcrumb-item']}>
                  {isLast ? (
                    <>{name}</>
                  ) : (
                    <Link to={match.pathname}>{name}</Link>
                  )}
                </li>
              );
            })}
          </>
        )}
      </ul>
    </nav>
  );
};

export default Breadcrumbs;
