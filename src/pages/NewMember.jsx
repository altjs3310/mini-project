function NewMember() {
  return(
    <>
     <div style={{height:'1000px', paddingTop:'100px', textAlign:'center'}}>
      <div style={{
        display:'inline-block', 
        background:'rgba(255, 201, 139, 0.22)', 
        borderRadius:'10%', 
        width:'700px',
        height:'800px',
        textAlign:'left',
        paddingLeft:'30px'        
      }}> 
        <h1 style={{marginTop:'50px'}}>회원가입</h1>

        <div style={{marginTop:'50px'}}>
          <p>이름</p>
          <input style={{width:'100px'}} type="text"/><br />

          <p style={{marginTop:'30px'}}>배송지</p>
          <input style={{width:'70%', height:'30px'}} type="text" />
          <input style={{marginTop:'10px'}} type="text" placeholder="상세주소"/>

          <p style={{marginTop:'30px'}}>이메일</p>
          <input style={{width:'70%', height:'30px'}} type="text" placeholder="이메일을 입력하세요"/>

          <p style={{marginTop:'40px'}}>아이디</p>
          <input style={{width:'70%', height:'30px', }} type="text" placeholder="아이디를 입력하세요"/><br />
          <input style={{width:'70%', height:'30px', marginTop:'10px'}} type="password" placeholder="비밀번호를 입력하세요"/><br/>

          <p style={{marginTop:'40px'}}>성별</p>
          남 <input type="checkbox" /> 여 <input type="checkbox"/><br />

          <button style={{marginLeft:'300px', marginTop:'30px'}}>확인</button>
        </div>
      </div>

    </div>
    </>
  )
}

export default NewMember