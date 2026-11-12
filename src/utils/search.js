export function searchGuides(guides, query) {
  const words = query.trim().toLocaleLowerCase().split(/\s+/).filter(Boolean);
  return guides.filter((guide) => {
    const text = JSON.stringify(guide).toLocaleLowerCase();
    return words.every((word) => text.includes(word));
  });
}
