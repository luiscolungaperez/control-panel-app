import { RandomUser } from '@/types/Person';

interface Props {
  location: RandomUser.Location;
}

import { Card } from '@/components/common/card';
import { Flag } from '@/components/common/flag';
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
