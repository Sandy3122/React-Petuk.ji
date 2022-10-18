function sendEmail() {
    Email.send({
        SecureToken: "8d7da916-bb45-481e-a919-9441daabcc97",
        To: 'seeram87@gmail.com',
        From: document.getElementById("email").value,
        Subject: "Query From Customer",
        Body: "First Name: " + document.getElementById("firstName").value +
            "<br> Last Name: " + document.getElementById("lastName").value +
            "<br> Mobile Number: " + document.getElementById("number").value +
            "<br Email: >" + document.getElementById("email").value +
            "<br> Message: " + document.getElementById("message").value
    }).then(
        message => alert(message)
    );
}