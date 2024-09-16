import clsx from 'clsx';
import { useDropdown } from './hook';
import styles from './styles.module.css';

interface Props {
  label?: string;
  value?: string | number;
  options: Dropdown.Option[];
  onClick: (value?: string | number) => void;
}

export const Dropdown: React.FC<Props> = ({
  options,
  label,
  value,
  onClick,
}) => {
  const { handleClick, isOpen, wrapperRef, handleIsOpen } =
    useDropdown(onClick);

  return (
    <>
      <div ref={wrapperRef} className={styles.dropdown}>
        {label && (
          <label htmlFor={`dropdown-${value || 'simple'}`}>{label}:</label>
        )}
        <button
          id={`dropdown-${value || 'simple'}`}
          name={`dropdown-${value || 'simple'}`}
          className={styles['dropdown-btn']}
          onClick={handleIsOpen}
          aria-expanded={isOpen}>
          {options.find((options) => options.value === value)?.label ||
            'Select a option'}
        </button>
        {isOpen && (
          <div
            role='listitem'
            className={clsx(styles['dropdown-content'], styles.show)}>
            <button
              type='button'
              className={styles.button}
              onClick={() => handleClick(undefined)}>
              Clear options
            </button>
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
    </>
  );
};
