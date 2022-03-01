export const mapSections = (sections = []) => {
  return sections.map((section) => {
    if(section.__component === 'section.section-twocolumns'){
      return mapSectionTwoColumns(section);
    }

    if(section.__component === 'section.section-content'){
      return mapSectionContent(section);
    }

    if(section.__component === 'section.section-grid'){
      return mapSectionGrid(section);
    }

    return section;
  });
}

export const mapSectionTwoColumns = (section = {}) => {
  var srcImg = '';
  const {
    __component: component = '',
    title = '',
    description: text = '',
    metadata: { has_background: background = false, section_id: sectionId = '' } = false,
  } = section;

  if (Object.keys(section).length > 0){
    const {
      url: srcImage = '',
    } = section.image.data.attributes;
    srcImg = srcImage;
  } else {
    srcImg = '';
  }

  return {
    component,
    title,
    text,
    srcImg,
    background,
    sectionId,
  };
}

export const mapSectionContent= (section = {}) => {
  const {
    __component: component = '',
    title = '',
    content: html = '',
    metadata: { has_background: background = false, section_id: sectionId = '' } = false,
  } = section;

  return {
    component,
    title,
    html,
    background,
    sectionId,
  };
}

export const mapSectionGrid = (section) => {
  return section;
}
