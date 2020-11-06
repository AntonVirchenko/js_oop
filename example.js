class Team{
    constructor(team,country, uefa) {
        this.team = team;
        this.country = country;
        this.uefa = uefa;
    }
}

class TeamFactory{
    create(team){
        if(team==='Barcelona'){
            return new Team(team,"Spain",true);
        }
        if(team==='Zorya'){
            return new Team(team,"Ukraine",false);
        }

    }
}

const factory = new TeamFactory();
const teams = [
    factory.create("Zorya"),
    factory.create("Barcelona")
]

teams.forEach(m=>{
    console.log(m);
})



