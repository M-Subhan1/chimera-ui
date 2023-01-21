/** @type {import('tailwindcss').Config} */

module.exports = {
  important: true,
  jit: true,
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,md,mdx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./examples/**/*.{js,ts,jsx,tsx}",
    "./nextra-theme-docs/**/*.{js,tsx}",
    "./theme.config.js",
    "../../packages/ui/**/*{.js,.ts,.jsx,.tsx}",
  ],
  theme: {
    extend: {
      transitionProperty: {
        width: "width",
      },
      colors: {
        base: "var(--base)",
        "base-1": "var(--base-1)",
        "base-2": "var(--base-2)",
        "base-3": "var(--base-3)",
        "base-content": "var(--base-content)",
        "base-content-1": "var(--base-content-1)",
        "base-content-2": "var(--base-content-2)",
        "base-content-3": "var(--base-content-3)",
        "base-content-contrast": "var(--base-content-contrast)",
        line: "var(--line)",
        overlay: "var(--overlay-1)",
        "overlay-1": "var(--overlay-1)",
        "overlay-2": "var(--overlay-2)",
        "overlay-3": "var(--overlay-3)",
        "overlay-content": "var(--overlay-content)",
        "overlay-content-1": "var(--overlay-content-1)",
        "overlay-content-2": "var(--overlay-content-2)",
        "overlay-content-3": "var(--overlay-content-3)",
        "overlay-content-contrast": "var(--overlay-content-contrast)",
        input: "var(--input)",
        "input-content": "var(--input-content)",
        primary: "var(--primary)",
        "primary-focus": "var(--primary-focus)",
        "primary-subtle": "var(--primary-subtle)",
        "primary-content": "var(--primary-content)",
        "primary-content-contrast": "var(--primary-content-contrast)",
        secondary: "var(--secondary)",
        "secondary-focus": "var(--secondary-focus)",
        "secondary-subtle": "var(--secondary-subtle)",
        "secondary-content": "var(--secondary-content)",
        "secondary-content-contrast": "var(--secondary-content-contrast)",
        info: "var(--info)",
        "info-focus": "var(--info-focus)",
        "info-subtle": "var(--info-subtle)",
        "info-content": "var(--info-content)",
        "info-content-contrast": "var(--info-content-contrast)",
        success: "var(--success)",
        "success-focus": "var(--success-focus)",
        "success-subtle": "var(--success-subtle)",
        "success-content": "var(--success-content)",
        "success-content-contrast": "var(--success-content-contrast)",
        error: "var(--error)",
        "error-focus": "var(--error-focus)",
        "error-subtle": "var(--error-subtle)",
        "error-content": "var(--error-content)",
        "error-content-contrast": "var(--error-content-contrast)",
        warning: "var(--warning)",
        "warning-focus": "var(--warning-focus)",
        "warning-subtle": "var(--warning-subtle)",
        "warning-content": "var(--warning-content)",
        "warning-content-contrast": "var(--warning-content-contrast)",
      },
      borderWidth: {
        "width-theme": "var(--theme-border-width)",
      },
      borderColor: {
        "color-theme": "var(--line)",
      },
      borderRadius: {
        theme: "var(--theme-rounded)",
        "theme-md": "var(--theme-rounded-md)",
        "theme-lg": "var(--theme-rounded-lg)",
      },
      boxShadow: {
        theme: "var(--theme-shadow)",
        "theme-lg": "var(--theme-shadow-lg)",
        "theme-sm": "var(--theme-shadow-sm)",
        "theme-xs": "var(--theme-shadow-xs)",
        "theme-md": "var(--theme-shadow-md)",
      },
      outlineWidth: {
        "width-theme": "var(--theme-border-width)",
      },
      outlineColor: {
        "color-theme": "var(--line)",
      },
      divideWidth: {
        theme: "var(--theme-border-width)",
      },
      divideColor: {
        theme: "var(--theme-border-color)",
      },
    },
  },
  plugins: [],
};
