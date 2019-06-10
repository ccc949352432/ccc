/**
 * 1.此文件是用来封装公用的一些方法
 * 2.这些就去与当前的项目没有直接业务关系
 * 3.这个公共的方法不但在此项目中可以使用,在任何项目当中都可以使用
 */

var utils = {
  convertToObj:function(str){
    // 'id=9&name=tom&age=20'==>{id:9,name:'tom',age:20}
    var arr = str.split('&')
    // console.log(arr);
    var obj = {}
    arr.forEach(function(item,index){
      var temp = item.split('=')
      console.log(temp);
      obj[temp[0]] = temp[1]
    })

   return obj;
  }
}

// var str = 'id=9&name=tom&age=20'
// var obj =utils.convertToObj(str)
// console.log(obj);