document.addEventListener('DOMContentLoaded', () => {
    const loadTemplate = (url) => fetch(url).then(res => res.text());

    Promise.all([
        loadTemplate('components/navbar.hbs'),
    ])
    .then(([header, footer, home]) => {
        Handlebars.registerPartial('header', header);
        Handlebars.registerPartial('footer', footer);
    })
    .catch(console.error);
});
