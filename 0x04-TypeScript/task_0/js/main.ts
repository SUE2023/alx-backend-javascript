// main.ts

interface Student {
    firstName: string;
    lastName: string;
    age: number;
    location: string;
}

// Create two student objects
const student1: Student = {
    firstName: "Jane",
    lastName: "Nyakundi",
    age: 30,
    location: "Kisii"
};

const student2: Student = {
    firstName: "Felix",
    lastName: "Kiptoo",
    age: 28,
    location: "Kericho"
};

// Create an array named studentsList containing the two student objects
const studentsList: Student[] = [student1, student2];

// Render a table using Vanilla JavaScript
const table = document.createElement('table');
const tableBody = document.createElement('tbody');

studentsList.forEach((student) => {
    const row = document.createElement('tr');

    const firstNameCell = document.createElement('td');
    firstNameCell.textContent = student.firstName;
    row.appendChild(firstNameCell);

    const locationCell = document.createElement('td');
    locationCell.textContent = student.location;
    row.appendChild(locationCell);

    tableBody.appendChild(row);
});

table.appendChild(tableBody);
document.body.appendChild(table);
