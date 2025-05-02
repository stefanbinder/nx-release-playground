import { Button } from '@nx-release-playground/ui-shared';
import styles from './webshop-button.module.scss';

export function WebshopButton({children}: {children: React.ReactNode}) {
  return (
    <div className={styles['container']}>
      <Button>{children} WEBSHOP</Button>
    </div>
  );
}

export default WebshopButton;
