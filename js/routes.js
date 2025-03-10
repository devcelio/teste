const routes = {
    "/": {
      when: async (params, load) => {
        await load("pages/home.html");
      }
    },

    "/products/": {
      when: async (params, load) => {
        await load(`pages/products.html`);
      },
    },

    "404": {
      when: async (params, load) => {
        await load("pages/404.html");
      }
    }
};

const router = new Router(routes);