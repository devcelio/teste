class Router {
    constructor(routes) {
      this.routes = routes;
      this.currentRoute = null;
  
      window.addEventListener("popstate", () => this.loadRoute(location.pathname));
      document.addEventListener("DOMContentLoaded", () => this.loadRoute(location.pathname));
    }
  
    matchRoute(path) {
      for (const route in this.routes) {
        const paramNames = [];
        const regexPath = route.replace(/:([^\/]+)/g, (_, key) => {
          paramNames.push(key);
          return "([^/]+)";
        });
        const regex = new RegExp(`^${regexPath}$`);
        const match = path.match(regex);
  
        if (match) {
          const params = paramNames.reduce((acc, name, index) => {
            acc[name] = match[index + 1];
            return acc;
          }, {});
          return { route: this.routes[route], params };
        }
      }
      return { route: this.routes["404"], params: {} };
    }
  
    async loadRoute(path) {
      const { route, params } = this.matchRoute(path);
  
      if (route !== this.currentRoute) {
        this.currentRoute = route;
  
        if (route.before) await route.before(params);
        if (route.when) await route.when(params, this.load.bind(this));
        if (route.after) await route.after(params);
      }
    }
  
    navigate(path) {
      history.pushState({}, "", path);
      this.loadRoute(path);
    }
  
    async load(path) {
      const response = await fetch(path);
      const content = await response.text();
      document.querySelector("#app").innerHTML = content;
    }
  }