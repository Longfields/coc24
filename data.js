// (c) 2024 All code by LeaferStudios (https://www.khanacademy.org/profile/kaid_553656479258879622339276, https://longfields.github.io)
// Clash of Code (CoC) hosted by CowboysFan232 and Liam K. 

var coc_doesItWork = true; // Test run to see if it is usable as CDN

/**
Team Names
**/
var coc_teamOneName = "Fifth"; 
var coc_teamTwoName = "LeaferStudios";
var coc_teamThreeName = "Captain Longtreader";
var coc_teamFourName = "F4stBo1";


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
var coc_schedule = [
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
		},
	],


	calcScores: function() {
		var z = this.members.map(el => el.scores).reduce((a, b) => a + "," + b);
		var q = z.split(",").filter(x => x.trim().length && !isNaN(x)).map(Number);
		for (var i = 0; i < q.length; i++) {
			return q.reduce((partialSum, a) => partialSum + a, 0);;
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
		},
	],


	calcScores: function() {
		var z = this.members.map(el => el.scores).reduce((a, b) => a + "," + b);
		var q = z.split(",").filter(x => x.trim().length && !isNaN(x)).map(Number);
		for (var i = 0; i < q.length; i++) {
			return q.reduce((partialSum, a) => partialSum + a, 0);;
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
		},

	],


	calcScores: function() {
		var z = this.members.map(el => el.scores).reduce((a, b) => a + "," + b);
		var q = z.split(",").filter(x => x.trim().length && !isNaN(x)).map(Number);
		for (var i = 0; i < q.length; i++) {
			return q.reduce((partialSum, a) => partialSum + a, 0);;
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
		},
	],


	calcScores: function() {
		var z = this.members.map(el => el.scores).reduce((a, b) => a + "," + b);
		var q = z.split(",").filter(x => x.trim().length && !isNaN(x)).map(Number);
		for (var i = 0; i < q.length; i++) {
			return q.reduce((partialSum, a) => partialSum + a, 0);;
		}
	},

};

