import clsx from 'clsx';
import { useState } from 'react';
import styles from './styles.module.css';

interface Props {
  placeholder: string;
  value?: string | number;
  options: Dropdown.Option[];
  onClick: (value: string | number) => void;
}

export const Dropdown: React.FC<Props> = ({
  options,
  placeholder = 'Select one option',
  value,
  onClick,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleIsOpen = () => setIsOpen((value) => !value);

  const handleClick = (value: string | number) => {
    onClick(value);
    handleIsOpen();
  };

  return (
    <div className={styles.dropdown}>
      <label htmlFor={`dropdown-${value || 'simple'}`}>{placeholder}</label>
      <button
        id={`dropdown-${value || 'simple'}`}
        name={`dropdown-${value || 'simple'}`}
        className={styles['dropdown-btn']}
        onClick={handleIsOpen}
        aria-expanded={isOpen}>
        {options.find((options) => options.value === value)?.label ||
          placeholder}
      </button>
      {isOpen && (
        <div
          role='listitem'
          className={clsx(styles['dropdown-content'], styles.show)}>
          {options?.map((option, index) => (
            <button
              type='button'
              className={styles.button}
              onClick={() => handleClick(option.value)}
              key={`${option.value}-${index}`}>
              {option.label}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};
