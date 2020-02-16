export class CounterService {
    aToICounter: number = 0;
    iToaCounter: number = 0;

    fromActiveToInactive() {
        this.aToICounter++;
        console.log('From active to inactive: ' + this.aToICounter);
    }

    fromInactiveToActive() {
        this.iToaCounter++;
        console.log('From inactive to active: ' + this.iToaCounter);
    }
}