// (c) 2024 All code by LeaferStudios (https://www.khanacademy.org/profile/kaid_553656479258879622339276, https://longfields.github.io)
// Clash of Code (CoC) hosted by CowboysFan232 and Liam K. 
var coc_doesItWork = true; // Test run to see if it is usable as CDN
/**
Team Names
You don't need to edit this
**/
var coc_teamOneName = "Fifth";
var coc_teamTwoName = "LeaferStudios";
var coc_teamThreeName = "Captain Longtreader";
var coc_teamFourName = "F4stBo1";

/**
 * SAMPLE:
 * Simply replace INSERT_PROFILE_LINK_HERE with users profile link and INSERT_NAME with username and INSERT_POSITION with position (if there is no 'position' or 'roles', you can just remove it).

<li><b><a target='_blank' href='INSERT_PROFILE_LINK_HERE'>INSERT_NAME</a></b> is a INSERT_POSITION judge.</li>

Copy/paste it to the string below, right after the last one.
**/
var judges = `
<li><b><a target='_blank' href='https://www.khanacademy.org/profile/kaid_160653079463992085090428'>Liam K.</a></b> is a chief judge.</li>
<li><b><a target='_blank' href='https://www.khanacademy.org/profile/kaid_160653079463992085090428'>This Could Be You!</a></b> is a judge.</li>
<li><b><a target='_blank' href='https://www.khanacademy.org/profile/kaid_160653079463992085090428'>This Could Be You!</a></b> is a judge.</li>
<li><b><a target='_blank' href='https://www.khanacademy.org/profile/kaid_160653079463992085090428'>This Could Be You!</a></b> is a judge.</li>
<li><b><a target='_blank' href='https://www.khanacademy.org/profile/kaid_160653079463992085090428'>This Could Be You!</a></b> is a judge.</li>

`;

/**
Clash of Code Schedule
SAMPLE:
{
name: "",
date: "",
img: "",
author: "",
content: "",
},
**/
var coc_schedule = [{
        name: "Drafting Begins",
        date: "Jan. 8. 2024",
        img: "https://upload.wikimedia.org/wikipedia/commons/7/71/Mica_Mountain_BC.jpg",
        author: "Liam K.",
        content: "The Draft officially opens and we will notify you of the results in the Tips and Thanks.",
    },
    {
        name: "Pairs Challenge",
        date: "Jan. 15. 2024",
        img: "https://upload.wikimedia.org/wikipedia/commons/7/71/Mica_Mountain_BC.jpg",
        author: "Cowboi",
        content: "The Pairs Challenge officially begins on Monday, January 15th. Pair up with another teammate to create an epic challenge.<br><br><b>Deadline:</b> January 29th<br><b>Theme: </b> TBA",
    },
    {
        name: "Title",
        date: "Dec. 31. 2023",
        img: "https://upload.wikimedia.org/wikipedia/commons/7/71/Mica_Mountain_BC.jpg",
        author: "LeaferStudios",
        content: "Hello world! Week 1 is here.",
    },
    {
        name: "Title",
        date: "Dec. 31. 2023",
        img: "https://upload.wikimedia.org/wikipedia/commons/7/71/Mica_Mountain_BC.jpg",
        author: "LeaferStudios",
        content: "Hello world! Week 1 is here.",
    },

];

/**
Clash of Code Team Data
**/
var coc_teamFifth = {
    name: "Fifth",
    color: "rgb(0, 8, 84);",
    members: [
        /**
         * SAMPLE:
         * 
         {
         name: '', // participant name
         link: 'https://www.khanacademy.org/profile/', // add kaid_ after
         avatar: 'https://cdn.kastatic.org/images/avatars/svg/', // add svg name after
         experience: 0, // GUIDE: 0 is Beginner, 1 is Intermediate, 2 is Advanced, 3 is Very Advanced, 4 is Expert
         scores: [0, 0, 0], // one for each challenge
         programs: ['#','#','#'], // one for each challenge
         bio: '', // custom requested through Tips and Thanks (Bio thread)
         }
        **/
        {
            name: "Fifth",
            link: "https://www.khanacademy.org/profile/kaid_1065213098995021368328526",
            avatar: "https://cdn.kastatic.org/images/avatars/svg/leaf-blue.svg",
            experience: 4,
            scores: [0, 0, 0],
            // extra
            programs: ['#', '#', '#'],
            bio: "@FifthStateOfMatter",
        }, {
            name: "Fifth",
            link: "https://www.khanacademy.org/profile/kaid_1065213098995021368328526",
            avatar: "https://cdn.kastatic.org/images/avatars/svg/leaf-blue.svg",
            experience: 4,
            scores: [0, 0, 0],
            // extra
            programs: ['#', '#', '#'],
            bio: "@FifthStateOfMatter",
        },
    ],


    calcScores: function() {
        var z = this.members.map(el => el.scores).reduce((a, b) => a + "," + b);
        var q = z.split(",").filter(x => x.trim().length && !isNaN(x)).map(Number);
        for (var i = 0; i < q.length; i++) {
            return q.reduce((partialSum, a) => partialSum + a, 0);
        }
    },

};
var coc_teamLeaferStudios = {
    name: "LeaferStudios",
    color: "rgb(0, 61, 33);",
    members: [
        /**
         * SAMPLE:
         * 
         {
         name: '', // participant name
         link: 'https://www.khanacademy.org/profile/', // add kaid_ after
         avatar: 'https://cdn.kastatic.org/images/avatars/svg/', // add svg name after
         experience: 0, // GUIDE: 0 is Beginner, 1 is Intermediate, 2 is Advanced, 3 is Very Advanced, 4 is Expert
         scores: [0, 0, 0], // one for each challenge
         programs: ['#','#','#'], // one for each challenge
         bio: '', // custom requested through Tips and Thanks (Bio thread)
         }
        **/
        {
            name: "LeaferStudios",
            link: "https://www.khanacademy.org/profile/kaid_553656479258879622339276/",
            avatar: "https://cdn.kastatic.org/images/avatars/svg/leafers-ultimate.svg",
            experience: 4,
            scores: [0, 0, 0],
            programs: ['#', '#', '#'],
            bio: "@LeaferStudios",
        }, {
            name: "LeaferStudios",
            link: "https://www.khanacademy.org/profile/kaid_553656479258879622339276/",
            avatar: "https://cdn.kastatic.org/images/avatars/svg/leafers-ultimate.svg",
            experience: 4,
            scores: [0, 0, 0],
            programs: ['#', '#', '#'],
            bio: "@LeaferStudios",
        },
    ],


    calcScores: function() {
        var z = this.members.map(el => el.scores).reduce((a, b) => a + "," + b);
        var q = z.split(",").filter(x => x.trim().length && !isNaN(x)).map(Number);
        for (var i = 0; i < q.length; i++) {
            return q.reduce((partialSum, a) => partialSum + a, 0);
        }
    },

};
var coc_teamCaptainLongtreader = {
    name: "Captain Longtreader",
    color: "rgb(59, 59, 59);",
    members: [
        /**
         * SAMPLE:
         * 
         {
         name: '', // participant name
         link: 'https://www.khanacademy.org/profile/', // add kaid_ after
         avatar: 'https://cdn.kastatic.org/images/avatars/svg/', // add svg name after
         experience: 0, // GUIDE: 0 is Beginner, 1 is Intermediate, 2 is Advanced, 3 is Very Advanced, 4 is Expert
         scores: [0, 0, 0], // one for each challenge
         programs: ['#','#','#'], // one for each challenge
         bio: '', // custom requested through Tips and Thanks (Bio thread)
         }
        **/
        {
            name: "Captain Longtreader",
            link: "https://www.khanacademy.org/profile/kaid_460330406411328152379375",
            avatar: "https://cdn.kastatic.org/images/avatars/svg/starky-ultimate.svg",
            experience: 4,
            scores: [0, 0, 0],
            programs: ['#', '#', '#'],
            bio: "@ThornSeaclaw",
        }, {
            name: "Captain Longtreader",
            link: "https://www.khanacademy.org/profile/kaid_460330406411328152379375",
            avatar: "https://cdn.kastatic.org/images/avatars/svg/starky-ultimate.svg",
            experience: 4,
            scores: [0, 0, 0],
            programs: ['#', '#', '#'],
            bio: "@ThornSeaclaw",
        },

    ],


    calcScores: function() {
        var z = this.members.map(el => el.scores).reduce((a, b) => a + "," + b);
        var q = z.split(",").filter(x => x.trim().length && !isNaN(x)).map(Number);
        for (var i = 0; i < q.length; i++) {
            return q.reduce((partialSum, a) => partialSum + a, 0);
        }
    },

};
var coc_teamFastBoi = {
    name: "F4stB01",
    color: "rgb(94, 56, 0);",
    members: [
        /**
         * SAMPLE:
         * 
         {
         name: '', // participant name
         link: 'https://www.khanacademy.org/profile/', // add kaid_ after
         avatar: 'https://cdn.kastatic.org/images/avatars/svg/', // add svg name after
         experience: 0, // GUIDE: 0 is Beginner, 1 is Intermediate, 2 is Advanced, 3 is Very Advanced, 4 is Expert
         scores: [0, 0, 0], // one for each challenge
         programs: ['#','#','#'], // one for each challenge
         bio: '', // custom requested through Tips and Thanks (Bio thread)
         }
        **/
        {
            name: "F4stB01",
            link: "https://www.khanacademy.org/profile/kaid_114585470331020100763556",
            avatar: "https://cdn.kastatic.org/images/avatars/svg/cs-hopper-cool.svg",
            experience: 4,
            scores: [0, 0, 0],
            // extra
            programs: ['#', '#', '#'],
            bio: "@f4stb01",
        }, {
            name: "F4stB01",
            link: "https://www.khanacademy.org/profile/kaid_114585470331020100763556",
            avatar: "https://cdn.kastatic.org/images/avatars/svg/cs-hopper-cool.svg",
            experience: 4,
            scores: [0, 0, 0],
            // extra
            programs: ['#', '#', '#'],
            bio: "@f4stb01",
        },
    ],


    calcScores: function() {
        var z = this.members.map(el => el.scores).reduce((a, b) => a + "," + b);
        var q = z.split(",").filter(x => x.trim().length && !isNaN(x)).map(Number);
        for (var i = 0; i < q.length; i++) {
            return q.reduce((partialSum, a) => partialSum + a, 0);
        }
    },

};


// Free Agents
var coc_freeAgents = [{
        name: "Example",
        link: "https://www.khanacademy.org/profile/kaid_1065213098995021368328526",
        avatar: "https://cdn.kastatic.org/images/avatars/svg/leaf-green.svg",
        experience: 0,
        programs: ['#', '#', '#'],
        bio: "Add yourself to the Free Agents list if you didn't get drafted by going to the 'Free Agents' thread in the Tips & Thanks. Be sure to fill out the form provided in the Tips & Thanks thread.",
    },
    {
        name: "Example",
        link: "https://www.khanacademy.org/profile/kaid_1065213098995021368328526",
        avatar: "https://cdn.kastatic.org/images/avatars/svg/leaf-green.svg",
        experience: 0,
        programs: ['#', '#', '#'],
        bio: "Add yourself to the Free Agents list if you didn't get drafted by going to the 'Free Agents' thread in the Tips & Thanks. Be sure to fill out the form provided in the Tips & Thanks thread.",
    },
];

var programs = [
    /**
     * SAMPLE:
    {
        name: '', // Tutorial Name
        link: '', // Tutorial Link
        thumb:'', // Thumbnail
        author:'', // Author Username
        authorKAID:'', // Author Profile Link
    },
    **/
    {
        name: "Web Components Tutorial",
        link: "https://www.khanacademy.org/computer-programming/web-components-tutorial/4992698549223424",
        thumb: "https://www.khanacademy.org/computer-programming/web-components-tutorial/4992698549223424/5180296297365504.png",
        author: 'LeaferStudios',
        authorKAID: 'https://www.khanacademy.org/profile/kaid_553656479258879622339276/',
    },
    {
        name: "Player Gravity Tutorial",
        link: "https://www.khanacademy.org/computer-programming/player-gravity-tutorial/6678198796042240",
        thumb: "https://www.khanacademy.org/computer-programming/player-gravity-tutorial/6678198796042240/6285397110177792.png",
        author: 'LeaferStudios',
        authorKAID: 'https://www.khanacademy.org/profile/kaid_553656479258879622339276/',
    },
    {
        name: "Tutorial: Material Icons",
        link: "https://www.khanacademy.org/computer-programming/tutorial-material-icons/5308181993177088",
        thumb: "https://www.khanacademy.org/computer-programming/tutorial-material-icons/5308181993177088/4693456192716800.png",
        author: 'LeaferStudios',
        authorKAID: 'https://www.khanacademy.org/profile/kaid_553656479258879622339276/',
    },
    {
        name: "Tutorial: Tabs",
        thumb: "https://www.khanacademy.org/computer-programming/tutorial-tabs/6101792480116736/5900794795868160.png",
        link: "https://www.khanacademy.org/computer-programming/tutorial-tabs/6101792480116736",
        author: 'LeaferStudios',
        authorKAID: 'https://www.khanacademy.org/profile/kaid_553656479258879622339276/',
    },
];
