function Login() {
  return(
    <>
    <div style={{height:'800px', paddingTop:'100px', textAlign:'center'}}>
      <div style={{
        display:'inline-block', 
        background:'rgba(145, 193, 255, 0.32)', 
        borderRadius:'10%', 
        width:'500px',
        height:'500px'
      }}> 
        <h1 style={{marginTop:'100px'}}>로그인</h1>
        <div style={{marginTop:'50px'}}>
          <input style={{width:'70%', height:'40px'}} type="text" placeholder="아이디를 입력하세요"/><br />
          <input style={{width:'70%', height:'40px', marginTop:'10px'}} type="password" placeholder="비밀번호를 입력하세요"/><br/>
          <button style={{marginLeft:'300px', marginTop:'10px', marginBottom:'40px'}}>확인</button> <br />
          <div style={{borderTop:'1px solid rgba(0,0,0,0.2)', padding:'20px'}}>
          <a href="/newMember">회원가입</a> <a href="#">아이디찾기</a> <a href="#">비밀번호찾기</a>
          </div>
        </div>
      </div>

    </div>
    </>
  ) 
}

export default Login;