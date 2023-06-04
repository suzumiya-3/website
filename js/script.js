'use script'

const lang = document.querySelector('html').lang;

switch (lang) {
    case 'ja':
        document.querySelector('option[value="index.html"]').select = true
        break;

    case 'en':
        document.querySelector('option[value="index.en.html"]').select = true
}

document.getElementById('form').select.onchange = function() {
    location.href = document.getElementById('form').select.value;
}
