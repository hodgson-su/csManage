#### 2016.11.25
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