import { useProfile } from './hook';

import { UserInfo } from '@/components/common/userInfo';
import { UserContact } from '@/components/profile/userContact';
import { UserUbication } from '@/components/profile/userUbication';
import { UsersProvider } from '@/context/users/context';
import { TCountryCode } from 'countries-list';
import styles from './style.module.css';

const Profile = () => {
  const { loadingProfile, profileData } = useProfile();

  if (loadingProfile) {
    return <>Loading</>;
  }

  return (
    <UsersProvider>
      <section className={styles.profile}>
        {profileData && (
          <>
            <UserInfo
              avatar={profileData.picture.large}
              location={profileData.location}
              nationality={profileData.nat as TCountryCode}
              name={`${profileData.name.first} ${profileData.name.last}`}
              gender={profileData.gender}
            />
            <UserContact cell={profileData.cell} email={profileData.email} />
            <UserUbication location={profileData.location} />
          </>
        )}
      </section>
    </UsersProvider>
  );
};

export default Profile;
