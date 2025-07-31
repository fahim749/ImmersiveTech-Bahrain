// Form validation for contact and quote forms
document.addEventListener('DOMContentLoaded', function() {
    const forms = document.querySelectorAll('form');
    
    forms.forEach(form => {
        form.addEventListener('submit', function(e) {
            let isValid = true;
            const inputs = this.querySelectorAll('input, textarea');
            
            inputs.forEach(input => {
                if (!input.value.trim()) {
                    input.style.border = '1px solid red';
                    isValid = false;
                } else {
                    input.style.border = '';
                }
                
                // Email validation
                if (input.type === 'email' && !isValidEmail(input.value)) {
                    input.style.border = '1px solid red';
                    isValid = false;
                }
            });
            
            if (!isValid) {
                e.preventDefault();
                alert('Please fill all required fields correctly.');
            } else {
                // In a real implementation, you would submit to a server here
                alert('Thank you for your message! We will contact you soon.');
                this.reset();
                e.preventDefault();
            }
        });
    });
    
    function isValidEmail(email) {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    }
});