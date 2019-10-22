import React from 'react';
import './App.css';

function App() {
  return (
    
    <div className="App">
            
      <div class="main">

      <br/> <br/> <br/><br/> <br/> <br/><br/> <br/> 

        <div class="holder_wrap">
        <div class="holder_wrap_img">
        <img src={require('./cat.png')} ALIGN =  "LEFT" alt="bg"  hspace="350" style={{width: 511, height: 714}} />
        <div class="inner_position_right">

        <br/><br/><br/><br/><br/><br/><br/><br/><font size="32" ><b>สมัครสมาชิก</b></font><br/><br/><br/><br/><br/>
     
        <br/><label for="account"><font size="6" ><b>ชื่อบัญชี     &nbsp; &nbsp; </b></font></label>
        <input type="text" id="account" name="account"></input>     
        
        <br/> <br/> <br/> <br/> <br/><label for="password"><font size="6" ><b>รหัสผ่าน &nbsp; &nbsp;</b></font></label>
        <input type="password" id="password" name="password" ></input>
       
        <br/> <br/> <br/> <br/> <br/> <br/><label for="checkpassword"><font size="6" ><b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;ยืนยันรหัสผ่าน &nbsp; &nbsp; </b></font></label>
        <input type="password" id="checkpassword" name="checkpassword" ></input>

        <br/><br/><br/><br/><br/><br/>

        <tr>
      <td width="320" align="left" valign="top"><label for="name"><font size="6" ><b>&nbsp; &nbsp;&nbsp;ชื่อ   </b></font></label>
      
      <input type="text" id="name" name="name"></input></td>

      <td width="320"align="left" valign="top"><label for="lastname"><font size="6" ><b> นามสกุล   </b></font></label>
      <input type="text" id="lastname" name="lastname"></input></td>
    </tr>

    <tr>
      <td width="320" align="left" valign="top"> <br/><label for="email"><font size="6" ><b> &nbsp; &nbsp;&nbsp;อีเมล </b></font></label>
      
      <input type="text" id="email" name="email" ></input>
       </td>

      <td width="320"align="left" valign="top"><br/><label for="tel"><font size="6" ><b>เบอร์โทร  </b></font></label> 
      <input type="text" id="tel" name="tel" ></input>
      </td>
    </tr>





        <br/><br/>
        <button class="button"><b>สมัครสมาชิก</b></button>

        <br/> <br/>
        <p1><b><font color="#FFCFD7"><font size="3" >เป็นสมาชิกแล้วใช่ไหม&nbsp;</font></font></b><a href ="#"><b><font size="3" >เข้าสู่ระบบ</font></b></a></p1>

        <br/><br/>

        </div>
        </div>
        </div>
 
       </div>

    
      



    </div>







  );
}


 export default App;
