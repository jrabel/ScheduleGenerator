let teamCounter = 0;

let team1, team2, team3, team4, team5, team6, team7, team8;

let teamsArray = [];



function Team(teamNumber, name, color, logo){
    this.teamNumber = teamNumber;
    this.name = name;
    this.color = color;
    this.logo = logo;

    /*this.record = [0,0,0];
    this.needsHomeGame = false;
    //this.canHaveBye = true;   lets not worry about byes for now

    this.schedule = {};


    this.scheduleDifficulty = 0;*/
}

testBtn.addEventListener("click", () => {
    const teamName = document.getElementsByName("teamName")[0].value;
    const teamColor = document.getElementsByName("teamColor")[0].value;
    const teamLogo = document.getElementsByName("teamLogo")[0].value;
    teamCounter++;
    const team = new Team(teamCounter, teamName, teamColor, teamLogo);
    
    saveTeam(team);
    teamImage(team);
});

const saveTeam = (team) => {
    switch (teamCounter) {
        case 1:
            team1 = team;
            teamsArray.push(team1);
            break;
        case 2:
            team2 = team;
            teamsArray.push(team2);
            break;
        case 3:
            team3 = team;
            teamsArray.push(team3);
            break;
        case 4:
            team4 = team;
            teamsArray.push(team4);
            break;
        case 5:
            team5 = team;
            teamsArray.push(team5);
            break;
        case 6:
            team6 = team;
            teamsArray.push(team6);
            break;
        case 7:
            team7 = team;
            teamsArray.push(team7);
            break;
        case 8:
            team8 = team;
            teamsArray.push(team8);
            break;
        default:
            alert("That's too many teams!");
            break;
    }

};

const displayTeams = (teamArray) => {
    teamArray.forEach(team => {
        Object.keys(team).forEach(key => {
            console.log(key, team[key]);
        });
    });
}

displayTeamsBtn.addEventListener("click", () => {
    displayTeams(teamsArray);
});

const teamImage = (teamObject) => {
    const testContainer = document.createElement("div");
    testContainer.classList.add("testContainer");

    const logoChoice = teamObject.logo;
    const logo = document.getElementById(logoChoice);
    clonePath(logo);
    const newLogo = document.getElementById(logoChoice + cloneCount);
    newLogo.classList.add("logoChoice");

    const logoBack = document.createElement("div");
    logoBack.classList.add("logoBack");

    const testDiv = document.getElementById("test");

    testDiv.appendChild(testContainer);

    testContainer.appendChild(newLogo);
    testContainer.appendChild(logoBack);

    const teamName =  document.createElement("p");
    teamName.classList.add("teamName");
    teamName.textContent += teamObject.name;

    testContainer.appendChild(teamName);

    const teamColor = teamObject.color;
    testContainer.classList.add(teamColor);
};

let cloneCount = 0;
const clonePath = (nodeObject) => {
    const clonedPath = nodeObject.cloneNode(true);
    cloneCount++;
    clonedPath.id = clonedPath.id + cloneCount;
    const parent = nodeObject.parentElement;
    parent.appendChild(clonedPath);
};