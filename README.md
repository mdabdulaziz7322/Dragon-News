# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

daisy-ui-colours for whole projects
1.background: base
2.button or call to action: primary and secondary
3.text:text-accent

@plugin "daisyui" {
    themes: light --default;
   }

   @plugin "daisyui/theme" {
    name: "light";
    default: true;
    --color-primary: #403f3f;
    --color-secondary: #d72050;
    --color-base-200: #f3f3f3;
    --color-base-300: #e7e7e7;
    --color-accent: #706f6f;
    
  }

