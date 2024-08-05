import ClassRoom from './0-classroom.js'; // Import the ClassRoom class

export function initializeRooms() { // Implementing the initializeRooms
  return [
    new ClassRoom(19),
    new ClassRoom(20),
    new ClassRoom(34)
  ];
}
