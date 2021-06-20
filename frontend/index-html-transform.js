const fs = require('fs');

module.exports = (targetOptions, indexHtml) => {
  const i = indexHtml.indexOf('</body>');
  const data = fs.readFileSync('src/assets/svg-definitions.svg', 'utf8')

  return `${indexHtml.slice(0, i)}
            ${data}
            ${indexHtml.slice(i)}`;
};
