const DEVELOPMENT = !location.host.includes("github.io");
const PREFIX = DEVELOPMENT ? "" : "/teste";

async function loadComponents(components = []) {
  try {

    const partials = {};
    
    const fetchPromises = components.map((component) =>
      fetch(PREFIX + component.path)
        .then((response) => response.text())
        .then((html) => {
          const partialData = component.data || {};
          partials[component.name] = Handlebars.compile(html)(partialData);
          Handlebars.registerPartial(component.name, partials[component.name]);
        })
    );

    await Promise.all(fetchPromises);

    return partials;
  } catch (error) {
    throw error;
  }
}

async function loadPage(router, pagePath, data = {}) {
  try {
    const partialData = [
        { name: 'navbar', path: '/components/navbar.hbs', },
    ];
  
    await loadComponents(partialData);

    const response = await fetch(PREFIX + pagePath);
    if (!response.ok) throw new Error("Failed to load page");
    const html = await response.text();
    const template = Handlebars.compile(html);
    document.querySelector("#app").innerHTML = template(data);
} catch (error) {
    console.error(error);
    document.querySelector("#app").innerHTML =
    "<h1>Error loading page</h1><p>Something went wrong.</p>";
} finally {
    router.updatePageLinks();
  }
}

