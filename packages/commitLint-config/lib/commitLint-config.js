module.exports = {
  parserPreset: 'conventional-changelog-conventionalcommits',
  rules: {
    // 正文总是以空行开头 【详细描述】
    'body-leading-blank': [1, 'always'],
    // 正文最大长度 2-100
    'body-max-line-length': [2, 'always', 100],
    
    // 页脚以空行开头
    'footer-leading-blank': [1, 'always'],
    // 页脚内容最大长度 2-100
    'footer-max-line-length': [2, 'always', 100],
    
    // 标头最大长度 2-100
    'header-max-length': [2, 'always', 100],
    
    // 范围案例小写 【修改范围】
    'scope-case': [2, 'always', 'lower-case'],
    
    // 主题内容小写 【简单描述】
    'subject-case': [0],
    // 主题从不为空
    'subject-empty': [2, 'never'],
    // 主题不以 . 结尾
    'subject-full-stop': [2, 'never', '.'],
    
    // 类型总是小写 【提交类型】
    'type-case': [2, 'always', 'lower-case'],
    // 类型从不为空
    'type-empty': [2, 'never'],
    // 类型数组
    'type-enum': [2, 'always', ['feat', 'fix', 'docs', 'style', 'test', 'refactor', 'chore', 'revert','build']],
  }
}
