import { useProfile } from './hook';

import { UserContact } from '@/components/common/userContact';
import { UserInfo } from '@/components/common/userInfo';
import { UserUbication } from '@/components/common/userUbication';
import { TCountryCode } from 'countries-list';
import styles from './style.module.css';

const Profile = () => {
  const { loadingProfile, profileData } = useProfile();

  if (loadingProfile) {
    return <>Loading</>;
  }

  return (
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
  );
};

export default Profile;
