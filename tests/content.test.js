import test from "node:test";
import assert from "node:assert/strict";
import { locales } from "../src/locales/index.js";
import { searchGuides } from "../src/utils/search.js";
for (const lang of ["ja", "zh", "en"]) {
  test(`${lang}: all five guides have full sections, sources and FAQs`, () => {
    const guides = locales[lang].guides;
    assert.equal(guides.length, 5);
    for (const guide of guides) {
      assert.ok(guide.title && guide.summary);
      assert.ok(guide.sections.length >= 5);
      guide.sections.forEach((s) => {
        assert.ok(s.title);
        assert.ok(s.body.length > 35);
        assert.ok(s.source);
      });
      assert.ok(guide.faq.length >= 2);
    }
  });
}
test("search finds body text, normalizes whitespace and case, handles no results", () => {
  const guides = locales.en.guides;
  assert.ok(
    searchGuides(guides, "  icoca  ").some((g) => g.id === "transport"),
  );
  assert.ok(searchGuides(guides, "passport").some((g) => g.id === "bank"));
  assert.equal(searchGuides(guides, "zzzznomatch").length, 0);
  assert.equal(searchGuides(guides, "").length, 5);
});

test('translations share the same UI keys, stable tasks and guide sections', () => {
  for (const locale of Object.values(locales)) {
    assert.deepEqual(Object.keys(locale.ui).sort(), Object.keys(locales.ja.ui).sort());
    for (const value of Object.values(locale.ui)) assert.ok(value.trim().length);
    assert.deepEqual(locale.checkItems.map(item => item.id), locales.ja.checkItems.map(item => item.id));
    assert.equal(locale.about.sections.length, 4);
    for (const guide of locale.guides) {
      const reference = locales.ja.guides.find(item => item.id === guide.id);
      assert.equal(guide.sections.length, reference.sections.length);
      assert.equal(guide.faq.length, reference.faq.length);
    }
  }
});
