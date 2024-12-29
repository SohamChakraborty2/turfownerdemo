import React from 'react';
import { TimeSlot } from '../types/booking';

interface TimeSlotGridProps {
  timeSlots: TimeSlot[];
  onToggleBlock: (slotId: string) => void;
}

export function TimeSlotGrid({ timeSlots, onToggleBlock }: TimeSlotGridProps) {
  return (
    <div className="grid grid-cols-4 gap-4">
      {timeSlots.map((slot) => (
        <button
          key={slot.id}
          onClick={() => onToggleBlock(slot.id)}
          className={`p-3 rounded-lg text-sm ${
            slot.isBlocked
              ? 'bg-red-100 text-red-800 hover:bg-red-200'
              : 'bg-green-100 text-green-800 hover:bg-green-200'
          }`}
        >
          <div className="font-medium">{slot.startTime} - {slot.endTime}</div>
          <div className="text-xs mt-1">
            {slot.isBlocked ? 'Blocked' : 'Available'}
          </div>
        </button>
      ))}
    </div>
  );
}