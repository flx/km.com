const normalizePath = (value) => {
  if (!value) return "/";

  let path = value.replace(/index\.html$/, "");

  if (!path.endsWith("/")) {
    path += "/";
  }

  return path === "//" ? "/" : path;
};

const applyActiveNavState = () => {
  const current = normalizePath(window.location.pathname);
  const aliasMap = new Map([
    ["/about/", "/bio/"],
    ["/about-avenue/", "/bio/"],
    ["/work/", "/"],
  ]);

  const resolvedCurrent = aliasMap.get(current) || current;

  document.querySelectorAll("[data-nav-link]").forEach((link) => {
    const target = normalizePath(new URL(link.getAttribute("href"), window.location.origin).pathname);
    const active = target === resolvedCurrent;

    link.classList.toggle("is-active", active);

    if (active) {
      link.setAttribute("aria-current", "page");
    } else {
      link.removeAttribute("aria-current");
    }
  });
};

const setupMobileNav = () => {
  const button = document.querySelector("[data-nav-toggle]");
  const nav = document.querySelector("[data-mobile-nav]");

  if (!button || !nav) {
    return;
  }

  button.addEventListener("click", () => {
    const isOpen = nav.classList.toggle("is-open");
    button.setAttribute("aria-expanded", String(isOpen));
  });

  nav.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      nav.classList.remove("is-open");
      button.setAttribute("aria-expanded", "false");
    });
  });
};

document.addEventListener("DOMContentLoaded", () => {
  applyActiveNavState();
  setupMobileNav();
});
