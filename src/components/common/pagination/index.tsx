import clsx from 'clsx';
import {
  MdNavigateBefore,
  MdNavigateNext,
  MdOutlineKeyboardDoubleArrowLeft,
  MdOutlineKeyboardDoubleArrowRight,
} from 'react-icons/md';
import styles from './style.module.css';

interface Props {
  total: number;
  currentPage: number;
  limit: number;
  maxVisiblePages?: number;
  updatePage: (page: number) => void;
}

export const Pagination: React.FC<Props> = ({
  currentPage,
  total,
  limit,
  updatePage,
  maxVisiblePages = 5,
}) => {
  const totalPages = Math.ceil(total / limit);

  const startPage = Math.max(
    Math.min(
      currentPage - Math.floor(maxVisiblePages / 2),
      totalPages - maxVisiblePages + 1,
    ),
    1,
  );

  const endPage = Math.min(startPage + maxVisiblePages - 1, totalPages);

  const pagesButtons = Array.from(
    { length: endPage - startPage + 1 },
    (_, i) => startPage + i,
  );

  return (
    <div className={styles.pagination}>
      <button
        type='button'
        className={styles.button}
        onClick={() => updatePage(1)}
        disabled={currentPage === 1}
        aria-label='First page'>
        <MdOutlineKeyboardDoubleArrowLeft size={18} />
      </button>
      <button
        type='button'
        className={styles.button}
        disabled={currentPage === 1}
        onClick={() => updatePage(currentPage - 1)}
        aria-label='Before page'>
        <MdNavigateBefore size={18} />
      </button>
      {pagesButtons.map((page) => (
        <button
          key={`page-button-${page}`}
          className={clsx(
            currentPage === page ? styles['current-page'] : null,
            styles.button,
          )}
          disabled={currentPage === page}
          onClick={() => updatePage(page)}
          type='button'
          title={`Set page ${page}`}>
          {page}
        </button>
      ))}
      <button
        type='button'
        className={styles.button}
        disabled={currentPage === totalPages}
        onClick={() => updatePage(currentPage + 1)}
        aria-label='After page'>
        <MdNavigateNext size={18} />
      </button>
      <button
        type='button'
        className={styles.button}
        disabled={currentPage === totalPages}
        onClick={() => updatePage(totalPages)}
        aria-label='Last page'>
        <MdOutlineKeyboardDoubleArrowRight size={18} />
      </button>
    </div>
  );
};
