// 解决回调地狱的办法Promise
/* {
	function ajax(cb){
		setTimeout(()=>{
			//判断回调函数存不存在
			cb && cb()
		},1000)
	}
	ajax(()=>{
		console.log("任务1")
	})
} */
{
	// cb:回调函数
	function ajax(cb){
		setTimeout(()=>{
			//判断回调函数存不存在
			cb && cb(()=>{
				console.log("任务2");
			},1000)
		},1000)
	}
	ajax((cb2)=>{
		console.log("任务1");
		setTimeout(()=>{
			cb2 & cb2()
		},1000)
	})
}