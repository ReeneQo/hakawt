export const extractHeadings = (content) => {
  const headings = content.split('\n')
    .filter(line => line.startsWith('#'))
    .map(line => ({
      level: line.match(/^#+/)?.[0].length || 1,
      text: line.replace(/^#+\s*/, '').trim()
    }));
  return headings;
};

export const renderContent = (content) => {
  let processedContent = content;
  const headings = extractHeadings(content);
  
  headings.forEach(heading => {
    const id = heading.text.replace(/\s+/g, '-').toLowerCase();
    const headingMark = '#'.repeat(heading.level);
    processedContent = processedContent.replace(
      `${headingMark} ${heading.text}`,
      `${headingMark} <span id="${id}">${heading.text}</span>`
    );
  });

  return processedContent;
};