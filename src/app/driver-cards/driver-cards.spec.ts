import { DriverCardsComponent } from './driver-cards.component';

describe('DriverCardsComponent', () => {
  let fixture: DriverCardsComponent;
  let driverServiceMock: any;

  beforeEach(() => {
    driverServiceMock = {

    };

    fixture = new DriverCardsComponent(
      driverServiceMock
    );

    describe('Setup component: ', () => {
      fixture.drivers$ = driverServiceMock;
    })
  })
})
