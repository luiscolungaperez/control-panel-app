import { getCountryCode, getCountryData, TCountryCode } from 'countries-list';

import styles from './style.module.css';

interface Props {
  nationality?: TCountryCode;
  country?: string;
}

export const Flag: React.FC<Props> = ({ nationality, country }) => {
  const code = nationality
    ? getCountryData(nationality)
    : country && getCountryCode(country);

  return (
    <img
      className={styles.flag}
      alt={country || getCountryData(nationality as TCountryCode).name}
      src={`http://purecatamphetamine.github.io/country-flag-icons/3x2/${code}.svg`}
    />
  );
};
