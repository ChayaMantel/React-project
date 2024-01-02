import { observable, action, computed, makeObservable, runInAction } from 'mobx';
class MeetingStore {
    listMeetings = [];
    constructor() {
        makeObservable(this, {
            listMeetings: observable,
            addMeeting: action,
            getMeetings: computed

        });
        this.initData();
    }
    initData() {
        fetch('http://localhost:8787/appointments').then((res) => {
            res.json().then((data) => {
                runInAction(() => {
                    this.listMeetings = data;
                    console.log("success")
                })
            });

        }).catch((error) => {
            console.log(error);
        });
    }

    addMeeting = async (meetingItem) => {

        try {
            const response = await fetch('http://localhost:8787/appointment', {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: meetingItem
            });
            if (response.status === 200 || response.status === 400) {
                if (response.status === 200)
                    this.listMeetings.push(meetingItem);
                return response.status;
            } else {
                throw new Error("Request failed with status " + response.status);
            }
        } catch (error) {
            console.log(error);
        }
    }

    get getMeetings() {
        return this.listMeetings;
    }
}
export default new MeetingStore();