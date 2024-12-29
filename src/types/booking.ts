export interface Booking {
  id: string;
  customerName: string;
  date: string;
  startTime: string;
  endTime: string;
  status: 'confirmed' | 'cancelled';
  contactNumber: string;
}

export interface TimeSlot {
  id: string;
  startTime: string;
  endTime: string;
  isBlocked: boolean;
}