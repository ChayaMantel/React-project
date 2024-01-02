import { observable, makeObservable, action ,computed} from 'mobx';

class Status {
    isLogin = false;

    constructor() {
        makeObservable(this, {
            isLogin: observable,
            setIsLogin: action,
            getIsLogin:computed,
        })
    }

    setIsLogin = (val) => {
        this.isLogin = val;
    }
    get getIsLogin(){
        return this.isLogin;
    }

}

export default new Status();