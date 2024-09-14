interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  text?: string;
  icon?: React.ReactNode;
}

import style from './style.module.css';

export const Button: React.FC<Props> = ({ text, icon, ...props }) => {
  return (
    <button className={style.button} {...props}>
      {icon && <span>{icon}</span>}
      {text && <span>{text}</span>}
    </button>
  );
};
