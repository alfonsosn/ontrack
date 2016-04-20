var majors = [ 
  { major: 'Accounting', credits: 64, elective: 14, description: "Accounting professionals help organizations determine their present and projected economic activities. Hunter’s curriculum prepares students for public and corporate careers, as well as those seeking advanced study in graduate school." },
  { major: 'Biology ', credits: 33.5, elective: 44.5, description: "Biology majors study the diversity of living organisms and the vital role of biology in the modern world. Students prepare for graduate study, medicine, dentistry, secondary school teaching, biotechnology, and industry." },
  { major: 'Computer Science', credits: 53, elective: 25, description: "Computer Science majors learn to design and implement software systems and gain a solid foundation in the essentials of computer architecture." },
  { major: 'Economics', credits: 24, elective: 54, description: "This STEM-like major is essentially a theory of how people make decisions when confronted with scarcity. It can lend insight into a wide range of subjects such as History, Law, Environment, and Health." }
  ]

app.factory('majors', function(){
	return {
		getMajors: function(){
			return majors;
		}
	}
})