import { getCountryData, TCountryCode } from 'countries-list';

import { UsersContext } from '@/context/users/context';
import { RandomUser } from '@/types/Person';
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '../button';
import styles from './style.module.css';

interface Props {
  name: string;
  nationality: TCountryCode;
  avatar: string;
  location: RandomUser.Location;
  gender: string;
  redirect?: boolean;
  age: number;
}

export const UserInfo: React.FC<Props> = ({
  avatar,
  location,
  name,
  nationality,
  gender,
  age,
  redirect = false,
}) => {
  const context = useContext(UsersContext);
  const { handleIsOpenModal, setFilters } = context!;
  const navigate = useNavigate();

  const redirectUser = (name: string) => {
    navigate(`/user/${name}`);
  };

  const sendMessage = (e: React.MouseEvent, name: string) => {
    e.stopPropagation();
    setFilters((prevData) => ({
      ...prevData,
      actionName: {
        type: 'message',
        name,
      },
    }));
    handleIsOpenModal();
  };

  const deleteUserConfirm = (e: React.MouseEvent, name: string) => {
    e.stopPropagation();
    setFilters((prevData) => ({
      ...prevData,
      actionName: { type: 'delete', name },
    }));
    handleIsOpenModal();
  };

  return (
    <article
      tabIndex={0}
      style={redirect ? { cursor: 'pointer' } : {}}
      className={styles['user-info']}
      role={redirect ? 'button' : undefined}
      onClick={() => (redirect ? redirectUser(name) : undefined)}>
      <div className={styles['avatar-wrapper']}>
        <img className={styles.avatar} src={avatar} alt={name} />
        <img
          className={styles.flag}
          alt={getCountryData(nationality).name}
          src={`http://purecatamphetamine.github.io/country-flag-icons/3x2/${nationality}.svg`}
        />
      </div>
      <span className={styles.name}>{name}</span>
      <span>Age: {age}</span>
      <span>
        {getCountryData(nationality).name} - {nationality}
      </span>
      <span>
        {location.city} - {location.state}
      </span>
      <span style={{ textTransform: 'capitalize' }}>{gender}</span>
      {redirect && (
        <div className={styles.actions}>
          <Button
            text='Remove user'
            onClick={(e) => deleteUserConfirm(e, name)}
          />
          <Button text='Send message' onClick={(e) => sendMessage(e, name)} />
        </div>
      )}
    </article>
  );
};
