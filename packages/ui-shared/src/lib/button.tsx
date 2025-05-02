import styles from './button.module.scss';

export function Button({children}: {children: React.ReactNode}) {
  return (
    <button className={styles['container']}>
      <span className={styles['text']}>{children}</span>
    </button>
  );
}

export default Button;
