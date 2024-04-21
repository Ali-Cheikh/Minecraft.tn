
function googleTranslateElementInit() {
    new google.translate.TranslateElement({ pageLanguage: 'en' }, 'google_translate_element');
  }
document.getElementById('whitelistForm').addEventListener('submit', function (event) {
    event.preventDefault();
    submitFormToGoogleSheets();
    document.getElementById('whitelistForm').reset(); // Reset form fields
    document.getElementById('successMessage').style.display = 'block'; // Show success message
});

document.querySelectorAll('.bannedCheckbox').forEach(function(checkbox) {
    checkbox.addEventListener('change', function() {
      // Uncheck all checkboxes except the one that was just clicked
      document.querySelectorAll('.bannedCheckbox').forEach(function(otherCheckbox) {
        if (otherCheckbox !== checkbox) {
          otherCheckbox.checked = false;
        }
      });

      // Disable the bannedReason input if "No" is checked
      document.getElementById('bannedReason').disabled = document.getElementById('bannedNo').checked;
    });
  });
  document.getElementById('bannedYes').addEventListener('change', function() {
  if (this.checked) {
      document.getElementById('bannedReasonContainer').style.display = 'none';
      document.getElementById('bannedReason').disabled = true;
  }
  });

  document.getElementById('bannedNo').addEventListener('change', function() {
  if (this.checked) {
      document.getElementById('bannedReasonContainer').style.display = 'block';
      document.getElementById('bannedReason').disabled = false;
  }
  });

  function displayAlert() {
    
    document.getElementById('submit').style.display = 'block';
    document.getElementById('sayee').style.display = 'block';
    Swal.fire({
        title: 'You must accept the rules.',
        html: `<a href='rules.html'><img src="https://cdn.discordapp.com/attachments/967158057744355328/1231681841107435590/rIiHZA2.png?ex=6626b49a&is=6625631a&hm=74cd98eeeb69e9b937afd78d7d5b37e4c3d19b216581c55568c4aeaf069cd839&" style="max-width: 100%;" alt="Rules"></a>`,
        icon: 'warning',
        confirmButtonText: 'OK',
        showConfirmButton: false,
    });
}

function submitFormToGoogleSheets() {
    const scriptURL = 'https://script.google.com/macros/s/AKfycby6eU6rXzWCuLp-rYRM3ya6mD-0m6U4hTLTPSi-6qjiQRU-GUjbawMgom3Xq1Y02C6a/exec';
    const form = document.getElementById('whitelistForm');
    Swal.fire({
        icon: 'info',
        title: 'Submitting...',
        text: 'Sending whitelist application request',
        showConfirmButton: false,
        allowOutsideClick: false
    });

    fetch(scriptURL, { method: 'POST', body: new FormData(form) })
        .then(response => {
            if (response.ok) {
                Swal.fire({
                    icon: 'success',
                    title: 'Success!',
                    html: `
                    <h3 style="color:white">
                    Your application is submitted.
                    <u> Thank you!</u>
                    </h3>
                    `,
                    timer: 3000,
                    background: "url(src/download.png)",
                    timerProgressBar: true,
                    showConfirmButton: false,
                    allowOutsideClick: true
                });
            } else {
                throw new Error('Network response was not ok.');
            }
        })
        .catch(error => {
            console.error('Error!', error);
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Something went wrong! Please try again later.'
            });
        });
}

document.addEventListener('scroll', function() {
    var footerPosition = document.querySelector('footer').getBoundingClientRect().top;
    var windowHeight = window.innerHeight;

    if (footerPosition < windowHeight) {
        document.body.classList.add('footer-reached');
    } else {
        document.body.classList.remove('footer-reached');
    }
});

function alertt(){
    document.getElementById('submit').style.display = 'none';
    Swal.fire({
        icon: 'info',
        title: 'You must accept the rules.',
        html: `
        <h6>tijmo til9aw il rules mta3 server fi discord wila</h6>
        <h5>
        <a href="rules.html" class="a1">#here</a>
        </h5>
        ` ,
        showConfirmButton: false,
        allowOutsideClick: false
    });
}
