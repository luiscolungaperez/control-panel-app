import { Button } from '@/components/common/button';
import { Dropdown } from '@/components/common/dropdown';
import { useUserFilters } from './hook';

import styles from './styles.module.css';

export const UserFilters: React.FC = () => {
  const {
    filters,
    genders,
    updateGenderFilter,
    nationalities,
    updateNatFilter,
    agesOptions,
    updateAgesFilter,
    download,
  } = useUserFilters();

  return (
    <article className={styles.filters}>
      <Dropdown
        options={nationalities}
        label='Filter by natonality'
        value={filters.nat}
        onClick={updateNatFilter}
      />
      <Dropdown
        options={genders}
        label='Filter by gender'
        value={filters.gender}
        onClick={updateGenderFilter}
      />
      <Dropdown
        options={agesOptions}
        label='Filter by ages'
        value={filters.ages}
        onClick={updateAgesFilter}
      />
      <Button text='Download CSV' onClick={() => download()} />
    </article>
  );
};
