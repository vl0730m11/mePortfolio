import { useState, userRef, useRef, useCallback } from 'react';
import classes from './auth-form.module.css';
import { signIn } from 'next-auth/client'
import { useRouter } from 'next/router';
import toast from "../ui/toast";
import "react-toastify/dist/ReactToastify.css";
import Backdrop from '../modals/backdrop';

async function createUser(email, password) {
  const response = await fetch('/api/auth/signup', {
    method: 'POST',
    body: JSON.stringify({ email, password }),
    headers: {
      'Content-Type': 'application/json'
    }
  });

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || 'Something went wrong!');
  }

  return data;
}

function AuthForm() {
  //2 ways binding
  const emailInputRef = useRef();
  const passwordInputRef = useRef();


  const [isLogin, setIsLogin] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const notify = useCallback((type, message) => {
    toast({ type, message });
  }, []);

  function switchAuthModeHandler() {
    setIsLogin((prevState) => !prevState);
  }

  async function submitHandler(event) {
    event.preventDefault();
    notify("loading", "Validating, Please wait...");
    setIsLoading(true);

    const enteredEmail = emailInputRef.current.value;
    const enteredPassword = passwordInputRef.current.value;

    //optional: Add validation

    if (isLogin) {
      //log user in
      const result = await signIn('credentials', {
        redirect: false,
        email: enteredEmail,
        password: enteredPassword
      });

      console.log(result);
      setIsLoading(false);
      toast.dismiss();

      if (!result.error) {
        //set some auth state
        notify("success", "Logged in!");
        router.replace('/profile');
      }

      if (result.error) {
        //set some auth state
        emailInputRef.current.value = "";
        passwordInputRef.current.value = "";
        notify("error", "Your email or password is incorrect!");
      }
      

    } else {
      try {
        const result = await createUser(enteredEmail, enteredPassword);
        console.log(result);
        setIsLoading(false);
        toast.dismiss();

        if (!result.error) {
          //set some auth state
          notify("success", "You may now sign in!");
        }
        if (result.error) {
          //set some auth state
          notify("error", "Your email is already registered");
        }
        

      } catch (error) {
        console.log(error);
        setIsLoading(false);
        toast.dismiss();
        notify("error", "Error!");
      }

    }
  }

  return (
    <section className={classes.auth}>
      <h1>{isLogin ? 'Login' : 'Sign Up'}</h1>
      <form onSubmit={submitHandler}>
        <div className={classes.control}>
          <label htmlFor='email'>Your Email</label>
          <input type='email' id='email' required ref={emailInputRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor='password'>Your Password</label>
          <input type='password' id='password' required ref={passwordInputRef} />
        </div>
        <div className={classes.actions}>
          <button>{isLogin ? 'Login' : 'Create Account'}</button>
          <button
            type='button'
            className={classes.toggle}
            onClick={switchAuthModeHandler}
          >
            {isLogin ? 'Create new account' : 'Login with existing account'}
          </button>
        </div>
      </form>

      {/* <ToastContainer
                position="top-right"
                autoClose={5000}
                //autoClose={false}
                hideProgressBar={false}
                newestOnTop={false}
                draggable={false}
                pauseOnVisibilityChange
                closeOnClick
                pauseOnHover
                theme="light"
            /> */}

      {isLoading && <Backdrop />}
    </section>
  );
}

export default AuthForm;