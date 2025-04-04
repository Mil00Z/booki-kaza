import { Logement } from './logement.types';
import { Activity } from './activity.types';

export interface DataContextProps {
  logements: Logement;
  activities: Activity;
  bookings: number;
  setBookings: () => void;
  isBooked: boolean;
  setIsBooked: () => void;
}