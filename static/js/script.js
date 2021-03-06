// Function for validation of form templates:
// jshint esversion: 6
// I studied this js validation function that was detailed in the mdbootstrap website and applied it to forms in my site - see Readme. 

(function () {
    'use strict';
    window.addEventListener('load', function () {
        // Fetch all of the forms that we are applying custom Bootstrap validation styles to
        const forms = document.getElementsByClassName('needs-validation');
        // Loop over them and prevent submission
        const validation = Array.prototype.filter.call(forms, function (form) {
            form.addEventListener('submit', function (event) {
                if (form.checkValidity() === false) {
                    event.preventDefault();
                    event.stopPropagation();
                }
                form.classList.add('was-validated');
            }, false);
        });
    }, false);
})();

// End of function for validation of form templates: