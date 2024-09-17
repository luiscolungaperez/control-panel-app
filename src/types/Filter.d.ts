declare namespace Filters {
  interface Filters {
    total: number;
    currentPage: number;
    limit: number;
    gender: RandomUser.Gender;
    nat?: TCountryCode;
    ages?: string;
    modalIsOpen: boolean;
    actionName: {
      type: string;
      name: string;
    };
  }
}
