import { useSession, getSession } from 'next-auth/client';
import { useEffect, useState } from 'react';

import ProfileForm from './profile-form';
import classes from './user-profile.module.css';

function UserProfile() {
  const [isLoading, setIsLoading] = useState(true);
  //const [loadedSession, setLoadedSession] = useState();
  
  useEffect(() => {
    getSession().then(session => {
      if (!session) {
        window.location.href = '/';
      } else {
        setIsLoading(false);
      }
      //setLoadedSession(session);
    })
  }, []);
  
  if (isLoading) {
    return <p className={classes.profile}>Loading...</p>
  }

  return (
    <section className={classes.profile}>
      <h1>Your User Profile</h1>
      <ProfileForm />
    </section>
  );
}

export default UserProfile;