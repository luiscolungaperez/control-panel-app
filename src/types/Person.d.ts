import { TCountryCode } from 'countries-list';

declare namespace RandomUser {
  interface Result {
    results: Person[];
    info: Info;
  }

  interface Info {
    seed: string;
    results: number;
    page: number;
    version: string;
  }

  interface Person {
    gender: string;
    name: Name;
    location: Location;
    email: string;
    login: Login;
    dob: Dob;
    registered: Dob;
    phone: string;
    cell: string;
    id: ID;
    picture: Picture;
    nat: TCountryCode;
  }

  interface Dob {
    date: string;
    age: number;
  }

  interface ID {
    name: string;
    value: string | null;
  }

  interface Location {
    street: Street;
    city: string;
    state: string;
    country: string;
    postcode: string | number;
    coordinates: Coordinates;
    timezone: Timezone;
  }

  interface Coordinates {
    latitude: string;
    longitude: string;
  }

  interface Street {
    number: number;
    name: string;
  }

  interface Timezone {
    offset: string;
    description: string;
  }

  interface Login {
    uuid: string;
    username: string;
    password: string;
    salt: string;
    md5: string;
    sha1: string;
    sha256: string;
  }

  interface Name {
    title: string;
    first: string;
    last: string;
  }

  interface Picture {
    large: string;
    medium: string;
    thumbnail: string;
  }

  interface Error {
    error: string;
  }
}
