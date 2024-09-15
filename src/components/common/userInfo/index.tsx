import { getCountryData, TCountryCode } from 'countries-list';

interface Props {
  name: string;
  nationality: TCountryCode;
  avatar: string;
  location: RandomUser.Location;
}

import styles from './style.module.css';

export const UserInfo: React.FC<Props> = ({
  avatar,
  location,
  name,
  nationality,
}) => {
  return (
    <article className={styles['user-info']}>
      <div className={styles['avatar-wrapper']}>
        <img className={styles.avatar} src={avatar} alt={name} />
        <img
          className={styles.flag}
          alt={getCountryData(nationality).name}
          src={`http://purecatamphetamine.github.io/country-flag-icons/3x2/${nationality}.svg`}
        />
      </div>
      <span className={styles.name}>{name}</span>
      <span>
        {getCountryData(nationality).name} - {nationality}
      </span>

      <span>
        {location.city} - {location.state}
      </span>
    </article>
  );
};
