// Define the MajorCredits interface
interface MajorCredits {
    credits: number;
    brand: string; // Unique property to identify MajorCredits
}

// Define the MinorCredits interface
interface MinorCredits {
    credits: number;
    brand: string; // Unique property to identify MinorCredits
}

// Define a function to sum the credits of MajorCredits
function sumMajorCredits(subject1: MajorCredits, subject2: MajorCredits): number {
    return subject1.credits + subject2.credits;
}

// Define a function to sum the credits of MinorCredits
function sumMinorCredits(subject1: MinorCredits, subject2: MinorCredits): number {
    return subject1.credits + subject2.credits;
}

