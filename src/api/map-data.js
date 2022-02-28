export const mapData = (pagesData = [{}]) => {
  return pagesData.map((data) => {
    const {
      footer_text = '',
      slug = '',
      title = '',
      sections = [],
      menu = {}
    } = data;

    return{
      footerHtml: footer_text,
      slug: slug,
      title: title,
      sections: sections,
      menu: menu,
    };
  });
};
