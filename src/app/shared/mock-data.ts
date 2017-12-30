import { Newsfeed,Tournament, Camp, Team, Player } from './models/index';

export const NEWS: Newsfeed[] = [
    {
        title: "",
        subtitle: "Eagles win State Tournment",
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ornare magna eros, eu pellentesque tortor vestibulum ut. Maecenas non massa sem. Etiam finibus odio quis feugiat facilisis.",
        date:new Date()
    },
    { 
        title: "",
        subtitle: "Epic Loss at Nationals", 
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur maximus placerat augue, quis facilisis ex auctor sit amet. Donec eget mi et turpis maximus tempus." ,
        date:new Date()
    },
    { 
        title: "", 
        subtitle: "Local Girl has Chance at Olympics",
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur maximus placerat augue, quis facilisis ex auctor sit amet. Donec eget mi et turpis maximus tempus." ,
        date:new Date()
    },
    { 
        title: "", 
        subtitle: "Story 4",
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur maximus placerat augue, quis facilisis ex auctor sit amet. Donec eget mi et turpis maximus tempus." ,
        date:new Date()
    },
    { 
        title: "", 
        subtitle: "Story 5",
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur maximus placerat augue, quis facilisis ex auctor sit amet. Donec eget mi et turpis maximus tempus." ,
        date:new Date()
    },
    { 
        title: "", 
        subtitle: "Story 6",
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur maximus placerat augue, quis facilisis ex auctor sit amet. Donec eget mi et turpis maximus tempus." ,
        date:new Date()
    },
    { 
        title: "", 
        subtitle: "Story 7",
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur maximus placerat augue, quis facilisis ex auctor sit amet. Donec eget mi et turpis maximus tempus." ,
        date:new Date()
    },
    { 
        title: "", 
        subtitle: "Story 8",
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur maximus placerat augue, quis facilisis ex auctor sit amet. Donec eget mi et turpis maximus tempus." ,
        date:new Date()
    }
];

export const TOURNAMENTS: Tournament[] = [
    {
        name:"USSSA - Battle of the Bats",        
        location:"Madison, AL", //should be it's own class
        date:new Date()
        //need players array 
    },
    { 
        name:"USSSA - UAB Exposure",
        location:"Hoover / Fultondale",
        date:new Date()
    },
    { 
        name:"NSA - Fall Showdown",
        location:"Rainsville, AL",
        date:new Date()
    },
    { 
        name:"ASA - Tri State Exposure",
        location:"Florence, AL",
        date:new Date()
    },
    { 
        name:"ISA - Ladies of the Dirt",
        location:"Murfreesboro, TN",
        date:new Date()
    },
    { 
        name:"PGF - Tourney of Champs",
        location:"Nashville, TN",
        date:new Date()
    },
    { 
        name:"USGF - Queen of the Diamond",
        location:"Chattanooga, TN",
        date:new Date()
    }    
];

export const CAMPS: Camp[] = [
    {
        name:"DCB Elite Camp",        
        location:"Hoover, AL", //should be it's own class
        date:new Date()
        //need players array 
    },
    { 
        name:"Nike Elite",
        location:"Hoover / Fultondale",
        date:new Date()
    },
    { 
        name:"Alabama University",
        location:"Tuscaloosa",
        date:new Date()
    }
];
export const TEAMS: Team[] = [
    {
        name:"Team A",        
        location:"Hoover, AL", //should be it's own class     
      
    },
    { 
        name:"Team B",
        location:"Hoover / Fultondale",        
    },
    { 
        name:"Team C",
        location:"Tuscaloosa",       
    }
];

export const PLAYERS: Player[] = [
    {
        name:"Player A",        
        location:"Hoover, AL", //should be it's own class     
      
    },
    { 
        name:"Player B",
        location:"Hoover / Fultondale",        
    },
    { 
        name:"Player C",
        location:"Tuscaloosa",       
    }
];