const $root = document.documentElement.style;
document.addEventListener('input', e => {
    const inputID = e.target.id;
    $root.setProperty(`--${inputID}`,e.target.value);
})