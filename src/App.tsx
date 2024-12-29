import React, { useState } from 'react';
import { CalendarDays, LayoutGrid } from 'lucide-react';
import { Booking, TimeSlot } from './types/booking';
import { BookingCard } from './components/BookingCard';
import { TimeSlotGrid } from './components/TimeSlotGrid';

// Sample data - In a real app, this would come from an API
const initialBookings: Booking[] = [
  {
    id: '1',
    customerName: 'John Doe',
    date: '2024-03-15',
    startTime: '18:00',
    endTime: '19:00',
    status: 'confirmed',
    contactNumber: '+1 234-567-8900'
  },
  {
    id: '2',
    customerName: 'Jane Smith',
    date: '2024-03-15',
    startTime: '19:00',
    endTime: '20:00',
    status: 'confirmed',
    contactNumber: '+1 234-567-8901'
  }
];

const initialTimeSlots: TimeSlot[] = [
  { id: '1', startTime: '16:00', endTime: '17:00', isBlocked: false },
  { id: '2', startTime: '17:00', endTime: '18:00', isBlocked: false },
  { id: '3', startTime: '18:00', endTime: '19:00', isBlocked: true },
  { id: '4', startTime: '19:00', endTime: '20:00', isBlocked: true },
  { id: '5', startTime: '20:00', endTime: '21:00', isBlocked: false },
  { id: '6', startTime: '21:00', endTime: '22:00', isBlocked: false },
];

function App() {
  const [activeTab, setActiveTab] = useState<'bookings' | 'timeSlots'>('bookings');
  const [bookings] = useState<Booking[]>(initialBookings);
  const [timeSlots, setTimeSlots] = useState<TimeSlot[]>(initialTimeSlots);

  const handleToggleBlock = (slotId: string) => {
    setTimeSlots(slots =>
      slots.map(slot =>
        slot.id === slotId ? { ...slot, isBlocked: !slot.isBlocked } : slot
      )
    );
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <nav className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <h1 className="text-xl font-bold text-gray-900">Turf Manager</h1>
          </div>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="bg-white rounded-lg shadow">
          <div className="border-b border-gray-200">
            <nav className="flex -mb-px">
              <button
                onClick={() => setActiveTab('bookings')}
                className={`flex items-center px-6 py-4 text-sm font-medium ${
                  activeTab === 'bookings'
                    ? 'border-b-2 border-blue-500 text-blue-600'
                    : 'text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }`}
              >
                <CalendarDays className="w-5 h-5 mr-2" />
                Bookings
              </button>
              <button
                onClick={() => setActiveTab('timeSlots')}
                className={`flex items-center px-6 py-4 text-sm font-medium ${
                  activeTab === 'timeSlots'
                    ? 'border-b-2 border-blue-500 text-blue-600'
                    : 'text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }`}
              >
                <LayoutGrid className="w-5 h-5 mr-2" />
                Time Slots
              </button>
            </nav>
          </div>

          <div className="p-6">
            {activeTab === 'bookings' ? (
              <div className="space-y-6">
                <h2 className="text-lg font-medium text-gray-900">Today's Bookings</h2>
                <div className="space-y-4">
                  {bookings.map(booking => (
                    <BookingCard key={booking.id} booking={booking} />
                  ))}
                </div>
              </div>
            ) : (
              <div className="space-y-6">
                <h2 className="text-lg font-medium text-gray-900">Manage Time Slots</h2>
                <TimeSlotGrid timeSlots={timeSlots} onToggleBlock={handleToggleBlock} />
              </div>
            )}
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;