(function() {
    emailjs.init("NvOEBy4cUxjWPKc-h");
})();

document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const serviceID = 'service_8afq5xs';
    const templateID = 'template_x5a3jnt';

    emailjs.sendForm(serviceID, templateID, this)
        .then(() => {
            document.getElementById('form-status').textContent = 'Message sent successfully!';
            document.getElementById('form-status').style.color = 'green';
            this.reset();
        }, (error) => {
            document.getElementById('form-status').textContent = 'Failed to send message: ' + error.text;
            document.getElementById('form-status').style.color = 'red';
        });
});
