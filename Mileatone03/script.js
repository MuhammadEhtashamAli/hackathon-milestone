//Get References to the form and Display Area
var form = document.getElementById('resume-form');
var resemeDisplayElement = document.getElementById('resume-display');
//Handle Form Submission
form.addEventListener('submit', function (event) {
    event.preventDefault();
    //collect input values
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var phone = document.getElementById('phone').value;
    var education = document.getElementById('education').value;
    var experience = document.getElementById('experience').value;
    var skills = document.getElementById('skills').value;
    //Generate the resume
    var resumeHTML = "\n<h2><b>Resume</b></h2>\n<h3>personal Information </h3>\n<p><b>Name:</b>".concat(name, "</p>\n<p><b>Email:</b>").concat(email, "</p>\n<p><b>Phone:</b>").concat(phone, "</p>\n<h3>Education</h3>\n<p>").concat(education, "</p>\n\n<h3>Experience</h3>\n<p>").concat(experience, "</p>\n\n<h3>Skills</h3>\n<p>").concat(skills, "</p>\n\n");
    //Display the Generated Resume
    if (resemeDisplayElement) {
        resemeDisplayElement.innerHTML = resumeHTML;
    }
    else {
        console.error('The resume Display element is missing');
    }
});
