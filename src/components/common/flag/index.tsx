import { getCountryCode, getCountryData, TCountryCode } from 'countries-list';

interface Props {
  nationality?: TCountryCode;
  country?: string;
  width?: number;
  height?: number;
}

export const Flag: React.FC<Props> = ({
  nationality,
  country,
  width = 24,
  height = 24,
}) => {
  const code = nationality ? nationality : country && getCountryCode(country);

  return (
    <img
      width={width}
      height={height}
      alt={country || getCountryData(nationality as TCountryCode).name}
      src={`http://purecatamphetamine.github.io/country-flag-icons/3x2/${code}.svg`}
    />
  );
};
