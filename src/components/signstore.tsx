import { makeAutoObservable } from 'mobx';

class SignDataStore {
    username: string = ""; 
    password: string = "";

    constructor() {
        makeAutoObservable(this);
    }

    setUsername(value: string) {
        this.username = value;
    }

    setPassword(value: string) {
        this.password = value;
    }

    resetFields() {
        this.username = "";
        this.password = "";
    }

    SignData: {
        username: string;
        password: string;
    } = {
        username: "",
        password: "",      
    };
}

// 클래스 대신 클래스의 인스턴스를 내보냄
const signDataStore = new SignDataStore();

export default signDataStore;
