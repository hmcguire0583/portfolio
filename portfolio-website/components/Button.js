import { useRouter } from 'next/router';
import styles from './Button.module.css';

export const Button = ({ children, buttonStyle, buttonSize }) => {
  const router = useRouter();

  const STYLES = ['btn--primary', 'btn--outline'];
  const SIZES = ['btn--medium', 'btn--large'];

  const checkButtonStyle = STYLES.includes(buttonStyle) ? buttonStyle : STYLES[0];
  const checkButtonSize = SIZES.includes(buttonSize) ? buttonSize : SIZES[0];

  return (
    <button
      className={`${styles.btn} ${styles[checkButtonStyle]} ${styles[checkButtonSize]}`}
      onClick={() => router.push('/contact')}
      type="button"
    >
      {children}
    </button>
  );
};
