document.getElementById('appointmentForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const date = document.getElementById('date').value;
    const service = document.getElementById('service').value;

    if (name && date && service) {
        document.getElementById('appointmentMessage').innerHTML = 
            `<p>Thank you, ${name}. Your appointment for ${service} is scheduled for ${date}.</p>`;
        document.getElementById('appointmentForm').reset();
    } else {
        document.getElementById('appointmentMessage').innerHTML = 
            `<p style="color: red;">Please fill out all fields before submitting.</p>`;
    }
});
