// 历史原因，都是$.ajax({...})
// 替换为自己封装的ajax
// 重点在于转换
ajax({
  url: '/getData'
}).done(function(){})

var $ = {
  ajax: function(options) {
    return ajax(options)
  }
}