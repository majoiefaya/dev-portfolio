// filepath: c:\\Users\\othma\\Desktop\\Portfolio\\assets\\js\\contactForm.js
(function(){
    emailjs.init("AaVqb3IhL64FDK4Di"); // Initialize EmailJS with your User ID
})();

document.addEventListener('DOMContentLoaded', function () {
    const contactForm = document.getElementById('contact-form');
    const formSuccess = document.getElementById('form-success');
    const formError = document.getElementById('form-error');
    if (!contactForm) return;

    contactForm.addEventListener('submit', function (e) {
        e.preventDefault();
        const formData = new FormData(contactForm);

        // Extract form data for auto-reply parameters
        // Make sure these field names ('name', 'email', 'subject', 'message') match the 'name' attributes in your HTML form inputs
        const name = formData.get('name');
        const email = formData.get('email');
        const subject = formData.get('subject');
        const message = formData.get('message'); // Added for the auto-reply

        // Using Email.js service for sending emails
        // Send the main contact email to yourself
        emailjs.sendForm('service_acjju2p', 'template_t2xh9gl', this) // 'this' refers to the form element
        .then(function (response) {
            console.log('SUCCESS! Contact email sent.', response.status, response.text);

            // Now send the auto-reply email to the user
            const autoReplyTemplateID = 'template_5cn1h85'; // IMPORTANT: Verify this is your auto-reply template ID from EmailJS
            const autoReplyParams = {
                name: name,
                email: email, // This 'email' field is used by EmailJS to populate the {{email}} variable in your auto-reply template's "To Email" setting
                subject: subject,
                message: message // Added message for the auto-reply template
            };

            emailjs.send('service_acjju2p', autoReplyTemplateID, autoReplyParams)
                .then(function(autoReplyResponse) {
                    console.log('SUCCESS! Auto-reply email sent.', autoReplyResponse.status, autoReplyResponse.text);
                }, function(autoReplyError) {
                    console.error('FAILED to send auto-reply...', autoReplyError);
                    // You might want to inform the user that the auto-reply failed,
                    // but their main message was received. For now, it just logs to console.
                });

            contactForm.reset();
            formSuccess.classList.remove('hidden');
            formError.classList.add('hidden');
            setTimeout(() => {
                formSuccess.classList.add('hidden');
            }, 5000);
        }, function (error) {
            formError.classList.remove('hidden');
            formSuccess.classList.add('hidden');
            setTimeout(() => {
                formError.classList.add('hidden');
            }, 5000);
            console.error('FAILED...', error);
        });
    });
});
