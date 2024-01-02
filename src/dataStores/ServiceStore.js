import { observable, action, computed, makeObservable, runInAction } from 'mobx';
class ServiceStore {
  listServices = [];

  constructor() {
    makeObservable(this, {
      listServices: observable,
      addService: action,
      getServices: computed

    });
    this.initData();
  }
  initData() {
    fetch("http://localhost:8787/services").then((res) => {
      res.json().then((data) => {
        runInAction(() => {
          console.log(res);
          this.listServices = data;

        })
      });

    }).catch((error) => {
      console.log(error);
    });
  }
 

  addService = async (serviceItem) => {
    try {
      const response = await fetch('http://localhost:8787/service', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(serviceItem)
      });

      runInAction(() => {
        if (response.status === 200) {
          this.listServices.push(serviceItem);
          console.log('Successfully added service', response);
        } else {
          console.log('Failed to add service');
        }
      });
    } catch (error) {
      console.log(error);
    }
  }

  get getServices() {
    return this.listServices;
  }

}
export default new ServiceStore();