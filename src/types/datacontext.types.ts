import { Logement } from './logement.types';
import { Activity } from './activity.types';

export interface DataContextProps {
  logements: Logement[];
  activities: Activity[];
  bookings: number;
  setBookings: (value: (prev:number) => number) => void;
  isBooked: boolean;
  setIsBooked: (value:boolean) => void;
}