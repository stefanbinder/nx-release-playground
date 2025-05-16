import styles from './button.module.scss';
import { Studio } from '@nx-release-playground/studio';

export function Button({ children }: { children: React.ReactNode }) {
  return (
    <>
      <button className={styles['container']}>
        <span className={styles['text']}>{children}</span>
      </button>
      <Studio />
    </>
  );
}

export default Button;
