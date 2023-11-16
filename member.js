function skillsMember(memberName, memberSkills) {
    console.log(`${memberName}'s skills:`);
    memberSkills.forEach(skill => {
        console.log(skill);
    });
}

// Ejemplo de uso:
const memberName = "John Doe";
const memberSkills = ["JavaScript", "HTML", "CSS"];
skillsMember(memberName, memberSkills);
