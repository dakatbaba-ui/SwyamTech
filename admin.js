document.addEventListener('DOMContentLoaded', function () {
    // Admin Panel Functionality
    const pageSectionSelect = document.getElementById('pageSectionSelect');
    const contentTextArea = document.getElementById('contentTextArea');
    const saveContentBtn = document.querySelector('#contentManagementModal .btn-success'); // "Save Content" button
    const previewChangesBtn = document.querySelector('#contentManagementModal .btn-info'); // "Preview Changes" button

    if (saveContentBtn) {
        saveContentBtn.addEventListener('click', function() {
            const selectedSection = pageSectionSelect.value;
            const content = contentTextArea.value;
            if (selectedSection && content) {
                alert(`Simulating: Saving content for "${selectedSection}" section:\n${content}`);
                // In a real application, you would send this data to a backend API
            } else {
                alert('Please select a section and enter content to save.');
            }
        });
    }

    if (previewChangesBtn) {
        previewChangesBtn.addEventListener('click', function() {
            const selectedSection = pageSectionSelect.value;
            const content = contentTextArea.value;
            if (selectedSection && content) {
                alert(`Simulating: Previewing changes for "${selectedSection}" section with content:\n${content}`);
                // In a real application, you might open a preview modal or update a live preview area
            } else {
                alert('Please select a section and enter content to preview.');
            }
        });
    }

    // Services Management
    const addServiceBtn = document.querySelector('#servicesManagementModal .btn-primary'); // "Add New Service" button
    const deleteServiceBtn = document.querySelector('#servicesManagementModal .btn-danger'); // "Delete Existing Service" button
    const editServiceBtn = document.querySelector('#servicesManagementModal .btn-info'); // "Edit Selected Service" button
    const serviceSelect = document.getElementById('serviceSelect');

    if (addServiceBtn) {
        addServiceBtn.addEventListener('click', function() {
            alert('Simulating: Adding a new service. (Requires form for new service details)');
            // In a real application, this would open a form to add a new service
        });
    }

    if (deleteServiceBtn) {
        deleteServiceBtn.addEventListener('click', function() {
            const selectedService = serviceSelect.value;
            if (selectedService) {
                alert(`Simulating: Deleting service: "${selectedService}".`);
                // In a real application, this would send a request to delete the service
            } else {
                alert('Please select a service to delete.');
            }
        });
    }

    if (editServiceBtn) {
        editServiceBtn.addEventListener('click', function() {
            const selectedService = serviceSelect.value;
            if (selectedService) {
                alert(`Simulating: Editing service: "${selectedService}". (Requires form to edit service details)`);
            } else {
                alert('Please select a service to edit.');
            }
        });
    }

    // User Feedback
    const loadMoreFeedbackBtn = document.querySelector('#userFeedbackModal .btn-outline-success'); // "Load More Feedback" button

    if (loadMoreFeedbackBtn) {
        loadMoreFeedbackBtn.addEventListener('click', function() {
            alert('Simulating: Loading more user feedback. (Requires fetching data from a backend)');
            // In a real application, this would fetch more feedback and append it to the list
        });
    }

    // File Uploads
    const imageUpload = document.getElementById('imageUpload');
    const docUpload = document.getElementById('docUpload');
    const uploadFilesBtn = document.querySelector('#fileUploadsModal .btn-primary'); // "Upload Files" button

    if (uploadFilesBtn) {
        uploadFilesBtn.addEventListener('click', function() {
            let uploadedFiles = [];
            if (imageUpload.files.length > 0) {
                for (let i = 0; i < imageUpload.files.length; i++) {
                    uploadedFiles.push(imageUpload.files[i].name);
                }
            }
            if (docUpload.files.length > 0) {
                for (let i = 0; i < docUpload.files.length; i++) {
                    uploadedFiles.push(docUpload.files[i].name);
                }
            }

            if (uploadedFiles.length > 0) {
                alert(`Simulating: Uploading files: ${uploadedFiles.join(', ')}. (Requires backend handling)`);
                console.log('Files to upload:', uploadedFiles);
            } else {
                alert('No files selected for upload.');
            }
        });
    }

    // Logout functionality
    const logoutBtn = document.getElementById('logoutBtn');
    const logoutBtnOffcanvas = document.getElementById('logoutBtnOffcanvas');

    function handleLogout() {
        // In a real application, you would clear session storage/cookies and redirect
        window.location.href = 'index.html'; // Redirect to the main page
    }

    if (logoutBtn) {
        logoutBtn.addEventListener('click', handleLogout);
    }
    if (logoutBtnOffcanvas) {
        logoutBtnOffcanvas.addEventListener('click', handleLogout);
    }

    

    // Close offcanvas when a modal link is clicked
    const offcanvasModalLinks = document.querySelectorAll('#adminOffcanvasNavbar .nav-link[data-bs-toggle="modal"]']);
    const adminOffcanvasNavbar = document.getElementById('adminOffcanvasNavbar');
    if (adminOffcanvasNavbar) {
        const offcanvasInstance = bootstrap.Offcanvas.getInstance(adminOffcanvasNavbar) || new bootstrap.Offcanvas(adminOffcanvasNavbar);
        offcanvasModalLinks.forEach(link => {
            link.addEventListener('click', function() {
                offcanvasInstance.hide();
            });
        });
    }
});
