const form = document.getElementById('form');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    let email = document.getElementById('email').value;
    let data = {email,};
    let convertData = JSON.stringify(data);

    localStorage.setItem('lead', convertData);

    let content = document.getElementById('content');

    let loading = `<p>Chargement...</p>`

    let ready = `<p>Prêt !</p>`

    content.innerHTML = loading

    setTimeout(() => {
        content.innerHTML = ready
    }, 1000)
})