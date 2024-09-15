import { useProfile } from './hook';

import { UserInfo } from '@/components/common/userInfo';
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
          />
        </>
      )}
    </section>
  );
};

export default Profile;
