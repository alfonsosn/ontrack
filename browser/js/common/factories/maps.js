var maps = [{	
	year: "freshman",
	semester: "fall",
	classes: [{
		title: "MATH 125 - Precalculus",
		fulfills: "Math and Quantitative Reasoning",
		credits: 4
	},
	{
		title: "ENGL 120 - Expository Writing",
		fulfills: "English Composition I",
		credits: 3
	},
	{
		title: "Individual and Society Social Sciences",
		fulfills: "Major Req",
		credits: 3
	},
	{
		title: "CSCI 127 - Introduction to Computer Science",
		fulfills: "Scientific World",
		credits: 3
	},
	{
		title: "Foreign Language Elementary Level 1",
		fulfills: "World Cultures & Global Issues",
		credits: 3
	}]
},
{
	year: "freshman",
	semester: "spring",
	classes: [{
			title: "MATH 150 - Calculus",
			fulfills: "Major Req",
			credits: 4
		},
		{
			title: "ENGL 220 - Introduction to Writing about Literature",
			fulfills: "English Composition 2",
			credits: 3
		},
		{
			title: "CSCI 135 - Software Analysis and Design I",
			fulfills: "Major Req",
			credits: 3
		},
		{
			title: "CSCI 136 - Supervised Programming Lab",
			fulfills: "Major Req",
			credits: 1
		},
		{
			title: "Foreign Language Elementary Level 2",
			fulfills: "Hunter Focus: Foreign Language",
			credits: 3
		}
	]
},

{
	year: "sophomore",
	semester: "fall",
	classes: [{
		title: "CSCI 150 - Discrete Structures",
		fulfills: "Major Req",
		credits: 3
	},
	{
		title: "MATH 155 - Calculus with Analytic Geometry II",
		fulfills: "Major Req",
		credits: 4
	},
	{
		title: "Elective",
		fulfills: "US Experience in its Diversity",
		credits: 3
	},
	{
		title: "Elective",
		fulfills: "Creative Expression",
		credits: 3
	},
	{
		title: "Foreign Language Intermediate Level 1",
		fulfills: "Hunter Focus: Foreign Language",
		credits: 3
	}]	
},
{
	year: "sophomore",
	semester: "spring",
	classes: [{
		title: "CSCI 160 - Computer Architecture I",
		fulfills: "Major Req",
		credits: 3
	},
	{
		title: "CSCI 235 - Software Analysis and Design II",
		fulfills: "Major Req",
		credits: 3
	},
	{
		title: "Elective",
		fulfills: "Life and Physical Sciences",
		credits: 4
	},
	{
		title: "Elective",
		fulfills: "Individual and Society Humanities",
		credits: 3
	},
	{
		title: "Foreign Language Intermediate Level 2",
		fulfills: "Hunter Focus: Foreign Language",
		credits: 3
	}]
},
{
	year: "junior",
	semester: "fall",
	classes:
	[{
		title: "CSCI 260 - Computer Architecture II",
		fulfills: "Major Req",
		credits: 3
	},
	{
		title: "CSCI 335 - Software Analysis and Design III",
		fulfills: "Major Req",
		credits: 3
	},
	{
		title: "MATH 160 - Matrix Algebra",
		fulfills: "Major Req",
		credits: 3
	},
	{
		title: "Elective",
		fulfills: "Hunter Focus: Concentrated Study",
		credits: 3
	}]
},
{
	year: "junior",
	semester: "spring",
	classes:[
		{
			title: "CSCI 265 - Computer Theory I",
			fulfills: "Major Req",
			credits: 3
		},
		{
			title: "CSCI 360 - Computer Architecture III",
			fulfills: "Major Req",
			credits: 3
		},
		{
			title: "STAT 213 - Introduction to Applied Statistics",
			fulfills: "Major Req",
			credits: 3
		},
		{
			title: "300-/400-level CSCI Elective",
			fulfills: "Major Req",
			credits: 3
		}
	]
},
{
	year: "senior",
	semester: "fall",
	classes:[
	{
		title: "CSCI 340 - Operating Systems",
		fulfills: "Major Req",
		credits: 3
	},
	{
		title: "300-/400-level CSCI Elective",
		fulfills: "Major Req",
		credits: 3
	},
	{
		title: "300-/400-level CSCI Elective",
		fulfills: "Major Req",
		credits: 3
	},
	{
		title: "300-/400-level CSCI Elective",
		fulfills: "Major Req",
		credits: 3
	}]  
},
{
	year: "senior",
	semester: "spring",
	classes:[ 
	{
		title: "CSCI 499 - Advanced Applications: A Capstone for Majors",
		fulfills: "Major Req",
		credits: 4
	},
	{
		title: "300-/400-level CSCI Elective",
		fulfills: "Major Req",
		credits: 3
	},
	{
		title: "300-/400-level CSCI Elective",
		fulfills: "Major Req",
		credits: 3
	},
	{
		title: "Elective",
		fulfills: "Major Req",
		credits: 3
	}] 
}];

var years = ["freshman", "sophomore", "junior", "senior"];

app.factory('maps', function(){
	return {
		getYears: function(){
			return years;
		},
		getMap: function(year){
			return maps.filter(function(entry){
				return entry.year == year;
			})
		}
	}
})