import { carPark } from "./car-park";

export class Driver {
  firstName: String;
  hour: Number;
  minute: Number;
  carParkType: carPark;
  location?: String;
}
