(() => {
  const root = document.documentElement;
  const mq = window.matchMedia("(prefers-color-scheme: dark)");
  const toggle = document.getElementById("theme-toggle");

  /** @type {"light" | "dark" | null} */
  let override = null;

  const systemTheme = () => (mq.matches ? "dark" : "light");

  const effectiveTheme = () => override ?? systemTheme();

  const syncToggle = () => {
    if (!toggle) return;
    const next = effectiveTheme() === "dark" ? "light" : "dark";
    toggle.setAttribute("aria-label", `Switch to ${next} theme`);
    toggle.setAttribute("aria-pressed", String(override !== null));
  };

  const apply = () => {
    root.dataset.theme = effectiveTheme();
    syncToggle();
  };

  apply();

  toggle?.addEventListener("click", () => {
    override = effectiveTheme() === "dark" ? "light" : "dark";
    apply();
  });

  const onSystemChange = () => {
    override = null;
    apply();
  };

  if (typeof mq.addEventListener === "function") {
    mq.addEventListener("change", onSystemChange);
  } else if (typeof mq.addListener === "function") {
    mq.addListener(onSystemChange);
  }

  const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (reduce) return;

  const targets = document.querySelectorAll(".section, .site-footer");
  targets.forEach((el) => el.classList.add("reveal"));

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      });
    },
    { rootMargin: "0px 0px -8% 0px", threshold: 0.12 }
  );

  targets.forEach((el) => observer.observe(el));
})();
