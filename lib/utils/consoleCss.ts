declare global {
  interface Window {
    consoleCss: () => void;
  }
}

const consoleCss = () => {
  const styleTags = document.querySelectorAll("style[data-emotion]");
  const classes = Array.from(styleTags)
    .flatMap((tag: any) => {
      const sheet = tag.sheet;
      if (!sheet) return [];
      try {
        return Array.from(sheet.cssRules).map((rule: any) => rule.cssText);
      } catch (error) {
        return [];
      }
    })
    .join("\n");

  console.log(classes);
};

window.consoleCss = consoleCss;
