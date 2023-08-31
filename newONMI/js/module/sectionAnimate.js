export const sectionAnimation = (section) => {
  const newOpacity = Math.max(
    0,
    Math.min(1, 1 - (window.scrollY * 4) / window.innerHeight),
  );
  const newScale = Math.max(
    0,
    Math.min(1, 1 - (window.scrollY * 0.8) / window.innerHeight),
  );
  section.style.opacity = newOpacity
  section.style.scale = newScale
  if (newOpacity === 0) {
    section.style.display = 'none';
  } else {
    section.style.display = 'flex';
  }

}
