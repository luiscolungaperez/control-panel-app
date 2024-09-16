import { Dropdown } from '@/components/common/dropdown';
import { RandomUser } from '@/types/Person';

interface Props {
  gender: RandomUser.Gender;
  setGender: React.Dispatch<React.SetStateAction<RandomUser.Gender>>;
}

export const FilterUsers: React.FC<Props> = ({ gender, setGender }) => {
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

  const updateValue = (value?: string | number) => {
    setGender(value as RandomUser.Gender);
  };

  return (
    <article>
      <Dropdown
        options={options}
        label='Filter by gender'
        value={gender}
        onClick={updateValue}
      />
    </article>
  );
};
