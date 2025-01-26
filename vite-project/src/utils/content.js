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
  
  // Обработка заголовков
  const headings = extractHeadings(content);
  headings.forEach(heading => {
    const id = heading.text.replace(/\s+/g, '-').toLowerCase();
    const headingMark = '#'.repeat(heading.level);
    processedContent = processedContent.replace(
      `${headingMark} ${heading.text}`,
      `${headingMark} <span id="${id}">${heading.text}</span>`
    );
  });

  // Обработка ссылок в формате [текст](url)
  processedContent = processedContent.replace(
    /\[([^\]]+)\]\(([^)]+)\)/g,
    '<a href="$2" target="_blank" rel="noopener noreferrer" class={content_link}>$1</a>'
  );

  // Обработка кода
  processedContent = processedContent.replace(
    /```([^`]+)```/g,
    '<pre class="code_block"><code>$1</code></pre>'
  );
  
  return processedContent;
};