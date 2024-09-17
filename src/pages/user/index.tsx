import { Card } from '@/components/common/card';
import { Message } from '@/components/common/message';
import { UserInfo } from '@/components/common/userInfo';
import { UserContact } from '@/components/profile/userContact';
import { UserUbication } from '@/components/profile/userUbication';
import { UsersContext } from '@/context/users/context';
import { TCountryCode } from 'countries-list';
import { useContext } from 'react';
import { useUser } from './hook';
import styles from './styles.module.css';

const User: React.FC = () => {
  const context = useContext(UsersContext);
  const { messages } = context!;
  const { user, isLoading } = useUser();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <section className={styles.user}>
      {user && (
        <>
          <UserInfo
            avatar={user.picture.large}
            location={user.location}
            nationality={user.nat as TCountryCode}
            name={`${user.name.first} ${user.name.last}`}
            gender={user.gender}
            age={user.dob.age}
            redirect={false}
          />
          <UserContact cell={user.cell} email={user.email} />
          <UserUbication location={user.location} />
          <Card title='Messages'>
            {!messages.length ? (
              <span>No messages</span>
            ) : (
              <>
                {messages.map(
                  (message) =>
                    message.user === `${user.name.first} ${user.name.last}` && (
                      <Message
                        key={`${message.user}-${message.title}`}
                        title={message.title}
                        message={message.message}
                      />
                    ),
                )}
              </>
            )}
          </Card>
        </>
      )}
    </section>
  );
};

export default User;
