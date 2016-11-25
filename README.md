#### 2016.11.25
- [源代码][1]
- nodejs服务器搭建，config进行数据接口传递数据
```
$.ajax({
        url:'/api/admin/session',
        type:'post',
        dataType:'json',
        data:{
            "user[full_name]":login.username,
            "user[password]":login.password,
        },
        complete:function(result){
            if(result.status === 200){
                console.log(result);
                console.log('ok');
            }else{
                console.log('error');
            }
        }        
})
```
- 添加获取数据，$.cookie 需要引入jquery-cookie




[1]:<https://github.com/hanyong37/common_strength/blob/master/apidoc.md#4> "源代码"