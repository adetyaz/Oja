function sendEmail() {
    Email.send({
        Host: "smtp.elasticemail.com",
        Username: "tuneymitch@gmail.com",
        Password: "FA4F2EDE10E0B79F7691E370F8E1B1583D8C",
        To: 'illtiger3m@gmail.com',
        From: "test@example.com",
        Subject: "testing",
        Body: "hellow",
    }).then(
        message => alert("mail sent successfully")
    );
}

// Email.send({
//     SecureToken: "d52af831-0fdc-4170-83c3-1bd45241d055",
//     To: 'illtiger3m@gmail.com',
//     From: 'test@gmail.com', //document.querySelector('.subscribe__form').textContent,
//     Subject: "Testing",
//     Body: "And this is the body"
// }).then(
//     message => alert(message)
// );

//FA4F2EDE10E0B79F7691E370F8E1B1583D8C

//smtp.elasticemail.com

//prt: 2525

//token: d52af831-0fdc-4170-83c3-1bd45241d055