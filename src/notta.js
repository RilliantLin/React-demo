import React from 'react'
import './notta.css'

function timeFormat(time){
	let timestamp4 = new Date(time);//直接用 new Date(时间戳) 格式转化获得当前时间
	return timestamp4.toTimeString().substr(0, 8)
}
function durFormat(duration){
	let min =parseInt(duration/60)
	return min;
}
class Notta extends React.Component{
/* 因没有vpn，这里注释了 向服务器请求数据的代码 */	
/* 	constructor(){
	    this.state={
	      commentsReq:[],
	    }
	}
	componetDidMount(){
		const _this=this;
		axios.get('https://y1r2isxfb2.execute-api.us-east-1.amazonaws.com/comments')
		.then(function (response) {
			_this.setState({
				commentsReq:response.data,
			});
		})
		.catch(function (error) {
			console.log(error);
			_this.setState({
				error:error
			})
		})
	} */
	
  initData=()=>{
		let data='{"code": 0, "msg": "success", "data": [{"id": "4830dcb7b38648e7be8953787b7a8732", "quote": "Century statement scientist another", "nickname": "Sharon Payne", "avatar": "https://randomuser.me/api/portraits/men/78.jpg", "duration": 590, "create_time": 1610845597000, "content": "Century statement scientist another. Order task computer about civil.Price large artist lawyer since. According forget place method."}, {"id": "2d238cdd437847af9b095308e3d7c1ef", "quote": "Dream audience home stuff defense sense scene thought", "nickname": "Christopher Navarro", "avatar": "https://randomuser.me/api/portraits/women/56.jpg", "duration": 383, "create_time": 1611145161000, "content": "Dream audience home stuff defense sense scene thought.Whole its enter happen nature knowledge hotel. Pressure although remember claim happen whose traditional."}, {"id": "10bcc6b3973d4f9481114f6d4b392262", "quote": "Yeah task how occur game", "nickname": "David Ross", "avatar": "https://randomuser.me/api/portraits/men/38.jpg", "duration": 509, "create_time": 1611001779000, "content": "Yeah task how occur game. Visit live defense soldier lead available lose.Plan poor per election similar weight. Individual anyone whatever. Social table continue church could measure effort."}]}'
		this.comments=JSON.parse(data).data;
		console.log(this.comments)
  }
  
  componentWillMount(){
    this.initData();
  }
  render(){
    return(
      <div className='container'> 
        <div className='left-container'>
					{
						this.comments.map((comment,index)=>{
							return (
								<div className='left-item' key={index}>
									<div className='topContent'>
										<span className='time'>{timeFormat(comment.create_time)}</span>
										<span className='quote'>| {comment.quote}</span>
									</div>									
									<div className='centerContent'>
										<img src="" alt="" style={{width:32, height:32, background:'blue', borderRadius:'50%'}} />
										<div className='centerRight'>
											<p className="name">{comment.nickname}</p>
											<p className="duration">{durFormat(comment.duration)} mins ago</p>
										</div>
									</div>
									<p className='bottomContent'>{comment.content}</p>
								</div>
							)
						})
					}

				</div>
        <div className='right-container'>
					{
						this.comments.map((comment,index)=>{
							return (
								<div className='right-item' key={index}>
									<div className='topContent'>
										<span className='time'>{timeFormat(comment.create_time)}</span>
										<span className='quote'>| {comment.quote}</span>
									</div>									
									<div className='centerContent'>
										<img src={comment.avatar} alt="" style={{width:32, height:32, background:'blue', borderRadius:'50%'}} />
										<div className='centerRight'>
											<p className="name">{comment.nickname}</p>
											<p className="duration">{durFormat(comment.duration)} mins ago</p>
										</div>
									</div>
									<p className='bottomContent'>{comment.content}</p>
								</div>
							)
						})
					}
				</div>
      </div>
    )
  }
}

export default Notta