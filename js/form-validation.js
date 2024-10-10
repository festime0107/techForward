document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('.register-form');
    const nameInput = form.querySelector('input[type="text"]');
    const emailInput = form.querySelector('input[type="email"]');
    const phoneInput = form.querySelector('input[type="tel"]');
    const attendanceInputs = form.querySelectorAll('input[name="attendance"]');
    const sessionSelect = form.querySelector('select');
    const ticketsInput = form.querySelector('input[type="number"]');
    const dateInput = form.querySelector('input[type="date"]');
    const submitButton = form.querySelector('button[type="submit"]');
    
    submitButton.addEventListener('click', (event) => {
        event.preventDefault();
        
        const errorMessages = form.querySelectorAll('.error-message');
        errorMessages.forEach((error) => error.remove());
        
        let isValid = true;
        
        if (nameInput.value.trim() === '') {
            showError(nameInput, 'Name is required');
            isValid = false;
        }
        
        if (!validateEmail(emailInput.value)) {
            showError(emailInput, 'Invalid email address');
            isValid = false;
        }
        
        if (!validatePhone(phoneInput.value)) {
            showError(phoneInput, 'Invalid phone number');
            isValid = false;
        }
        
        if (![...attendanceInputs].some(input => input.checked)) {
            showError(attendanceInputs[0], 'Please select an attendance type');
            isValid = false;
        }
        
        if (sessionSelect.value === '') {
            showError(sessionSelect, 'Please select a session');
            isValid = false;
        }
        
        if (ticketsInput.value <= 0) {
            showError(ticketsInput, 'Number of tickets must be greater than zero');
            isValid = false;
        }
        
        if (dateInput.value === '') {
            showError(dateInput, 'Arrival date is required');
            isValid = false;
        }

        if (isValid) {
            alert('Form submitted successfully!');
            // form.submit();
        }
    });
    
    function validateEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(email);
    }
    
    function validatePhone(phone) {
        const re = /^[0-9]{10,15}$/;
        return re.test(phone);
    }
    
    function showError(element, message) {
        const error = document.createElement('div');
        error.className = 'error-message';
        error.textContent = message;
        element.insertAdjacentElement('afterend', error);
    }
});
