document.addEventListener('DOMContentLoaded', function () {
    const loginModal = new bootstrap.Modal(document.getElementById('loginModal'));
    const registerModal = new bootstrap.Modal(document.getElementById('registerModal'));
    const adminLoginModal = new bootstrap.Modal(document.getElementById('adminLoginModal'));

    let isLoggedIn = false;

    // Show admin login modal if hash is #admin
    if (window.location.hash === '#admin') {
        adminLoginModal.show();
    }

    const loginWithOtpLink = document.getElementById('loginWithOtpLink');
    const loginWithPasswordLink = document.getElementById('loginWithPasswordLink');
    const passwordInputContainer = document.getElementById('passwordInputContainer');
    const otpInputContainer = document.getElementById('otpInputContainer');
    const loginButton = document.getElementById('loginButton');
    const sendOtpButton = document.getElementById('sendOtpButton');
    const emailInputContainer = document.getElementById('emailInputContainer');
    const phoneInputContainer = document.getElementById('phoneInputContainer');
    const otpLoginButton = document.getElementById('otpLoginButton');

    loginWithOtpLink.addEventListener('click', function (e) {
        e.preventDefault();
        passwordInputContainer.classList.add('d-none');
        loginButton.classList.add('d-none');
        emailInputContainer.classList.add('d-none');
        phoneInputContainer.classList.remove('d-none');
        sendOtpButton.classList.remove('d-none');
        otpInputContainer.classList.add('d-none');
        otpLoginButton.classList.add('d-none');
        loginWithOtpLink.parentElement.classList.add('d-none');
        loginWithPasswordLink.parentElement.classList.add('d-none');
    });

    loginWithPasswordLink.addEventListener('click', function (e) {
        e.preventDefault();
        passwordInputContainer.classList.remove('d-none');
        loginButton.classList.remove('d-none');
        emailInputContainer.classList.remove('d-none');
        phoneInputContainer.classList.add('d-none');
        sendOtpButton.classList.add('d-none');
        otpInputContainer.classList.add('d-none');
        otpLoginButton.classList.add('d-none');
        loginWithOtpLink.parentElement.classList.remove('d-none');
        loginWithPasswordLink.parentElement.classList.add('d-none');
    });

    sendOtpButton.addEventListener('click', function () {
        alert('OTP sent to your mobile number!');
        otpInputContainer.classList.remove('d-none');
        otpLoginButton.classList.remove('d-none');
    });

    // Handle login form submission
    document.getElementById('loginForm').addEventListener('submit', function (e) {
        e.preventDefault();
        if (!passwordInputContainer.classList.contains('d-none')) {
            alert('User login with password successful!');
        }
        else {
            alert('User login with OTP successful!');
        }
        isLoggedIn = true;
        loginModal.hide();
    });

    // Handle admin login form submission
    document.getElementById('adminLoginForm').addEventListener('submit', function (e) {
        e.preventDefault();
        const email = document.getElementById('adminLoginEmail').value;
        const password = document.getElementById('adminLoginPassword').value;

        if (email === 'admin@example.com' && password === 'password') {
            alert('Admin login successful! Redirecting to admin panel...');
            window.location.href = 'admin.html';
        } else {
            alert('Invalid admin credentials.');
        }
    });

    // Handle registration form submission
    document.getElementById('registerForm').addEventListener('submit', function (e) {
        e.preventDefault();
        alert('User registration successful!');
        registerModal.hide();
    });

    // Handle feedback form submission
    document.getElementById('feedbackForm').addEventListener('submit', function (e) {
        e.preventDefault();
        if (isLoggedIn) {
            alert('Thank you for your feedback!');
            document.getElementById('feedbackForm').reset();
        }
        else {
            alert('Please log in to submit feedback.');
            loginModal.show();
        }
    });

    // Handle mail button
    document.getElementById('mailButton').addEventListener('click', function () {
        if (isLoggedIn) {
            window.location.href = 'mailto:contact@techsolutions.example.com';
        }
        else {
            alert('Please log in to send an email.');
            loginModal.show();
        }
    });



    // Handle Forgot Password
    document.querySelectorAll('.forgot-password').forEach(item => {
        item.addEventListener('click', function (e) {
            e.preventDefault();
            alert('A password reset link has been sent to your email address.');
        });
    });

    // Handle social login buttons
    document.getElementById('googleLogin').addEventListener('click', function () {
        alert('Logging in with Google (simulated).');
        isLoggedIn = true;
        loginModal.hide();
    });

    // Scroll to top button logic
    const scrollToTopBtn = document.getElementById('scrollToTopBtn');

    window.addEventListener('scroll', function () {
        if (window.scrollY > 200) { // Show button after scrolling 200px
            scrollToTopBtn.style.display = 'flex';
        }
        else {
            scrollToTopBtn.style.display = 'none';
        }
    });

    scrollToTopBtn.addEventListener('click', function () {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    const searchIcon = document.getElementById('searchIcon');
    const searchForm = document.getElementById('searchForm');

    if (searchIcon) {
        searchIcon.addEventListener('click', function (e) {
            e.preventDefault();
            searchIcon.classList.add('d-none');
            searchForm.classList.remove('d-none');
        });
    }

    const offcanvasNavbar = document.getElementById('offcanvasNavbar');
    if (offcanvasNavbar) {
        offcanvasNavbar.addEventListener('show.bs.offcanvas', function () {
            document.body.classList.add('offcanvas-open');
        });
        offcanvasNavbar.addEventListener('hide.bs.offcanvas', function () {
            document.body.classList.remove('offcanvas-open');
        });
    }

    const servicesSubmenu = document.getElementById('servicesSubmenu');
    const contactSubmenu = document.getElementById('contactSubmenu');

    if (servicesSubmenu && contactSubmenu) {
        servicesSubmenu.addEventListener('show.bs.collapse', function () {
            if (contactSubmenu.classList.contains('show')) {
                const bsCollapse = bootstrap.Collapse.getInstance(contactSubmenu);
                if (bsCollapse) {
                    bsCollapse.hide();
                }
            }
        });

        contactSubmenu.addEventListener('show.bs.collapse', function () {
            if (servicesSubmenu.classList.contains('show')) {
                const bsCollapse = bootstrap.Collapse.getInstance(servicesSubmenu);
                if (bsCollapse) {
                    bsCollapse.hide();
                }
            }
        });
    }



    const modalLinks = document.querySelectorAll('.offcanvas-body a[data-bs-toggle="modal"]');
    const offcanvasNavbarElement = document.getElementById('offcanvasNavbar');

    modalLinks.forEach(link => {
        link.addEventListener('click', function () {
            if (offcanvasNavbarElement) {
                const offcanvasInstance = bootstrap.Offcanvas.getInstance(offcanvasNavbarElement) || new bootstrap.Offcanvas(offcanvasNavbarElement);
                offcanvasInstance.hide();
            }
        });
    });

    const aboutUsLink = document.querySelector('a[data-bs-target="#aboutUsModal"]');
    if (aboutUsLink) {
        aboutUsLink.addEventListener('click', function () {
            const servicesSubmenu = document.getElementById('servicesSubmenu');
            const contactSubmenu = document.getElementById('contactSubmenu');

            if (servicesSubmenu && servicesSubmenu.classList.contains('show')) {
                const bsCollapse = new bootstrap.Collapse(servicesSubmenu, {
                    toggle: false
                });
                bsCollapse.hide();
            }

            if (contactSubmenu && contactSubmenu.classList.contains('show')) {
                const bsCollapse = new bootstrap.Collapse(contactSubmenu, {
                    toggle: false
                });
                bsCollapse.hide();
            }
        });
    }

    // Handle feedback form submission in modal
    const feedbackFormModal = document.getElementById('feedbackFormModal');
    if(feedbackFormModal) {
        feedbackFormModal.addEventListener('submit', function (e) {
            e.preventDefault();
            if (isLoggedIn) {
                alert('Thank you for your feedback!');
                document.getElementById('feedbackFormModal').reset();
            }
            else {
                alert('Please log in to submit feedback.');
                loginModal.show();
            }
        });
    }

    // Handle mail button in modal
    const mailButtonModal = document.getElementById('mailButtonModal');
    if(mailButtonModal) {
        mailButtonModal.addEventListener('click', function () {
            if (isLoggedIn) {
                window.location.href = 'mailto:contact@techsolutions.example.com';
            }
            else {
                alert('Please log in to send an email.');
                loginModal.show();
            }
        });
    }

    // Animate About Us section on scroll
    const aboutSection = document.querySelector('#about');
    const aboutText = document.querySelector('.about-text');
    const aboutImage = document.querySelector('.about-image'); // Select the image

    if (aboutSection && aboutText) {
        const aboutObserver = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    aboutText.classList.add('is-visible');
                    if (aboutImage) { // Add class to image if it exists
                        aboutImage.classList.add('is-visible');
                    }
                }
            });
        }, {
            threshold: 0.5
        });

        aboutObserver.observe(aboutSection);
    }
});