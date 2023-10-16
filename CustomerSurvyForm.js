function submitForm() {
    var firstName = document.getElementById('firstName').value;
    var lastName = document.getElementById('lastName').value;
    var dob = document.getElementById('dob').value;
    var country = document.getElementById('country').value;
    var gender = (document.getElementById('male').checked ? 'Male' : '') + (document.getElementById('female').checked ? ', Female' : '');
    var profession = document.getElementById('profession').value;
    var email = document.getElementById('email').value;
    var mobile = document.getElementById('mobile').value;
    var popupContent = `
        <h2>First Name: ${firstName}</h2>
        <br>
        <h2>Last Name: ${lastName}</h2>
        <br>
        <h2>Date of Birth: ${dob}</h2>
        <br>
        <h2>Country: ${country}</h2>
        <br>
        <h2>Gender: ${gender}</h2>
        <br>
        <h2>Profession: ${profession}</h2>
        <br>
        <h2>Email: ${email}</h2>
        <br>
        <h2>Mobile Number: ${mobile}</h2>
    `;

    document.getElementById('popup-content').innerHTML = popupContent;
    document.getElementById('popup').style.display = 'block';
    return false; // Prevent form submission
}

function closePopup() {
    document.getElementById('popup').style.display = 'none';
    resetForm()
}

function resetForm() {
    document.getElementById('surveyForm').reset();
}