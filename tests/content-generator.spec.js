const expect = require('chai').expect;

const { 
  getBaseProgramInfo,
  importMarkdown
} = require('../src/content-generator.js');


describe('getBaseProgramInfo()', () => {
  it('should return the base info for program to execute', () => {
    process.chdir('tests/resources/test_demo');

    expect(getBaseProgramInfo())
      .to.be.an('object')
      .to.have.keys([
        'abellConfigs', 'contentTemplate', 'contentList', 
        'contentDirectories', 'globalMeta', 'logs', 'templateExtension'
      ]);

    process.chdir('../../..');
  });
});


describe('importMarkdown()', () => {
  it('should return HTML of the md file in given path', () => {
    const shouldOutput = `
      <h1>Abell Test Title Check</h1>
      <p>Hi this my another blog.
      <b>Nice</b></p>
      <pre><code class="language-js">const s = 'cool'
      </code></pre>
    `;

    expect(
      importMarkdown(
        'another-blog/index.md', 
        'tests/resources/test_demo/content',
        {meta: {title: 'Abell Test Title Check'}}
      ).replace(/[\n ]/g, '')
    ).to.equal(shouldOutput.replace(/[\n ]/g, ''));
  });
});
