import { TimerIcon } from 'lucide-react';
import styles from './styles.module.css';

export function Header() {
  return (
    <div className={styles.header}>
      <a className={styles.headerLink} href='#'>
        <TimerIcon />
        <span>Chronos</span>
      </a>
    </div>
  );
}