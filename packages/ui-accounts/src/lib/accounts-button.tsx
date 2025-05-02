import styles from './accounts-button.module.scss';
import { Button } from '@nx-release-playground/ui-shared';

export function AccountsButton({children}: {children: React.ReactNode}) {
  return (
    <div className={styles['container']}>
      <Button>{children} <i>ACCOUNTS</i></Button>
    </div>
  );
}

export default AccountsButton;
