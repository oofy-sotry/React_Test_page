import { makeAutoObservable } from 'mobx';

class FormDataStore {
  serverHost: string = "";
  databaseName: string = "";
  username: string = "";
  password: string = "";

  constructor() {
    makeAutoObservable(this);
  }

  setServerHost(value: string) {
    this.serverHost = value;
  }

  setDatabaseName(value: string) {
    this.databaseName = value;
  }

  setUsername(value: string) {
    this.username = value;
  }

  setPassword(value: string) {
    this.password = value;
  }

  resetFields() {
    this.serverHost = "";
    this.databaseName = "";
    this.username = "";
    this.password = "";
  }

  formData: {
    serverHost: string;
    databaseName: string;
    username: string;
    password: string;
  } = {
    serverHost: "",
    databaseName: "",
    username: "",
    password: "",
  };

  handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    this.formData = {
      ...this.formData,
      [name]: value,
    };
  };
}

const formDataStore = new FormDataStore();

export default formDataStore;