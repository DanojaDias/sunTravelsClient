import {Hotel} from './hotel';
import {Contract} from './contract';
import {RoomType} from './room-type';


export class RoomTypeDetails {
  contract: Contract;
  roomType: RoomType;
  maxAdults: string;
  rate: Hotel;
  numberOfTotallRooms: number;
  numberOfFreeRooms: number;
}

