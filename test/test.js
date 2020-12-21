import helper from 'cogs-test-helper';

export default helper.createTests({
  'test/config.js': {
    'test/input.css': helper.getFileBuffer('test/output.css')
  }
});
