import { Card } from '../card';
import { Flag } from '../flag';

interface Props {
  location: RandomUser.Location;
}

import styles from './style.module.css';

export const UserUbication: React.FC<Props> = ({ location }) => {
  return (
    <Card title='Location'>
      <div className={styles.nationality}>
        <Flag country={location.country} />
        {location.country}
      </div>
      <p>{location.city}</p>
      <p>Zip: {location.postcode}</p>
      <p>{location.state}</p>
      <p>
        {location.street.name} {location.street.number}
      </p>
      <p>{location.timezone.description}</p>
    </Card>
  );
};
