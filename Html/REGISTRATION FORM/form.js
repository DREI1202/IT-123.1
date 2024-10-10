const images = [
    { src: '1.png', caption: 'Select your College Institute' },
    { src: '2.png', caption: 'Select your Program Degree' },
    { src: '3.png', caption: 'Fill out your Registration Form' },
    { src: '4.png', caption: 'Click Finish once you have finished' },
    { src: '5.png', caption: 'Now, Select your Section' },
    { src: '6.png', caption: 'Tick off the subjects you want then Click Next' },
    { src: '7.png', caption: 'Review your Assesment Fee then click Register after you are finish' },
];

let currentIndex = 0;
const galleryImage = document.getElementById('galleryImage');
const popup = document.getElementById('popup');
const closePopup = document.getElementById('closePopup');
const nextButton = document.getElementById('nextButton');
const prevButton = document.getElementById('prevButton');
const imageCaption = document.getElementById('imageCaption');

function updateImage() {
    galleryImage.src = images[currentIndex].src;
    imageCaption.textContent = images[currentIndex].caption;
}

nextButton.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % images.length;
    updateImage();
});

prevButton.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    updateImage();
});

closePopup.addEventListener('click', () => {
    popup.style.display = 'none';

});
window.onload = () => {
    updateImage();
};


document.addEventListener('DOMContentLoaded', function () {
    const collegeSelect = document.getElementById('colleges');
    const degreeDropdowns = document.querySelectorAll('.degree-dropdown');
    const selectCollegeStep = document.getElementById('select-college-step');
    const selectDegreeStep = document.getElementById('select-degree-step');
    const PRF = document.getElementById('PRF');
    const dropdownIds = [
        'box', 'CAP', 'CTEP', 'CEP', 'CHETP', 'CFP', 'CNP', 'CVMP', 'CHKP',
        'CPAGP', 'CISP', 'CAHP', 'CSSP', 'CNASP', 'CNSP'
    ];

    // Hide all degree dropdowns on college change
    collegeSelect.addEventListener('change', function () {
        degreeDropdowns.forEach(dropdown => dropdown.classList.add('hidden'));

        if (this.value) {
            document.getElementById(`${this.value}Prog`).classList.remove('hidden');
            selectCollegeStep.classList.add('bg-selected');
        } else {
            selectCollegeStep.classList.remove('bg-selected');
        }

        dropdownIds.forEach(id => {
            const dropdown = document.getElementById(id);
            if (dropdown) {
                dropdown.value = '';
            }
        });
        selectDegreeStep.classList.remove('bg-selected');
    });

    dropdownIds.forEach(id => {
        const dropdown = document.getElementById(id);
        if (dropdown) {
            dropdown.addEventListener('change', function () {
                selectDegreeStep.classList.toggle('bg-selected', this.value !== '');
            });
        }
    });

    // Toggle PRF visibility based on dropdown selection
    document.querySelectorAll('.degree-dropdown select').forEach(select => {
        select.addEventListener('change', function () {
            PRF.classList.toggle('hidden', this.value !== 'Deg');
        });
    });

    // Navigation functions
    window.showPreviousSchoolInfo = function() {
        document.getElementById('personal-info').classList.add('hidden');
        document.getElementById('previous-school-info').classList.remove('hidden');
        document.getElementById('personal-info-step').classList.add('bg-selected');
    };

    window.prePersonalInfo = function() {
        document.getElementById('previous-school-info').classList.add('hidden');
        document.getElementById('personal-info').classList.remove('hidden');
        document.getElementById('personal-info-step').classList.remove('bg-selected');
    };

    window.showContactInfo = function() {
        document.getElementById('previous-school-info').classList.add('hidden');
        document.getElementById('contact-info').classList.remove('hidden');
        document.getElementById('previous-school-step').classList.add('bg-selected');
    };

    window.prePreviousSchoolInfo = function() {
        document.getElementById('contact-info').classList.add('hidden');
        document.getElementById('previous-school-info').classList.remove('hidden');
        document.getElementById('previous-school-step').classList.remove('bg-selected');
    };

    window.showEmergencyInfo = function() {
        document.getElementById('contact-info').classList.add('hidden');
        document.getElementById('emergency-info').classList.remove('hidden');
        document.getElementById('contact-info-step').classList.add('bg-selected');
    };

    window.preContactInfo = function() {
        document.getElementById('emergency-info').classList.add('hidden');
        document.getElementById('contact-info').classList.remove('hidden');
        document.getElementById('contact-info-step').classList.remove('bg-selected');
    };

    window.nextPage = function() {
        window.location.href = 'SubjectSelection.html';
    };
});
