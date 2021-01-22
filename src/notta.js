import React from 'react'
import './notta.css'
import axios from 'axios'
function timeFormat(time){
	let timestamp4 = new Date(time);//直接用 new Date(时间戳) 格式转化获得当前时间
	return timestamp4.toTimeString().substr(0, 8)
}
function durFormat(duration){
	let min =parseInt(duration/60)
	return min;
}
class Notta extends React.Component{

	constructor(props){
		super(props);
		this.state={
			comments:[],
		}
	}
	initData=()=>{
		let data='{"code": 0, "msg": "success", "data": [{"id": "2d2b6f1c3f1245b883ebd0e3d4806e2d", "quote": "Police mention rather media information source protect", "nickname": "James Foster", "avatar": "https://randomuser.me/api/portraits/men/86.jpg", "duration": 118, "create_time": 1611273188000, "content": "Police mention rather media information source protect. Goal cause hair where quality power. Source pass successful up."}, {"id": "b51a7968d5f04708a8ffc9ff8f2bafdd", "quote": "Dream audience home stuff defense sense scene thought", "nickname": "Cody Hanson", "avatar": "https://randomuser.me/api/portraits/women/68.jpg", "duration": 234, "create_time": 1611243222000, "content": "Dream audience home stuff defense sense scene thought.Whole its enter happen nature knowledge hotel. Pressure although remember claim happen whose traditional."}, {"id": "8062a0780d464cc78c43a94e7ea43455", "quote": "Case back major number", "nickname": "Christopher Navarro", "avatar": "https://randomuser.me/api/portraits/men/71.jpg", "duration": 542, "create_time": 1611005642000, "content": "Case back major number. Himself catch read until themselves great institution. More same low simply in enough good."}, {"id": "8da9ce83e9bd492ea41b918c30d81623", "quote": "Case back major number", "nickname": "Dana Bradshaw", "avatar": "https://randomuser.me/api/portraits/men/83.jpg", "duration": 548, "create_time": 1611208531000, "content": "Case back major number. Himself catch read until themselves great institution. More same low simply in enough good."}, {"id": "ec315839b8f04a58917e8b89d8027498", "quote": "Kid every short dog chance", "nickname": "Keith Shaffer", "avatar": "https://randomuser.me/api/portraits/women/3.jpg", "duration": 263, "create_time": 1611144503000, "content": "Kid every short dog chance. Character pull level.Something add other current might thank brother. Push media no take skin provide. Dark behavior foreign."}, {"id": "9fa9d0dd229949d092d62a661e3d62d9", "quote": "Century statement scientist another", "nickname": "Cody Hanson", "avatar": "https://randomuser.me/api/portraits/men/48.jpg", "duration": 394, "create_time": 1610892110000, "content": "Century statement scientist another. Order task computer about civil.Price large artist lawyer since. According forget place method."}, {"id": "417ae4dacb934e769e8d14d57ec6e555", "quote": "After operation common question others business top free", "nickname": "Yolanda Watkins", "avatar": "https://randomuser.me/api/portraits/men/86.jpg", "duration": 343, "create_time": 1611002156000, "content": "After operation common question others business top free. Rather rather name industry personal. Democratic decision offer maintain responsibility."}, {"id": "1dcbf8a53c124e3189c6f705fc96f58c", "quote": "Century statement scientist another", "nickname": "Michelle Lane", "avatar": "https://randomuser.me/api/portraits/women/74.jpg", "duration": 243, "create_time": 1610922471000, "content": "Century statement scientist another. Order task computer about civil.Price large artist lawyer since. According forget place method."}, {"id": "aee19751dca5499e8fdaf46d382f7717", "quote": "Impact water occur great", "nickname": "Cody Hanson", "avatar": "https://randomuser.me/api/portraits/men/60.jpg", "duration": 293, "create_time": 1610892977000, "content": "Impact water occur great. Eat consumer energy someone lay myself factor girl.Unit yourself area ok. Accept report cold common rest. Investment low agency this share."}, {"id": "679a7809d47e45d08185c72f5aa3e548", "quote": "Century statement scientist another", "nickname": "Anna Evans", "avatar": "https://randomuser.me/api/portraits/men/86.jpg", "duration": 347, "create_time": 1611071174000, "content": "Century statement scientist another. Order task computer about civil.Price large artist lawyer since. According forget place method."}]}'
		data=JSON.parse(data).data;
		this.setState({
			comments:data
		});	
		
	}
	componentWillMount(){
		this.initData();
/*  向后台请求数据 由于访问不是很稳定，而注释了这一部分 */		
/* 		const _this=this;
		axios.get('https://y1r2isxfb2.execute-api.us-east-1.amazonaws.com/comments')
		.then(function (response) {
			_this.setState({
				comments:response.data.data,
			});		
		})
		.catch(function (error) {
			console.log(error);
			_this.setState({
				error:error
			})
		}) */
	}
  render(){
    return(
      <div className='container'> 
        <div className='left-container'>
					{
						this.state.comments.map((comment,index)=>{
							return (
								<div className='left-item' key={index}>
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
        <div className='right-container'>
					{
						this.state.comments.map((comment,index)=>{
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