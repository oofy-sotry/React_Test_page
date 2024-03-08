import { makeAutoObservable } from 'mobx';

class DropdownOptionsStore {
  dropdownOptions: string[] = [];

  constructor() {
    makeAutoObservable(this);
  }

  setDropdownOptions(options: string[]) {
    this.dropdownOptions = options;
  }

  dropdownData: {
    options: string[];
  } = {
    options: []
  };
}

const dropdownOptionsStore = new DropdownOptionsStore();

export default dropdownOptionsStore;
