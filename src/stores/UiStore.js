import { decorate, observable, action } from "mobx";

class UiStore {
    constructor() {
        this.currentUser = undefined;
    }

}

decorate(UiStore, {
    currentUser: observable
});

export default UiStore;
