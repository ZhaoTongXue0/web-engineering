const path = require('path');
const requireAll = require('require-all');


exports.rules = requireAll({
  dirname: path.resolve(__dirname, 'rules')
})

exports.configs = requireAll({
  dirname: path.resolve(__dirname, 'configs')
})

module.exports = {
  processors: {
    '.json':{
      preprocess(text){
        // 转为js文件
        return [`module.exports = ${text}`]
      }
    }
  }
}
