import { Dropdown } from '@/components/common/dropdown';
import { UsersContext } from '@/context/users/context';
import { RandomUser } from '@/types/Person';
import { useContext } from 'react';

export const FilterUsers: React.FC = () => {
  const context = useContext(UsersContext);
  const { filters, setFilters } = context!;

  const options: Dropdown.Option[] = [
    {
      label: 'Female',
      value: 'female',
    },
    {
      label: 'Male',
      value: 'male',
    },
  ];

  const updateValue = (gender?: string | number) => {
    setFilters({
      ...filters,
      gender: gender as RandomUser.Gender,
    });
  };

  return (
    <article>
      <Dropdown
        options={options}
        label='Filter by gender'
        value={filters.gender}
        onClick={updateValue}
      />
    </article>
  );
};
