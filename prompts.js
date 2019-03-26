module.exports = [{
  name: 'qbbUI',
  type: 'confirm',
  message: `import qbbUI?`,
  default: false
}, {
  name: 'layoutType',
  type: 'list',
  message: 'which layout you want?',
  choices: ['vw', 'rem', 'none'],
  default: 0
}, {
  name: 'checkbox',
  type: 'checkbox',
  message: 'what size you want to do?',
  choices: ['x', 'xx', 'xxx'],
  default: ['x']
}]