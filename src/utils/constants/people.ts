import { RandomUser } from '@/types/Person';
import { TCountryCode } from 'countries-list';

export const people: RandomUser.Result = {
  results: [
    {
      gender: 'male',
      name: {
        title: 'Mr',
        first: 'Bogdan',
        last: 'Gucalo',
      },
      location: {
        street: {
          number: 9420,
          name: 'Bobinskogo',
        },
        city: 'Kahovka',
        state: 'Luganska',
        country: 'Ukraine',
        postcode: 74039,
        coordinates: {
          latitude: '75.1336',
          longitude: '-4.6788',
        },
        timezone: {
          offset: '+11:00',
          description: 'Magadan, Solomon Islands, New Caledonia',
        },
      },
      email: 'bogdan.gucalo@example.com',
      login: {
        uuid: '13ff167b-68bc-4ab7-80a0-07cdc1e9190b',
        username: 'redbear110',
        password: '1979',
        salt: 'zFRXOSCb',
        md5: '8b422fd5d9d8c072d1cbf8fe5ca29163',
        sha1: '2b2600f2c4f6ff6b2c7dd34e5907bd4a6ed2050e',
        sha256:
          '0c27d7b2219844f624bf96febbd166511eebfbf77e61f5e3c15c5dde97f39c64',
      },
      dob: {
        date: '1972-04-13T19:36:35.113Z',
        age: 52,
      },
      registered: {
        date: '2018-04-25T09:28:45.654Z',
        age: 6,
      },
      phone: '(098) C85-1507',
      cell: '(098) K71-7165',
      id: {
        name: '',
        value: null,
      },
      picture: {
        large: 'https://randomuser.me/api/portraits/men/84.jpg',
        medium: 'https://randomuser.me/api/portraits/med/men/84.jpg',
        thumbnail: 'https://randomuser.me/api/portraits/thumb/men/84.jpg',
      },
      nat: 'UA' as TCountryCode,
    },
    {
      gender: 'male',
      name: {
        title: 'Mr',
        first: 'Slaviša',
        last: 'Rukavina',
      },
      location: {
        street: {
          number: 6520,
          name: 'Afi Ekong',
        },
        city: 'Vrnjačka Banja',
        state: 'Toplica',
        country: 'Serbia',
        postcode: 54705,
        coordinates: {
          latitude: '59.2963',
          longitude: '-31.8389',
        },
        timezone: {
          offset: '-4:00',
          description: 'Atlantic Time (Canada), Caracas, La Paz',
        },
      },
      email: 'slavisa.rukavina@example.com',
      login: {
        uuid: 'b2b2b8d5-ba4a-40fe-bf68-35c1db776bd7',
        username: 'heavyladybug457',
        password: 'recon',
        salt: '9BGoxYe1',
        md5: 'ffb7dbc81afb85591fc04035ab0e86e7',
        sha1: '178a822013a78fbf470e5e83979b6fdf59cd0849',
        sha256:
          '294f93ffbb9bf620926048c5d06bb64661202c67033306591c7041a0b1d89cb7',
      },
      dob: {
        date: '1985-03-04T08:25:56.949Z',
        age: 39,
      },
      registered: {
        date: '2019-11-11T02:54:50.106Z',
        age: 4,
      },
      phone: '015-4696-712',
      cell: '061-9952-317',
      id: {
        name: 'SID',
        value: '641044327',
      },
      picture: {
        large: 'https://randomuser.me/api/portraits/men/49.jpg',
        medium: 'https://randomuser.me/api/portraits/med/men/49.jpg',
        thumbnail: 'https://randomuser.me/api/portraits/thumb/men/49.jpg',
      },
      nat: 'RS' as TCountryCode,
    },
  ],
  info: {
    seed: 'b88512e2238eeacc',
    results: 2,
    page: 1,
    version: '1.4',
  },
};
