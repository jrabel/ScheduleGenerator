let teamCounter = 0;

let team1, team2, team3, team4, team5, team6, team7, team8;

let teamsArray = [];



function Team(teamNumber, teamName, color, logo){
    this.teamNumber = teamNumber;
    this.teamName = teamName;
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

const displayTeams = (array) => {
    array.forEach(element => {
        Object.keys(element).forEach(key => {
            console.log(key, element[key]);
        });
    });
}

displayTeamsBtn.addEventListener("click", () => {
    displayTeams(teamsArray);
});