function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "tab") {
        x.className += " responsive";
    } else {
        x.className = "tab";
    }
}

function openSearch() {
    document.getElementById("myOverlay").style.display = "block";
}
  
function closeSearch() {
    document.getElementById("myOverlay").style.display = "none";
}


function menuBar(evt, menu) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(menu).style.display = "block";
    evt.currentTarget.className += " active";
}

// DARK MODE
const darkmodeCheckbox = document.getElementById('darkmode-checkbox');

darkmodeCheckbox.addEventListener('click', () => {
    document.body.classList.toggle('darkmode');
});

// When the user scrolls the page, execute myFunction 
window.onscroll = function() {myFunction()};

function myFunction() {
  var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  var scrolled = (winScroll / height) * 100;
  document.getElementById("myBar").style.width = scrolled + "%";
}


function toggleEdit() {
    const elements = document.querySelectorAll('.editable'); 
    const button = document.querySelector('.edit-button');
    const isEditing = button.textContent === 'Update Content';

    if (isEditing) {
        elements.forEach(element => {
            element.contentEditable = 'false'; 
            element.classList.remove('editing'); 
        });
        button.textContent = 'Edit';
    } else {
        elements.forEach(element => {
            element.contentEditable = 'true'; 
            element.classList.add('editing'); 
        });
        button.textContent = 'Update Content';
    }
}

// --CLASS SCHEDULE-- 
document.addEventListener('DOMContentLoaded', () => {
    const selectedSubjectsTable = document.querySelector('#selected-subjects-table tbody');
    const selectedSubjects = JSON.parse(localStorage.getItem('selectedSubjects')) || [];

    if (selectedSubjects.length > 0) {
        selectedSubjectsTable.innerHTML = selectedSubjects.map(subject => `
            <tr>
                <td>${subject.code}</td>
                <td>${subject.subject}</td>
                <td>${subject.description}</td>
                <td>${subject.units}</td>
                <td>${subject.instructor}</td>
                <td>${subject.schedule}</td>
                <td>${subject.room}</td>
            </tr>
        `).join('');
    } else {
        selectedSubjectsTable.innerHTML = '<tr><td colspan="7">No subjects selected.</td></tr>';
    }
});

document.addEventListener('DOMContentLoaded', () => {
    // Retrieve and parse values from localStorage
    const majorUnits = parseInt(localStorage.getItem('majorUnits') || '0', 10);
    const minorUnits = parseInt(localStorage.getItem('minorUnits') || '0', 10);
    const labSubjectCount = parseInt(localStorage.getItem('labSubjectCount') || '0', 10);
    const pathfitCount = parseInt(localStorage.getItem('pathfitCount') || '0', 10);
    const nstpCount = parseInt(localStorage.getItem('nstpCount') || '0', 10);
    // Fee rates
    const majorRate = 150;
    const minorRate = 100;
    const labRate = 150;
    const pathfitRate = 200;
    const nstpRate = 150;

    // Calculate fees
    const majorFees = majorUnits * majorRate;
    const minorFees = minorUnits * minorRate;
    const totalFees = majorFees + minorFees;
    const labFees = labSubjectCount * labRate;
    const pathfitFees = pathfitCount * pathfitRate;
    const nstpFees = nstpCount * nstpRate;
    const totalAssessment = totalFees + labFees + pathfitFees + nstpFees + 1421; // Adding miscellaneous fees

    // Display results
    document.getElementById('total-major-units').textContent = majorUnits;
    document.getElementById('total-minor-units').textContent = minorUnits;
    document.getElementById('major-fees-display').textContent = majorFees.toFixed(2);
    document.getElementById('minor-fees-display').textContent = minorFees.toFixed(2);
    document.getElementById('total-fees-display').textContent = totalFees.toFixed(2);
    document.getElementById('lab-subject-count-display').textContent = labSubjectCount;
    document.getElementById('lab-fee-per-subject-display').textContent = labRate.toFixed(2);
    document.getElementById('total-lab-fee-display').textContent = labFees.toFixed(2);
    document.getElementById('pathfit-count-display').textContent = pathfitCount;
    document.getElementById('nstp-count-display').textContent = nstpCount;
    document.getElementById('pathfit-fee-display').textContent = pathfitFees.toFixed(2);
    document.getElementById('nstp-fee-display').textContent = nstpFees.toFixed(2);
    document.getElementById('total-assessment-display').textContent = totalAssessment.toFixed(2);

    // For scholarship section
    document.getElementById('minor-fees-scholarship').textContent = minorFees.toFixed(2);
    document.getElementById('major-fees-scholarship').textContent = majorFees.toFixed(2);
    document.getElementById('total-fees-scholarship').textContent = labFees.toFixed(2);
    document.getElementById('pathfit-count-scholarship').textContent = pathfitCount;
    document.getElementById('nstp-count-scholarship').textContent = nstpCount;
    document.getElementById('pathfit-fee-scholarship').textContent = pathfitFees.toFixed(2);
    document.getElementById('nstp-fee-scholarship').textContent = nstpFees.toFixed(2);
    document.getElementById('discounted-assessment').textContent = totalAssessment.toFixed(2);
});
document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('profile-form');

    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent default form submission

        const isValid = validateForm();

        if (isValid) {
            alert('Profile saved successfully!');
            // Optionally submit the form here if needed
            // form.submit(); 
        }
    });

    function validateForm() {
        const fullName = document.getElementById('full-name').value.trim();
        const email = document.getElementById('email').value.trim();
        const phone = document.getElementById('phone').value.trim();
        let isValid = true;

        // Validate Full Name
        if (!fullName) {
            alert("Error: Full Name cannot be empty.");
            isValid = false;
        }

        // Validate Email Format
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(email)) {
            alert("Error: Please enter a valid email address.");
            isValid = false;
        }

        // Validate Phone Number
        const phonePattern = /^\d{10,}$/; // At least 10 digits
        if (!phonePattern.test(phone)) {
            alert("Error: Phone Number must contain at least 10 digits.");
            isValid = false;
        }

        return isValid;
    }
});
