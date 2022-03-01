import { mapSectionTwoColumns, mapSectionContent } from "./map-sections";

describe("map-sections", () => {
  it("should map section two columns", () => {
    const data = mapSectionTwoColumns();
    expect(data.background).toBe(false)
    expect(data.component).toBe('')
    expect(data.sectionId).toBe('')
    expect(data.srcImg).toBe('')
    expect(data.text).toBe('')
    expect(data.title).toBe('')
  });

  it("should map section two columns api data", () => {
    const data = mapSectionTwoColumns(
      {
        "id": 3,
        "__component": "section.section-twocolumns",
        "title": "JANUARY BRINGS US FIREFOX 85",
        "description": "Description of section...",
        "image": {
          "data": {
            "id": 7,
            "attributes": {
              "name": "react-course-lp.svg",
              "alternativeText": "react-course-lp.svg",
              "caption": "react-course-lp.svg",
              "width": 1030,
              "height": 730,
              "formats": null,
              "hash": "react_course_lp_14318837cc",
              "ext": ".svg",
              "mime": "image/svg+xml",
              "size": 36.73,
              "url": "/uploads/react_course_lp_14318837cc.svg",
              "previewUrl": null,
              "provider": "local",
              "provider_metadata": null,
              "createdAt": "2021-12-19T19:01:09.151Z",
              "updatedAt": "2021-12-19T19:01:09.151Z"
            }
          }
        },
        "metadata": {
          "id": 8,
          "name": "Contact",
          "section_id": "contact",
          "has_background": true
        }
      }
    );
    expect(data.background).toBe(true)
    expect(data.component).toBe('section.section-twocolumns')
    expect(data.sectionId).toBe('contact')
    expect(data.srcImg).toBe('/uploads/react_course_lp_14318837cc.svg')
    expect(data.text).toBe('Description of section...')
    expect(data.title).toBe('JANUARY BRINGS US FIREFOX 85')
  });

  it("should map section content with predef data", () => {
    const data = mapSectionContent();
    expect(data.background).toBe(false)
    expect(data.component).toBe('')
    expect(data.sectionId).toBe('')
    expect(data.html).toBe('')
    expect(data.title).toBe('')
  });

  it("should map section content with api data", () => {
    const data = mapSectionContent(
      {
        "id": 3,
        "__component": "section.section-content",
        "title": "PRICING",
        "content": "<p>Hello, World!</p>",
        "metadata": {
          "id": 7,
          "name": "Pricing",
          "section_id": "pricing",
          "has_background": false
        }
      },
    );
    expect(data.background).toBe(false)
    expect(data.component).toBe('section.section-content')
    expect(data.sectionId).toBe('pricing')
    expect(data.html).toBe('<p>Hello, World!</p>')
    expect(data.title).toBe('PRICING')
  });

});
