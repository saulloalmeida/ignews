import styles from "../SignInButton/styles.module.scss";
import { FaGithub } from "react-icons/fa";
import { FiX } from "react-icons/fi";
import {signIn, signOut, useSession} from 'next-auth/react'


export function SignInButton() {
  const {data:session} = useSession();
  return session ? (
    <button onClick={()=>{signOut()}} type="button" className={styles.signButton}>
      <FaGithub color="#04d361" />
      {session.user.name}
      <FiX color="#737380" className={styles.closeIcon} />
    </button>
  ) : (
    <button 
    onClick={()=>signIn('github')}
    type="button" className={styles.signButton}>
      <FaGithub color="#eba417" />
      Sign In with GitGub
    </button>
  );
}
