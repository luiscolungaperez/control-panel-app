import { Flag } from '@/components/common/flag';
import { UsersContext } from '@/context/users/context';
import { DropdownSpace } from '@/types/Dropdown';
import { RandomUser } from '@/types/Person';
import { useMutation } from '@tanstack/react-query';
import { TCountryCode } from 'countries-list';
import { useContext } from 'react';

export const useUserFilters = () => {
  const context = useContext(UsersContext);
  const { filters, setFilters } = context!;

  const genders: DropdownSpace.Option[] = [
    {
      label: 'Female',
      value: 'female',
    },
    {
      label: 'Male',
      value: 'male',
    },
  ];

  const nationalities: DropdownSpace.Option[] = [
    {
      label: 'Australia',
      value: 'AU',
      icon: <Flag nationality='AU' height={14} width={18} />,
    },
    {
      label: 'Brazil',
      value: 'BR',
      icon: <Flag nationality='BR' height={14} width={18} />,
    },
    {
      label: 'Canada',
      value: 'CA',
      icon: <Flag nationality='CA' height={14} width={18} />,
    },
    {
      label: 'Switzerland',
      value: 'CH',
      icon: <Flag nationality='CH' height={14} width={18} />,
    },
    {
      label: 'Germany',
      value: 'DE',
      icon: <Flag nationality='DE' height={14} width={18} />,
    },
    {
      label: 'Denmark',
      value: 'DK',
      icon: <Flag nationality='DK' height={14} width={18} />,
    },
    {
      label: 'Spain',
      value: 'ES',
      icon: <Flag nationality='ES' height={14} width={18} />,
    },
    {
      label: 'Finland',
      value: 'FI',
      icon: <Flag nationality='FI' height={14} width={18} />,
    },
    {
      label: 'France',
      value: 'FR',
      icon: <Flag nationality='FR' height={14} width={18} />,
    },
    {
      label: 'United Kingdom',
      value: 'GB',
      icon: <Flag nationality='GB' height={14} width={18} />,
    },
    {
      label: 'Ireland',
      value: 'IE',
      icon: <Flag nationality='IE' height={14} width={18} />,
    },
    {
      label: 'India',
      value: 'IN',
      icon: <Flag nationality='IN' height={14} width={18} />,
    },
    {
      label: 'Iran',
      value: 'IR',
      icon: <Flag nationality='IR' height={14} width={18} />,
    },
    {
      label: 'Mexico',
      value: 'MX',
      icon: <Flag nationality='MX' height={14} width={18} />,
    },
    {
      label: 'Netherlands',
      value: 'NL',
      icon: <Flag nationality='NL' height={14} width={18} />,
    },
    {
      label: 'Norway',
      value: 'NO',
      icon: <Flag nationality='NO' height={14} width={18} />,
    },
    {
      label: 'New Zealand',
      value: 'NZ',
      icon: <Flag nationality='NZ' height={14} width={18} />,
    },
    {
      label: 'Serbia',
      value: 'RS',
      icon: <Flag nationality='RS' height={14} width={18} />,
    },
    {
      label: 'Turkey',
      value: 'TR',
      icon: <Flag nationality='TR' height={14} width={18} />,
    },
    {
      label: 'Ukraine',
      value: 'UA',
      icon: <Flag nationality='UA' height={14} width={18} />,
    },
    {
      label: 'United States',
      value: 'US',
      icon: <Flag nationality='US' height={14} width={18} />,
    },
  ];

  const agesOptions: DropdownSpace.Option[] = [
    {
      label: '0 - 10 years',
      value: '1-10',
    },
    {
      label: '11 - 20 years',
      value: '11-20',
    },
    {
      label: '21 - 30 years',
      value: '21-30',
    },
    {
      label: '31 - 40 years',
      value: '31-40',
    },
    {
      label: '41 - 50 years',
      value: '41-50',
    },
    {
      label: '51 - 60 years',
      value: '51-60',
    },
    {
      label: '61 - 70 years',
      value: '61-70',
    },
    {
      label: '71 - 80 years',
      value: '71-80',
    },
    {
      label: '81 - 90 years',
      value: '81-90',
    },
    {
      label: '91 - 100 years',
      value: '91-100',
    },
    {
      label: '101 - 110 years',
      value: '101-110',
    },
  ];

  const updateGenderFilter = (gender?: string) => {
    setFilters({
      ...filters,
      gender: gender as RandomUser.Gender,
    });
  };

  const updateNatFilter = (nat?: string) => {
    setFilters({
      ...filters,
      nat: nat as TCountryCode,
    });
  };

  const updateAgesFilter = (ages?: string) => {
    setFilters({
      ...filters,
      ages,
    });
  };

  const { mutate } = useMutation({
    mutationFn: async () => {
      try {
        const response = await fetch(
          `${import.meta.env.VITE_APP_API}?format=csv`,
        );

        if (!response.ok) {
          throw new Error(`Error: ${response.statusText}`);
        }

        const data = await response.blob();

        if (data) {
          const url = window.URL.createObjectURL(data);
          const a = document.createElement('a');
          a.href = url;
          a.download = 'randomuser.csv';
          document.body.appendChild(a);
          a.click();
          a.remove();

          window.URL.revokeObjectURL(url);
        }
      } catch (error) {
        console.error('Error al descargar el archivo:', error);
      }
    },
  });

  return {
    filters,
    genders,
    nationalities,
    agesOptions,
    updateGenderFilter,
    updateNatFilter,
    updateAgesFilter,
    download: mutate,
  };
};
