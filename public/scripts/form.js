const inputs = document.querySelectorAll('input');

inputs.forEach(input => {
    if (input.type === 'submit') return;

    input.addEventListener('input', () => {
        if (input.value === '') {
            input.classList.remove('not-empty');
        } else if (!input.classList.contains('not-empty')) {
            input.classList.add('not-empty')
        }
    });
});