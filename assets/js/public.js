var login = {} ;
var taken = null;
var classshow = {};
$('.btn').one('click',function(){
	login.enter();
});
login.enter = function(){
	login.username = $("[name='username']").val();
	login.password = $("[name='password']").val();
	
	login.judge();

	$('.btn').one('click',function(){
		login.enter();
	});
}
login.judge = function(){
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
				login.taken = result.responseJSON.data.attributes.token;
				location.href = "./class.html";
				// cookies.taken = login.taken;
				$.cookie('taken',login.taken);
				fool();
			}else{
				console.log('error');
			}
		}
		
	})
}

console.log($.cookie('taken'));
if($.cookie('taken')){
	classList();
}

function classList(){
	var list = {};
	$.ajax({
		url:'/api/admin/stores',
		type:'get',
		dataType:'json',
		headers:{
			"X-Api-Key": $.cookie('taken')
		},
		complete:function(result){
			if(result.status === 200){
				// console.log(result.responseJSON.data);
				list = result.responseJSON.data;
				//获取得到数据以后才能够创建列表
				//需要注意的是：运行到ajax的时候并不是顺序执行，它会执行下面的直到回调
				createList();
			}else{
				console.log('error');
			}
		},
		// success:function(data){
		// 	console.log(data);
		// }
	})
	
	//开始创建列表
	function createList(){
		var showList = [];
		$.each(list,function(i,e){
			// console.log(e.attributes);
			showList.push(e.attributes);
		})
		console.log(showList);
		var ulList = new Vue({
			el : "#ul-list",
			data:{
				items:showList
			}
		})
	}
}