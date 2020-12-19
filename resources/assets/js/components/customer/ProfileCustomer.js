import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import BangInThongTin from './PrintProfile';

class ProfileCustomer extends Component {
  constructor (props) {
    super(props)

    this.state = {
      khachhang: {},
      nguongioithieusingle: {},
      nguongioithieulist: [],
      tiensubenhlist: [],
      dichvulist: [],
      bacsilist: [],
      tiensubenhsingle:[],
      dichvudieutrisingle:[],
      idkhachhang:'',
      hoten: '',
      gioitinh: '1',
      ngaysinh: '1/1/1989',
      diachi: 'Chưa có địa chỉ',
      dienthoai: 'chưa có điện thoại',
      tiensubenh: [],
      gioithieu: 'chưa có nhu cầu thăm khám',
      dichvudieutri: [],
      nguongioithieu: '',
      danhgia: 'chưa có đánh giá',
      sosao: '0',
      bacsidieutri: '1',
      trangthai: '1',
      anhdaidien: '',
      truocmatbefore: '',
      hamtrenbefore: '',
      hamduoibefore: '',
      truocmatafter: '',
      hamtrenafter: '',
      hamduoiafter: '',
      idupdate: ''
  }
  this.handleUpdateThongTin = this.handleUpdateThongTin.bind(this)
  this.handleFieldChange = this.handleFieldChange.bind(this)
  this.updatekhachhang = this.updatekhachhang.bind(this)
}
  componentDidMount() {
    const khachhangId = this.props.match.params.id
 
  this.setState({
    idkhachhang: khachhangId
  })
  axios.get('/index.php/api/chitietkhachhang/'+khachhangId).then(response => {
    
    this.setState({
      khachhang: response.data,
      
    })
        console.log(this.state.khachhang)
    var charngt=Math.floor(response.data.nguongioithieu[1]);
    
    var tiensubenh=response.data.tiensubenh.replaceAll('"', '').replaceAll('[', '').replaceAll(']', '');
    var arraytiensubenh = tiensubenh.split(',');
    var dichvudieutri=response.data.dichvudieutri.replaceAll('"', '').replaceAll('[', '').replaceAll(']', '');
    var arraydichvudieutri = dichvudieutri.split(',');
    this.setState({
      tiensubenh: arraytiensubenh,
      dichvudieutri: arraydichvudieutri
    })
    
    this.getDetailNguonGioiThieu(charngt)
    this.getdanhsachtiensubenh(tiensubenh)
    this.getdanhsachsanphamdichvu(dichvudieutri)
  })
    axios.get('/index.php/api/nguongioithieu').then(response => {
      this.setState({
        nguongioithieulist: response.data
      })
    })
    axios.get('/index.php/api/tiensubenh').then(response => {
      this.setState({
        tiensubenhlist: response.data
      })
    })  
    axios.get('/index.php/api/dichvu').then(response => {
      this.setState({
        dichvulist: response.data
      })
    }) 
    axios.get('/index.php/api/doctor').then(response => {
      this.setState({
        bacsilist: response.data
      })
    })
    
  


  }
  handleFieldChange (event) {
   

    var checkedArr = [];
    var value;
     if(event.target.type == 'checkbox')
     {
      console.log(event.target.name)
      if(event.target.name == 'tiensubenh')
      {
     checkedArr = [];
        const classtiensu = document.getElementsByClassName('itemtiensubenh');
        for (var i = 0; i < classtiensu.length; i++) {
          if (classtiensu[i].checked) {
            checkedArr.push(classtiensu[i].value);
          }
        }
        value = checkedArr;
      this.setState({ [event.target.name]: value });
        console.log(this.state.tiensubenh)
      }
      else if(event.target.name == 'dichvudieutri')
      {
     checkedArr = [];
        const classtiensu = document.getElementsByClassName('dichvuitem');
        for (var i = 0; i < classtiensu.length; i++) {
          if (classtiensu[i].checked) {
            checkedArr.push(classtiensu[i].value);
          }
        }
        value = checkedArr;
      this.setState({ [event.target.name]: value });
        console.log(this.state.tiensubenh)
      }
      else if(event.target.name == 'nguongioithieu')
      {
     checkedArr = [];
        const classtiensu = document.getElementsByClassName('nguongioithieuitem');
        for (var i = 0; i < classtiensu.length; i++) {
          if (classtiensu[i].checked) {
            checkedArr.push(classtiensu[i].value);
          }
        }
        value = checkedArr;
      this.setState({ [event.target.name]: value });
        console.log(this.state.tiensubenh)
      }
      else
      {
        const checkeds = document.getElementsByTagName('input');
         
        for (var i = 0; i < checkeds.length; i++) {
          if (checkeds[i].checked) {
            checkedArr.push(checkeds[i].value);
          }
        }
        value = checkedArr;
      this.setState({ [event.target.name]: value });
      }

        
      
     }
     else if(event.target.type == 'file')
     {
          let files = event.target.files || event.dataTransfer.files;
         if(!files.length)
             return;
           if(event.target.name == "anhdaidien")
           {
             this.createImageAnhDaiDien(event.target.files[0])
           }
           else if(event.target.name == "truocmatbefore")
           {
             this.createImageTruocMatBefore(event.target.files[0])
           }
           else if(event.target.name == "hamtrenbefore")
           {
             this.createImageHamTrenBefore(event.target.files[0])
           }
           else if(event.target.name == "hamduoibefore")
           {
             this.createImageHamDuoiBefore(event.target.files[0])
           }
           else if(event.target.name == "truocmatafter")
           {
             this.createImageTruocMatAfter(event.target.files[0])
           }
           else if(event.target.name == "hamtrenafter")
           {
             this.createImageHamTrenAfter(event.target.files[0])
           }
           else
           {
             this.createImageHamDuoiAfter(event.target.files[0])
           }
      
         
     }
     else
     {
   
       this.setState({
         [event.target.name]: event.target.value
       })
     }
    
   }
   createImageHamDuoiBefore(file){
   
    var reader = new FileReader();

    reader.onload = (e) => {
        this.setState({
          hamduoibefore: e.target.result
        })
   }
   reader.readAsDataURL(file);
   
    
}
  createImageHamTrenBefore(file){
   
    var reader = new FileReader();

    reader.onload = (e) => {
        this.setState({
          hamtrenbefore: e.target.result
        })
   }
   reader.readAsDataURL(file);
   
    
}
createImageTruocMatBefore(file){
   
  var reader = new FileReader();

  reader.onload = (e) => {
      this.setState({
        truocmatbefore: e.target.result
      })
 }
 reader.readAsDataURL(file);
 
  
}
createImageHamDuoiAfter(file){
   
  var reader = new FileReader();

  reader.onload = (e) => {
      this.setState({
        hamduoiafter: e.target.result
      })
 }
 reader.readAsDataURL(file);
 
  
}
createImageHamTrenAfter(file){
 
  var reader = new FileReader();

  reader.onload = (e) => {
      this.setState({
        hamtrenafter: e.target.result
      })
 }
 reader.readAsDataURL(file);
 
  
}
createImageTruocMatAfter(file){
 
var reader = new FileReader();

reader.onload = (e) => {
    this.setState({
      truocmatafter: e.target.result
    })
}
reader.readAsDataURL(file);


}
createImageAnhDaiDien(file){
  var reader = new FileReader();

  reader.onload = (e) => {
      this.setState({
        anhdaidien: e.target.result
      })
 }
 reader.readAsDataURL(file);
}
  getDetailNguonGioiThieu(idnguon){
   var idnguons=Math.floor(idnguon)
    axios.get('/index.php/api/nguongioithieudetail/'+idnguons).then(response => {
    
      this.setState({
        nguongioithieusingle: response.data
      })
    
    })
    
  }
  getdanhsachtiensubenh(nhomtiensubenh){
  
    
    var nhom = {
      nhomtiensubenh: nhomtiensubenh
    }
  
    axios.post('/index.php/api/danhsachtiensubenh',nhom).then(response => {
    
      this.setState({
        tiensubenhsingle: response.data
      })
    
    })
    
  
   }
   getdanhsachsanphamdichvu(dichvu){
  
    
    var spdv = {
      dichvu: dichvu
    }
  
    axios.post('/index.php/api/danhsachdichvu',spdv).then(response => {
    
      this.setState({
        dichvudieutrisingle: response.data
      })
     
    })
    
  
   }
   handleUpdateThongTin (event) {
    event.preventDefault()



    const customers = {
        hoten: this.state.hoten,
        gioitinh: this.state.gioitinh,
        ngaysinh: this.state.ngaysinh,
        diachi: this.state.diachi,
        dienthoai: this.state.dienthoai,
        tiensubenh:this.state.tiensubenh,
        gioithieu: this.state.gioithieu,
        dichvudieutri: this.state.dichvudieutri,
        nguongioithieu: this.state.nguongioithieu,
        danhgia: this.state.danhgia,
        sosao: this.state.sosao,
        bacsidieutri: this.state.bacsidieutri,
        trangthai: this.state.trangthai,
        anhdaidien: this.state.anhdaidien,
        truocmatbefore: this.state.truocmatbefore,
        hamtrenbefore: this.state.hamtrenbefore,
        hamduoibefore: this.state.hamduoibefore,
        truocmatafter: this.state.truocmatafter,
        hamtrenafter: this.state.hamtrenafter,
        hamduoiafter: this.state.hamduoiafter
    }
    const token = document.querySelector('meta[name="csrf-token"]');
    const headers = {
      'Content-Type': 'multipart/form-data',
      'X-CSRF-TOKEN': token.content 
  }
  console.log(customers);
  
  axios.post('/index.php/api/customers/'+this.state.idupdate, customers, headers)
    .then(response => {
      console.log(response.data)
      axios.get('/index.php/api/chitietkhachhang/'+this.state.idupdate).then(response => {
    
        this.setState({
          khachhang: response.data
        })
        console.log(this.state.khachhang);
        var charngt=Math.floor(response.data.nguongioithieu[1]);
        var tiensubenh=response.data.tiensubenh.replaceAll('"', '').replaceAll('[', '').replaceAll(']', '');
        var dichvudieutri=response.data.dichvudieutri.replaceAll('"', '').replaceAll('[', '').replaceAll(']', '');
        
        this.getDetailNguonGioiThieu(charngt)
        this.getdanhsachtiensubenh(tiensubenh)
        this.getdanhsachsanphamdichvu(dichvudieutri)
      
      })
      var button = document.getElementById('btn-end')
      button.click()
    }).catch(err => console.log(err));
       

  }
  updatekhachhang()
  {
    document.getElementById("updatehoten").value=this.state.khachhang.hoten
    document.getElementById("updatebacsidieutri").value=this.state.khachhang.bacsidieutri
    var selectdv=document.getElementById("updatebacsidieutri").childNodes;
    for(var i = 0; i < selectdv.length; i++) {
      var datadv=selectdv[i].value;
      if(datadv==this.state.khachhang.bacsidieutri)
      {
        selectdv[i].setAttribute('selected', true);
      }
     }
    document.getElementById("updategioitinh").value=this.state.khachhang.gioitinh
    var selectgt=document.getElementById("updategioitinh").childNodes;
    for(var i = 0; i < selectgt.length; i++) {
      var datadv=selectgt[i].value;
      if(datadv==this.state.khachhang.gioitinh)
      {
        selectdv[i].setAttribute('selected', true);
      }
     }
     document.getElementById("sosao").value=this.state.khachhang.sosao
    var selectgt=document.getElementById("sosao").childNodes;
    for(var i = 0; i < selectgt.length; i++) {
      var datadv=selectgt[i].value;
      if(datadv==this.state.khachhang.sosao)
      {
        selectdv[i].setAttribute('selected', true);
      }
     }
     document.getElementById("trangthai").value=this.state.khachhang.trangthai
    var selectgt=document.getElementById("trangthai").childNodes;
    for(var i = 0; i < selectgt.length; i++) {
      var datadv=selectgt[i].value;
      if(datadv==this.state.khachhang.trangthai)
      {
        selectdv[i].setAttribute('selected', true);
      }
     }
    document.getElementById("updatengaysinh").value=this.state.khachhang.ngaysinh
    document.getElementById("updatediachi").value=this.state.khachhang.diachi
    document.getElementById("updatedienthoai").value=this.state.khachhang.dienthoai
    document.getElementById("updatenhucauthamkham").value=this.state.khachhang.gioithieu
    document.getElementById("updateanhdaidien").src = '../public/uploads/customer/'+this.state.khachhang.anhdaidien;
    document.getElementById("updatetruocmatbefore").src = '../public/uploads/customer/'+this.state.khachhang.truocmatbefore;
    document.getElementById("updatehamtraibefore").src = '../public/uploads/customer/'+this.state.khachhang.hamtrenbefore;
    document.getElementById("updatehamphaibefore").src = '../public/uploads/customer/'+this.state.khachhang.hamduoibefore;
    document.getElementById("updatetruocmatafter").src = '../public/uploads/customer/'+this.state.khachhang.truocmatafter;
    document.getElementById("updatehamtraiafter").src = '../public/uploads/customer/'+this.state.khachhang.hamtrenafter;
    document.getElementById("updatehamphaiafter").src = '../public/uploads/customer/'+this.state.khachhang.hamduoiafter;
    document.getElementById("updategioitinh").value=this.state.khachhang.gioitinh
    var selectgtt=document.getElementsByClassName("itemtiensubenh")
    var tiensubenh = this.state.khachhang.tiensubenh.replaceAll('"', '').replaceAll('[', '').replaceAll(']', '')
    var arraytiensubenh = tiensubenh.split(',');

    for(var i = 0; i < selectgtt.length; i++) {
      var datagt=selectgtt[i].value;
      for( var j=0; j < arraytiensubenh.length; j++)
      {
       if(datagt==arraytiensubenh[j])
       {
         selectgtt[i].setAttribute('checked', true);
       }
      }
   
     }
     
    var dichvudieutri=this.state.khachhang.dichvudieutri.replaceAll('"', '').replaceAll('[', '').replaceAll(']', '').replaceAll('""', '"')
    var arraydichvudieutri = dichvudieutri.split(',');
    var selectptp=document.getElementsByClassName("dichvuitem")
    
    for(var i = 0; i < selectptp.length; i++) {
     var datagt=selectptp[i].value;
     for( var j=0; j < arraydichvudieutri.length; j++)
     {
      if(datagt==arraydichvudieutri[j])
      {
           selectptp[i].setAttribute('checked', true);
      }
     }
  
    }
    var nguongioithieu=this.state.khachhang.nguongioithieu.replaceAll('"', '').replaceAll('[', '').replaceAll(']', '')
    var arraynguongioithieu= nguongioithieu.split(',');
  
    var selectngt=document.getElementsByClassName("nguongioithieuitem")
    
    for(var i = 0; i < selectngt.length; i++) {
     var datagt=selectngt[i].value;
     for( var j=0; j < arraynguongioithieu.length; j++)
     {
      if(datagt==arraynguongioithieu[j])
      {
       selectngt[i].setAttribute('checked', true);
      }
     }
  
    }
     
    this.setState({
        idupdate: this.state.khachhang.ID,
        hoten: this.state.khachhang.hoten,
        gioitinh: this.state.khachhang.gioitinh,
        ngaysinh: this.state.khachhang.ngaysinh,
        diachi: this.state.khachhang.diachi,
        dienthoai: this.state.khachhang.dienthoai,
        tiensubenh: arraytiensubenh,
        gioithieu: this.state.khachhang.gioithieu,
        dichvudieutri: arraydichvudieutri,
        nguongioithieu: arraynguongioithieu,
        danhgia: this.state.khachhang.danhgia,
        sosao: this.state.khachhang.sosao,
        bacsidieutri: this.state.khachhang.bacsidieutri,
        trangthai: this.state.khachhang.trangthai,
        anhdaidien: this.state.khachhang.anhdaidien,
        truocmatbefore: this.state.khachhang.truocmatbefore,
        hamtrenbefore: this.state.khachhang.hamtrenbefore,
        hamduoibefore: this.state.khachhang.hamduoibefore,
        truocmatafter: this.state.khachhang.truocmatafter,
        hamtrenafter: this.state.khachhang.hamtrenafter,
        hamduoiafter: this.state.khachhang.hamduoiafter
    })
  }
  render () {
    
    const { khachhang,nguongioithieusingle,tiensubenhsingle,dichvudieutrisingle,idkhachhang } = this.state
    const { nguongioithieulist } = this.state;
const { tiensubenhlist } = this.state;
const { dichvulist } = this.state;
const { bacsilist } = this.state;
    return (
 
        <div className="row" id="thongtinkhachhang">
           <div className="col-md-12 col-xs-12 m-b-20">

           <section>
        <div className="sttabs tabs-style-bar">
          <nav>
            <ul>
              <li className="tab-current"><Link to={'/ho-so-khach-hang/'+idkhachhang} className="sticon"><span>Thông tin cá nhân</span></Link></li>
              <li><Link to={'/lich-hen-khach-hang/'+idkhachhang} className="sticon"><span>Lịch hẹn</span></Link></li>
            
              <li><Link to={'/don-thuoc-khach-hang/'+idkhachhang} className="sticon"><span>Đơn thuốc</span></Link></li>
          
            </ul>
          </nav>
      
          {/* /content */}
        </div>
        {/* /tabs */}
      </section>
           </div>
     
        <div className="col-md-4 col-xs-12">
          <div className="white-box">
         
            <div className="user-bg"> <img width="100%" alt="user" src={"../public/uploads/customer/"+khachhang.anhdaidien} /> </div>
            <div className="user-btm-box">
              {/* .row */}
              <div className="row text-center m-t-10">
                <div className="col-md-6 b-r"><strong>Họ và Tên</strong>
    <p>{khachhang.hoten}</p>
                </div>
                <div className="col-md-6"><strong>Ngày Sinh</strong>
                  <p>{khachhang.ngaysinh}</p>
                </div>
              </div>
              {/* /.row */}
              <hr />
              {/* .row */}
              <div className="row text-center m-t-10">
                <div className="col-md-6 b-r"><strong>Địa chỉ</strong>
                  <p>{khachhang.diachi}</p>
                </div>
                <div className="col-md-6"><strong>Số Điện Thoại</strong>
                  <p>{khachhang.dienthoai}</p>
                </div>
              </div>
              {/* /.row */}
              <hr />
            
              <div className="row text-center m-t-10">
                <div className="col-md-12"><strong>Nguồn</strong>
                  <p>{nguongioithieusingle.nguon}
                  </p>
                </div>
              </div>
              {/* /.row */}
            
              <div className="row text-center m-t-10">
              <button type="button" className="btn btn-block  btn-primary" data-toggle="modal" data-target="#exampleModalPrint" data-whatever="@mdo">IN THÔNG TIN KHÁCH HÀNG</button>
              <button type="button" className="btn btn-block  btn-primary" data-toggle="modal" data-target="#exampleModal2" onClick={this.updatekhachhang} data-whatever="@mdo">CHỈNH SỬA THÔNG TIN KHÁCH HÀNG</button>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-8 col-xs-12">
          <div className="white-box">
          <h4 className="m-t-20">Nhu cầu thăm khám</h4>
           
    <p className="m-t-30">{khachhang.gioithieu}</p>
 
          <h4 className="m-t-30">Ảnh hàm răng Trước</h4>  
          <div className="row text-center m-t-30">
                <div className="col-md-4">
                <p>Trước mặt</p>
                <img width="100%"  height="210px" alt="user" src={"../public/uploads/customer/"+khachhang.truocmatbefore} /> 
                </div>
                <div className="col-md-4 b-r">
                <p>Hàm trái</p>
                <img width="100%" height="210px" alt="user" src={"../public/uploads/customer/"+khachhang.hamtrenbefore} /> 
                </div>
                <div className="col-md-4">
                <p>Hàm phải</p>
                <img width="100%"  height="210px" alt="user" src={"../public/uploads/customer/"+khachhang.hamduoibefore} /> 
                </div>
           </div>
           <h4 className="m-t-30">Ảnh hàm răng Sau</h4>  
          <div className="row text-center m-t-30">
                <div className="col-md-4 b-r">
                <p>Trước mặt</p>
                <img width="100%" height="210px" alt="user" src={"../public/uploads/customer/"+khachhang.truocmatafter} /> 
                </div>
                <div className="col-md-4 b-r">
                <p>Hàm trái</p>
                <img width="100%" height="210px" alt="user" src={"../public/uploads/customer/"+khachhang.hamtrenafter} /> 
                </div>
                <div className="col-md-4">
                <p>Hàm phải</p>
                <img width="100%"  height="210px" alt="user" src={"../public/uploads/customer/"+khachhang.hamduoiafter} /> 
                </div>
           </div>
    <div className="row text-center m-t-30">
                <div className="col-md-6 b-r">
                <h4 className="box-title">Tiểu sử bệnh</h4>
        <ul className="list-group">
        {tiensubenhsingle.map(dv => (
           <li key={dv.id} className="list-group-item">{dv.ten}</li>
        ))}
         
          
        </ul>
                </div>
                <div className="col-md-6">
      
                <h4 className="box-title">Dịch vụ điều trị </h4>
        <ul className="list-group">
        {dichvudieutrisingle.map(dv => (
           <li key={dv.id} className="list-group-item">{dv.ten}</li>
        ))}
         
        </ul>
                </div>
           </div>
       
       
          </div>
        </div>
        <div className="modal fade" id="exampleModal2" tabIndex={-1} role="dialog" aria-labelledby="exampleModalLabel2">
    <div className="modal-dialog popmodalwidth" role="document">
      <div className="modal-content">
        <div className="modal-header">
          <button type="button" className="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">×</span></button>
          <h4 className="modal-title" id="exampleModalLabel2">Cập Nhật Thông Tin Cơ Bản</h4> </div>
        <div className="modal-body">
        <form encType="multipart/form-data"  onSubmit={this.handleUpdateThongTin} >
                  <div className="form-body">
                  
                    <div className="row">
                      <div className="col-md-6">
                        <div className="form-group">
                          <label className="control-label">Họ và Tên</label>
                          <input name="hoten" type="text" id="updatehoten" className="form-control" 
                          onChange={this.handleFieldChange} placeholder="Nguyễn Văn" /> <span className="help-block"> </span> 
                       
                          </div>
                         
                      </div>
                      <div className="col-md-6">
                        <div className="form-group">
                          <label className="control-label">Bác sĩ điều trị</label>
                          <select id="updatebacsidieutri" name="bacsidieutri" 
                          onChange={this.handleFieldChange} className="form-control">
							<option value="99" >Chọn bác sĩ</option>
              {
              bacsilist.map(dv => (
              	<option key={dv.id} value={dv.id} >{dv.ten}</option>
                ))
  }
                          </select> 
                       
                          </div>
                         
                      </div>
                    </div>
                    {/*/row*/}
                    <div className="row">
                      <div className="col-md-6">
                        <div className="form-group">
                          <label className="control-label">Giới tính</label>
                          <select id="updategioitinh" name="gioitinh" 
                          onChange={this.handleFieldChange} className="form-control">
							<option value="99" >Chọn giới tính</option>
                            <option value="1" >Nam</option>
                            <option value="0" checked>Nữ</option>
                          </select> </div>
                      </div>
                      {/*/span*/}
                      <div className="col-md-6">
                        <div className="form-group">
                          <label className="control-label">Ngày sinh</label>
                          <input id="updatengaysinh" name="ngaysinh" 
                          onChange={this.handleFieldChange} type="text" className="form-control" placeholder="dd/mm/yyyy" /> </div>
                      </div>
                      {/*/span*/}
                    </div>
                    <div className="row">
                      <div className="col-md-6">
                        <div className="form-group">
                          <label className="control-label">Địa chỉ</label>
                          <input id="updatediachi" name="diachi" 
                          onChange={this.handleFieldChange} type="text" className="form-control" placeholder="địa chỉ nhà" /> <span className="help-block"></span> </div>
                      </div>
                      {/*/span*/}
                      <div className="col-md-6">
                        <div className="form-group">
                          <label className="control-label">Điện Thoại</label>
                          <input id="updatedienthoai" name="dienthoai" 
                          onChange={this.handleFieldChange} type="text" 
                          className="form-control" placeholder="0989228480" /> <span className="help-block"></span> </div>
                      </div>
                      {/*/span*/}
                    </div>
                    {/*/row*/}
                    <div className="row">
                        <div className="col-md-12">
                          <div className="form-group">
                          <label htmlFor="gioi-thieu-ex">Nhu cầu thăm khám</label>
    <textarea className="form-control" 
                          onChange={this.handleFieldChange} id="updatenhucauthamkham" rows="4" name="gioithieu"></textarea>
                          </div>
                        </div>
                    </div>
                    <div className="row">
                      <div className="col-md-6">
                        <div className="form-group">
                          <label className="control-label">Trạng thái khách đến</label>
                          <select  id="sosao" name="sosao" 
                          onChange={this.handleFieldChange} className="form-control">
							<option value="99"  checked>Chọn trạng thái khách đến</option>
                            <option value="0">Khách vãng lai làm dịch vụ khác</option>
                            <option value="1">Khách làm dịch vụ khác</option>
                            <option value="2">Khách vãng lai không đồng ý</option>
                            <option value="3">Khách vãng lai đồng ý</option>
                            <option value="4">Khách không làm</option>
                            <option value="5">Khách đồng ý</option>
                          </select> </div>
                      </div>
                      {/*/span*/}
                      <div className="col-md-6">
                        <div className="form-group">
                        <label className="control-label">Trạng thái đặt hẹn</label>
                          <select id="trangthai" name="trangthai" 
                          onChange={this.handleFieldChange} className="form-control">
							<option value="99">Chọn trạng đặt hẹn</option>
                            <option value="0">Đặt hẹn</option>
                            <option value="1">Đã đến</option>
                            <option value="2">Không đến</option>
                          </select> </div>
                      </div>
                      {/*/span*/}
                    </div>
                    <div className="row">
                      <div className="col-md-4">
                      <div className="form-group">
                          
                        
                          <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                        <p className="box-title m-b-0">Tiền sử bệnh</p>
                        <ul id="updatetiensubenh" className="icheck-list popupchecklist">
                          {tiensubenhlist.map(ts => (
 <li key={ts.id}>
 <input type="checkbox" name="tiensubenh" className="itemtiensubenh" 
                          data-checkbox="icheckbox_flat-red"  value={ ts.id } onChange={this.handleFieldChange} />
 <label htmlFor={'flat-checkbox-'+ts.id}>{ts.ten}</label>
</li>
       
    ))}
      </ul>
                      </div>
                          
                        </div>
                      </div>
                      {/*/span*/}
                      <div className="col-md-4">
                      <div className="form-group">
                          
                        
                          <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                          <p className="box-title m-b-0">Dịch vụ</p>
                          <ul id="nguongioithieuitem" className="icheck-list popupchecklist">
                          {dichvulist.map(dv => (
 <li key={dv.id}>
 <input type="checkbox" name="dichvudieutri" className="dichvuitem"  data-checkbox="icheckbox_flat-red"  value={dv.id} onChange={this.handleFieldChange} />
 <label htmlFor={'flat-checkbox-dv'+dv.id}>{dv.ten}</label>
</li>
       
    ))}
      </ul>
                      </div>
                          
                        </div>
                      </div>
                      <div className="col-md-4">
                      <div className="form-group">
                          
                      <p className="box-title m-b-0">Khách hàng biết nha khoa từ đâu</p>
                          <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                      
                        {nguongioithieulist.map(nguon => (
                         <div key={nguon.id} className="radio popupchecklist">
                         <input type="radio" value={ nguon.id }
                          onChange={this.handleFieldChange}  name="nguongioithieu" className="nguongioithieuitem"  />
                         <label htmlFor={'radionguon'+nguon.id}> {nguon.nguon} </label>
                       </div>
                        ))}
                      </div>
                          
                        </div>
                      </div>
                      
                    </div>
            
                    <div className="row">
                      <div className="col-md-12">
                        <div className="white-box">
                          <h3 className="box-title m-b-0">Ảnh đại diện </h3>
                          <img src="" id="updateanhdaidien" className="thumbinfokh" />
                          <div className="fallback">
                            <input className="form-control" name="anhdaidien" accept="image/*" type="file" onChange={this.handleFieldChange} /> </div>
                        </div>
                      </div>
                    </div>
                  
                    <div className="row">
    
                      <div className="col-md-4">
                        <div className="white-box">
                           
                          <h3 className="box-title m-b-0">Trước mặt trước khi làm </h3>
                          <img src="" id="updatetruocmatbefore" className="thumbinfokh" />
                            <div className="fallback">
                              <input className="form-control" name="truocmatbefore" accept="image/*" type="file" onChange={this.handleFieldChange} /> </div>
                        
                        </div>
                      </div>
                      <div className="col-md-4">
                        <div className="white-box">
                          <h3 className="box-title m-b-0">Hàm trái trước khi làm </h3>
                          <img src="" id="updatehamtraibefore" className="thumbinfokh" />
                            <div className="fallback">
                              <input className="form-control" name="hamtrenbefore" accept="image/*" type="file" onChange={this.handleFieldChange} /> </div>
                         
                        </div>
                      </div>
                      <div className="col-md-4">
                        <div className="white-box">
                          <h3 className="box-title m-b-0">Hàm phải trước khi làm </h3>
                          <img src="" id="updatehamphaibefore" className="thumbinfokh" />
                            <div className="fallback">
                              <input className="form-control" name="hamduoibefore" accept="image/*" type="file" onChange={this.handleFieldChange} /> </div>
                         
                        </div>
                      </div>
                    </div>
                    <div className="row">
          
                      <div className="col-md-4">
                        <div className="white-box">
                          <h3 className="box-title m-b-0">Trước mặt sau khi làm</h3>
                          <img src="" id="updatetruocmatafter" className="thumbinfokh" />
                            <div className="fallback">
                              <input className="form-control" name="truocmatafter" accept="image/*" type="file" onChange={this.handleFieldChange} /> </div>
                        
                        </div>
                      </div>
                      <div className="col-md-4">
                        <div className="white-box">
                          <h3 className="box-title m-b-0">Hàm trái sau khi làm</h3>
                          <img src="" id="updatehamtraiafter" className="thumbinfokh" />
                            <div className="fallback">
                              <input className="form-control" name="hamtrenafter" accept="image/*" type="file" onChange={this.handleFieldChange} /> </div>
                         
                        </div>
                      </div>
                      <div className="col-md-4">
                        <div className="white-box">
                          <h3 className="box-title m-b-0">Hàm phải sau khi làm</h3>
                          <img src="" id="updatehamphaiafter" className="thumbinfokh" />
                            <div className="fallback">
                              <input className="form-control" name="hamduoiafter" accept="image/*" type="file" onChange={this.handleFieldChange} /> </div>
                         
                        </div>
                      </div>
                    </div>
                    {/*/row*/}
                    <hr />
                  </div>
                <div className="form-actions">
                <button type="button" id="btn-end" className="btn btn-default btn-end" data-dismiss="modal">QUAY LẠI</button>
                  <button type="submit" className="btn btn-success"> <i className="fa fa-check" /> Lưu</button>
     
                </div>
                </form>
        </div>
       
      </div>
    </div>
  </div>
        <div className="modal fade" id="exampleModalPrint" tabIndex={-1} role="dialog" aria-labelledby="exampleModalLabel1">
    <div className="modal-dialog" role="document">
      <div className="modal-content">
      <BangInThongTin key={khachhang.ID} datakhachhang={khachhang} dichvudieutri={dichvudieutrisingle} tiensubenh={tiensubenhsingle} nguongioithieu={nguongioithieusingle.nguon} />
       
      </div>
    </div>
  </div>
  <div className="col-md-12">

  </div>

      </div>
      
    )
  }
}

export default ProfileCustomer