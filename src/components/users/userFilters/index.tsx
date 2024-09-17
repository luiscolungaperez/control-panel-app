import { Dropdown } from '@/components/common/dropdown';
import { useUserFilters } from './hook';

export const UserFilters: React.FC = () => {
  const {
    filters,
    genders,
    updateGenderFilter,
    nationalities,
    updateNatFilter,
    agesOptions,
    updateAgesFilter,
  } = useUserFilters();

  return (
    <article>
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
    </article>
  );
};
