export const Observer = () => {
  const sections = document.querySelectorAll(".observed");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        console.log("started");
        entry.target.classList.toggle("showSection", entry.isIntersecting);
      });
    },
    {
      threshold: 0.3,
    }
  );

  sections.forEach((section) => {
    observer.observe(section);
  });
};
