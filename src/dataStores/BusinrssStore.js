
import { observable, action, computed, makeObservable, runInAction } from 'mobx';
import { observer } from 'mobx-react-lite';

class BusinessStore {
  businesses = null;

  constructor() {
    makeObservable(this, {
      businesses: observable,
      updateBusiness: action,
      getBusiness: computed,
    });

    this.initData();
  }

  initData() {
    fetch('http://localhost:8787/businessData')
      .then((res) => {
        res.json().then((data) => {
          runInAction(() => {
            this.businesses = data;
            console.log(res);

          });
        });
      })
      .catch((error) => {
        console.log("error", error);
      });


  }

  updateBusiness = async (businessItem) => {
    try {
      const response = await fetch('http://localhost:8787/businessData', {
        method: 'POST',
        body: JSON.stringify(businessItem),
        headers: {
          'Content-Type': 'application/json',
        }
      });

      runInAction(() => {
        if (response.ok) {
          this.businesses = businessItem;
          console.log('Successfully updated business', response);
        } else {
          console.log('Failed to update business');
        }
      });
    } catch (error) {
      console.log('Error:', error);
    }
  }

  get getBusiness() {
    return this.businesses;
  }
}

export default new BusinessStore();
