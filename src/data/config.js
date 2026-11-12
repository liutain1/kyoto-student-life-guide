const candidate = import.meta.env.VITE_FEEDBACK_URL || "";
function validatedFormUrl(value) {
  try {
    const url = new URL(value);
    return url.protocol === "https:" &&
      (url.hostname === "forms.gle" ||
        (url.hostname === "docs.google.com" &&
          url.pathname.startsWith("/forms/")))
      ? url.href
      : "";
  } catch {
    return "";
  }
}
export const config = {
  feedbackUrl: validatedFormUrl(candidate),
  reviewedAt: "2026-11-12",
};
