import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class AllCustomer extends Component {
  constructor () {
    super()

    this.state = {
      khachhanglist: [],
      nguongioithieu: '',
      tiensubenhlist: [],
      dichvulist: [],
      nguongioithieulist:[],
      bacsilist: [],
      khachhang: [],
      hoten: '',
      gioitinh: '1',
      ngaysinh: '1/1/1989',
      diachi: 'Chưa có địa chỉ',
      dienthoai: 'chưa có điện thoại',
      tiensubenh: [],
      gioithieu: 'chưa có nhu cầu thăm khám',
      dichvudieutri: [],
      nguongioithieu: '3',
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
 
    this.handleDeleteCustomer  = this.handleDeleteCustomer.bind(this)
    this.getDetailNguonGioiThieu = this.getDetailNguonGioiThieu.bind(this)
    this.handleFieldChange = this.handleFieldChange.bind(this)
    this.handleCreateThongTin = this.handleCreateThongTin.bind(this)
    this.handleUpdateThongTin = this.handleUpdateThongTin.bind(this)
    this.getchitietkhachhang = this.getchitietkhachhang.bind(this)
  }
  componentWillMount(){
    const scripts = [
      './public/app_assets/js/datatable/custom.js',
      './public/app_assets/plugins/bower_components/tablesaw-master/dist/tablesaw.js',
      './public/app_assets/plugins/bower_components/tablesaw-master/dist/tablesaw-init.js',
      './public/app_assets/js/jasny-bootstrap.js',
      './public/app_assets/js/mask.js',
      './public/app_assets/plugins/bower_components/bootstrap-datepicker/bootstrap-datepicker.min.js',
      './public/app_assets/js/custome-app.js',
      './public/app_assets/plugins/bower_components/icheck/icheck.min.js',
      './public/app_assets/plugins/bower_components/icheck/icheck.init.js',
      './public/app_assets/js/datatable/custom.js'
  ];
  const scripttag = document.getElementById("tagscripts");
  scripttag.innerHTML = '';
  scripts.forEach(s => {
    const script = document.createElement("script");
    script.type = 'text/javascript';
    script.src = s;
    script.async = true
    scripttag.appendChild(script);
  })
  axios.get('/index.php/api/customers').then(response => {
    this.setState({
      khachhanglist: response.data
    })
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
  componentDidMount() {
    const scripts = [
      './public/app_assets/js/datatable/custom.js',
      './public/app_assets/plugins/bower_components/tablesaw-master/dist/tablesaw.js',
      './public/app_assets/plugins/bower_components/tablesaw-master/dist/tablesaw-init.js',
      './public/app_assets/js/jasny-bootstrap.js',
      './public/app_assets/js/mask.js',
      './public/app_assets/plugins/bower_components/bootstrap-datepicker/bootstrap-datepicker.min.js',
      './public/app_assets/js/custome-app.js',
      './public/app_assets/plugins/bower_components/icheck/icheck.min.js',
      './public/app_assets/plugins/bower_components/icheck/icheck.init.js',
      './public/app_assets/js/datatable/custom.js'
  ];
  const scripttag = document.getElementById("tagscripts");
  scripttag.innerHTML = '';
  scripts.forEach(s => {
    const script = document.createElement("script");
    script.type = 'text/javascript';
    script.src = s;
    script.async = true
    scripttag.appendChild(script);
  })

 
  }
  handleDeleteCustomer(event)
  {
      event.preventDefault()
      let idkh=event.target.attributes.getNamedItem('data-idkhachhang').value

      axios.get('/index.php/api/customersdelete/'+idkh)
      .then(response => {
        // redirect to the homepage
        axios.get('/index.php/api/customers').then(response => {
            this.setState({
              khachhanglist: response.data
            })
          })
       
      })
      .catch(error => {
        this.setState({
          
          
        })
        
      })
  }
  getDetailNguonGioiThieu(idnguon,iduser){
    var idnguons=Math.floor(idnguon)
     axios.get('/index.php/api/nguongioithieudetail/'+idnguons).then(response => {
     

       document.getElementById("nguonuser"+iduser).innerHTML = response.data.nguon;
     })
     
   }
   getdanhsachtiensubenh(nhomtiensubenh,iduser){
  
    
    var nhom = {
      nhomtiensubenh: nhomtiensubenh
    }
  
  
    
  
   }
   handleFieldChange (event) {
   

    var checkedArr = [];
    var value;
     if(event.target.type == 'checkbox')
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
         ngaysinh: document.getElementById("date-range").value
       })
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
   handleCreateThongTin (event)
   {
    event.preventDefault()

    const { history } = this.props
    var ns=document.getElementById("date-range").value
    if(ns==" ")
    {
        ns="1/1/1996"
    }
    const customers = {
      hoten: this.state.hoten,
      gioitinh: this.state.gioitinh,
      ngaysinh: ns,
      diachi: this.state.diachi,
      dienthoai: this.state.dienthoai,
      tiensubenh: this.state.tiensubenh,
      gioithieu: this.state.gioithieu,
      dichvudieutri: this.state.dichvudieutri,
      nguongioithieu: this.state.nguongioithieu,
      anhdaidien: this.state.anhdaidien,
      truocmatbefore: this.state.truocmatbefore,
      hamtrenbefore: this.state.hamtrenbefore,
      hamduoibefore: this.state.hamduoibefore,
      truocmatafter: this.state.truocmatafter,
      hamtrenafter: this.state.hamtrenafter,
      hamduoiafter: this.state.hamduoiafter,
      danhgia: this.state.danhgia,
      sosao: this.state.sosao,
      bacsidieutri: this.state.bacsidieutri,
      trangthai: this.state.trangthai
    }
    const headers = {
      'Content-Type': 'multipart/form-data'
      
  }
    console.log(customers);
    
    axios.post('/index.php/api/customers', customers, headers)
      .then(response => {
        axios.get('/index.php/api/customers').then(response => {
          this.setState({
            khachhanglist: response.data
          })
        })
        var button = document.getElementById('btn-end')
       
        button.click()
      }).catch(err => console.log(err));

   }
   handleUpdateThongTin (event) {
    event.preventDefault()

    const { history } = this.props

    const customers = {
        hoten: this.state.hoten,
        gioitinh: this.state.gioitinh,
        ngaysinh: this.state.ngaysinh,
        diachi: this.state.hoten,
        dienthoai: this.state.hoten,
        tiensubenh:this.state.hoten,
        gioithieu: this.state.hoten,
        dichvudieutri: this.state.hoten,
        nguongioithieu: this.state.hoten,
        danhgia: this.state.hoten,
        sosao: this.state.hoten,
        bacsidieutri: this.state.hoten,
        trangthai: this.state.trangthai,
        anhdaidien: this.state.anhdaidien,
        truocmatbefore: this.state.truocmatbefore,
        hamtrenbefore: this.state.hamtrenbefore,
        hamduoibefore: this.state.hamduoibefore,
        truocmatafter: this.state.truocmatafter,
        hamtrenafter: this.state.hamtrenafter,
        hamduoiafter: this.state.hamduoiafter
    }
    const headers = {
      'Content-Type': 'multipart/form-data'
      
  }
    console.log(customers);

      
  }
  getchitietkhachhang(idkhachhang)
  {

   
    axios.get('/index.php/api/chitietkhachhang/'+idkhachhang).then(response => {
    
        console.log(response.data)
        document.getElementById("updatehoten").value=response.data.hoten
        document.getElementById("updatebacsidieutri").value=response.data.bacsidieutri
        var selectdv=document.getElementById("updatebacsidieutri").childNodes;
        for(var i = 0; i < selectdv.length; i++) {
          var datadv=selectdv[i].value;
          if(datadv==response.data.bacsidieutri)
          {
            selectdv[i].setAttribute('selected', true);
          }
         }
        document.getElementById("updategioitinh").value=response.data.gioitinh
        var selectgt=document.getElementById("updategioitinh").childNodes;
        for(var i = 0; i < selectgt.length; i++) {
          var datadv=selectgt[i].value;
          if(datadv==response.data.bacsidieutri)
          {
            selectdv[i].setAttribute('selected', true);
          }
         }
        document.getElementById("updatengaysinh").value=response.data.ngaysinh
  
        document.getElementById("updatediachi").value=response.data.diachi
        document.getElementById("updatedienthoai").value=response.data.dienthoai
        document.getElementById("updatenhucauthamkham").value=response.data.gioithieu
        document.getElementById("updateanhdaidien").src = './public/uploads/customer/'+response.data.anhdaidien;
        document.getElementById("updatetruocmatbefore").src = './public/uploads/customer/'+response.data.truocmatbefore;
        document.getElementById("updatehamtraibefore").src = './public/uploads/customer/'+response.data.hamtrenbefore;
        document.getElementById("updatehamphaibefore").src = './public/uploads/customer/'+response.data.hamduoibefore;
        document.getElementById("updatetruocmatafter").src = './public/uploads/customer/'+response.data.truocmatafter;
        document.getElementById("updatehamtraiafter").src = './public/uploads/customer/'+response.data.hamtrenafter;
        document.getElementById("updatehamphaiafter").src = './public/uploads/customer/'+response.data.hamduoiafter;
        document.getElementById("updategioitinh").value=response.data.gioitinh
        var selectgtt=document.getElementsByClassName("itemtiensubenh")
         var tiensubenh = response.data.tiensubenh.replaceAll('"', '').replaceAll('[', '').replaceAll(']', '')
         var arraytiensubenh = tiensubenh.split(',');
      
         for(var i = 0; i < selectgtt.length; i++) {
           var datagt=selectgtt[i].value;
           for( var j=0; j < arraytiensubenh.length; j++)
           {
            if(datagt==arraytiensubenh[j])
            {
              selectgtt[j].setAttribute('checked', true);
            }
           }
        
          }
          
         var dichvudieutri=response.data.dichvudieutri.replaceAll('"', '').replaceAll('[', '').replaceAll(']', '')
         var arraydichvudieutri = dichvudieutri.split(',');
         var selectptp=document.getElementsByClassName("dichvuitem")
         
         for(var i = 0; i < selectptp.length; i++) {
          var datagt=selectptp[i].value;
          for( var j=0; j < arraydichvudieutri.length; j++)
          {
           if(datagt==arraydichvudieutri[j])
           {
                selectptp[j].setAttribute('checked', true);
           }
          }
       
         }
         var nguongioithieu=response.data.nguongioithieu.replaceAll('"', '').replaceAll('[', '').replaceAll(']', '')
         var arraynguongioithieu= nguongioithieu.split(',');
         var selectngt=document.getElementsByClassName("nguongioithieuitem")
         
         for(var i = 0; i < selectngt.length; i++) {
          var datagt=selectngt[i].value;
          for( var j=0; j < arraynguongioithieu.length; j++)
          {
           if(datagt==arraynguongioithieu[j])
           {
            selectngt[j].setAttribute('checked', true);
           }
          }
       
         }
         this.setState({
            idupdate: response.data.ID,
            hoten: response.data.hoten,
            gioitinh: response.data.gioitinh,
            ngaysinh: response.data.ngaysinh,
            diachi: response.data.hoten,
            dienthoai: response.data.hoten,
            tiensubenh: response.data.hoten,
            gioithieu: response.data.hoten,
            dichvudieutri: response.data.hoten,
            nguongioithieu: response.data.hoten,
            danhgia: response.data.hoten,
            sosao: response.data.hoten,
            bacsidieutri: response.data.hoten,
            trangthai: response.data.trangthai,
            anhdaidien: response.data.anhdaidien,
            truocmatbefore: response.data.truocmatbefore,
            hamtrenbefore: response.data.hamtrenbefore,
            hamduoibefore: response.data.hamduoibefore,
            truocmatafter: response.data.truocmatafter,
            hamtrenafter: response.data.hamtrenafter,
            hamduoiafter: response.data.hamduoiafter
        })
    })
  
  }
  getTenBacSi(idbacsi,idcol)
  {
    axios.get('/index.php/api/bacsitheoid/'+idbacsi).then(response => {
      document.getElementById("coltenbacsi"+idcol).innerHTML=response.data.ten
    })
  }
  getTrangThai(idtrangthai,idcol)
  {
   
   
 
  }
  render () {
    
const { khachhanglist } = this.state
const { nguongioithieulist } = this.state;
const { tiensubenhlist } = this.state;
const { dichvulist } = this.state;
const { bacsilist } = this.state;
    return (
        <div>
        <div className="row el-element-overlay">
        
         
         
        </div>
        <div className="row">
                    <div className="col-lg-12">
                        <div className="white-box">
                            <h3 className="box-title m-b-0">Danh sách khách hàng</h3>
                            <p className="text-muted m-b-20"></p>
                            <table className="table-bordered table-hover table tabletextsmall">
                                <thead>
                                    <tr>
                                        <th>MSKH</th>
                                        <th>Hình đại diện khách</th>
                                        <th>Họ và tên</th>
                                        <th>Ngày sinh</th>
                                        <th>Ngày tạo hồ sơ</th>
                                      
                                        <th>Lý do điều trị</th>
                                       
                                        <th>Bác sĩ điều trị</th>
                                        <th>Trạng thái</th>
                                        <th className="icon-list-demo btnthemele"><button type="button" className="btn btn-block  btn-primary" data-toggle="modal" data-target="#exampleModal" data-whatever="@mdo"><i className="fa fa-plus"></i></button></th>
                                    </tr>
                                </thead>
                                <tbody>
                                {khachhanglist.map(dv => (
                                    <tr key={dv.ID}>
                                        <td className="title"><a href="#" onClick={e => e.preventDefault()}>{dv.ID}</a></td>
                                        <td> <img src={'./public/uploads/customer/'+dv.anhdaidien}  width='70px' height='70px'/></td>
                                        <td><Link to={'/ho-so-khach-hang/'+dv.ID} key={dv.ID} className="btn default btn-outline" >{dv.hoten}</Link>
                                        {(() => {
        if (dv.sosao==="0") {
          return (
            <button className="btn btn-block btn-default">Khách vãng lai làm dịch vụ khác</button>
          )
        } else if (dv.sosao==="1") {
          return (
            <button className="btn btn-block btn-default">Khách làm dịch vụ khác</button>
          )
        } else if (dv.sosao==="2") {
          return (
            <button className="btn btn-block btn-danger">Khách vãng lai không đồng ý</button>
          )
        } else if (dv.sosao==="3") {
          return (
            <button className="btn btn-block btn-success">Khách vãng lai đồng ý</button>
          )
        } else if (dv.sosao==="4") {
          return (
            <button className="btn btn-block btn-danger">Khách không làm</button>
          )
        } else {
          return (
            <button className="btn btn-block btn-success">Khách đồng ý</button>
          )
        }
      })()}
                                      
                                        </td>
                                        <td>{dv.ngaysinh}</td>
                                <td id={'nguonuser'+dv.ID}>{dv.created_at}</td>
                               
                                        <td>{dv.gioithieu}</td>
                                       
                                        <td id={"coltenbacsi"+dv.ID}>{this.getTenBacSi(dv.bacsidieutri,dv.ID)}</td>
                                        {(() => {
        if (dv.trangthai==="0") {
          return (
            <button className="btn btn-block btn-warning">Đặt hẹn</button>
          )
        } else if (dv.trangthai==="1") {
          return (
            <button className="btn btn-block btn-success">Đã đến</button>
           
          )
        } else {
          return (
            <button className="btn btn-block btn-danger">Không đến</button>
          )
        }
      })()}
                                      
                                        <td className="btnaction">
                                        <button data-idkhachhang={dv.ID} onClick={this.handleDeleteCustomer} className="icon-list-demo btn btn-danger btn-circle btn-xl" >
                    <i className="fa fa-trash-o" data-idkhachhang={dv.ID}></i>
                  </button>
                  <button className="icon-list-demo btn btn-info btn-circle btn-xl" data-idkhachhang={dv.ID} data-toggle="modal" data-target="#exampleModal1" data-whatever="@mdo">
                  <Link to={'/ho-so-khach-hang/'+dv.ID} key={dv.ID} className="btn-outline" ><i className="fa fa-external-link"></i></Link> 
                  </button>
                         </td>
                                    </tr>
                                    ))}
                                  
                                </tbody>
                            </table>
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
                          <ul id="updatedichvu" className="icheck-list popupchecklist">
                          {dichvulist.map(dv => (
 <li key={dv.id}>
 <input type="checkbox" name="dichvudieutri"  className="dichvuitem"  data-checkbox="icheckbox_flat-red"  value={dv.id} onChange={this.handleFieldChange} />
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
                  <button type="submit" className="btn btn-success"> <i className="fa fa-check" /> Lưu</button>
     
                </div>
                </form>
        </div>
       
      </div>
    </div>
  </div>
  <div className="modal fade" id="exampleModal" tabIndex={-1} role="dialog" aria-labelledby="exampleModalLabel1">
    <div className="modal-dialog popmodalwidth" role="document">
      <div className="modal-content">
        <div className="modal-header">
          <button type="button" className="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">×</span></button>
          <h4 className="modal-title" id="exampleModalLabel1">Thêm Thông Tin Cơ Bản</h4> </div>
        <div className="modal-body">
        <form encType="multipart/form-data"  onSubmit={this.handleCreateThongTin} >
                  <div className="form-body">
                  
                    <div className="row">
                      <div className="col-md-6">
                        <div className="form-group">
                          <label className="control-label">Họ và Tên</label>
                          <input name="hoten" type="text" id="hoten" className="form-control" 
                          onChange={this.handleFieldChange} placeholder="Nguyễn Văn" /> <span className="help-block"> </span> 
                       
                          </div>
                         
                      </div>
                      <div className="col-md-6">
                        <div className="form-group">
                          <label className="control-label">Bác sĩ điều trị</label>
                          <select name="bacsidieutri" 
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
                          <select name="gioitinh" 
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
                          <input name="ngaysinh" 
                          onChange={this.handleFieldChange} type="text" id="date-range" className="form-control" placeholder="dd/mm/yyyy" /> </div>
                      </div>
                      {/*/span*/}
                    </div>
                    <div className="row">
                      <div className="col-md-6">
                        <div className="form-group">
                          <label className="control-label">Địa chỉ</label>
                          <input name="diachi" 
                          onChange={this.handleFieldChange} type="text" id="diachi" className="form-control" placeholder="địa chỉ nhà" /> <span className="help-block"></span> </div>
                      </div>
                      {/*/span*/}
                      <div className="col-md-6">
                        <div className="form-group">
                          <label className="control-label">Điện Thoại</label>
                          <input name="dienthoai" 
                          onChange={this.handleFieldChange} type="text" id="phone" className="form-control" placeholder="0989228480" /> <span className="help-block"></span> </div>
                      </div>
                      {/*/span*/}
                    </div>
                    {/*/row*/}
                    <div className="row">
                        <div className="col-md-12">
                          <div className="form-group">
                          <label htmlFor="gioi-thieu-ex">Nhu cầu thăm khám</label>
    <textarea className="form-control" 
                          onChange={this.handleFieldChange} id="gioi-thieu-ex" rows="4" name="gioithieu"></textarea>
                          </div>
                        </div>
                    </div>
                    <div className="row">
                      <div className="col-md-6">
                        <div className="form-group">
                          <label className="control-label">Trạng thái khách đến</label>
                          <select name="sosao" 
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
                          <select name="trangthai" 
                          onChange={this.handleFieldChange} className="form-control">
							<option value="99"  checked>Chọn trạng đặt hẹn</option>
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
                        <ul className="icheck-list popupchecklist">
                          {tiensubenhlist.map(ts => (
 <li key={ts.id}>
 <input type="checkbox" name="tiensubenh" id={'flat-checkbox-'+ts.id} 
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
                          <ul className="icheck-list popupchecklist">
                          {dichvulist.map(dv => (
 <li key={dv.id}>
 <input type="checkbox" name="dichvudieutri" id={'flat-checkbox-dv'+dv.id}  data-checkbox="icheckbox_flat-red"  value={dv.id} onChange={this.handleFieldChange} />
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
                          onChange={this.handleFieldChange}  name="nguongioithieu" id={'radionguon'+nguon.id}  />
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
                          <div className="fallback">
                            <input className="form-control" name="anhdaidien" accept="image/*" type="file" onChange={this.handleFieldChange} /> </div>
                        </div>
                      </div>
                    </div>
                  
                    <div className="row">
    
                      <div className="col-md-4">
                        <div className="white-box">
                           
                          <h3 className="box-title m-b-0">Trước mặt trước khi làm </h3>
                          
                            <div className="fallback">
                              <input className="form-control" name="truocmatbefore" accept="image/*" type="file" onChange={this.handleFieldChange} /> </div>
                        
                        </div>
                      </div>
                      <div className="col-md-4">
                        <div className="white-box">
                          <h3 className="box-title m-b-0">Hàm trái trước khi làm </h3>
                         
                            <div className="fallback">
                              <input className="form-control" name="hamtrenbefore" accept="image/*" type="file" onChange={this.handleFieldChange} /> </div>
                         
                        </div>
                      </div>
                      <div className="col-md-4">
                        <div className="white-box">
                          <h3 className="box-title m-b-0">Hàm phải trước khi làm </h3>
                         
                            <div className="fallback">
                              <input className="form-control" name="hamduoibefore" accept="image/*" type="file" onChange={this.handleFieldChange} /> </div>
                         
                        </div>
                      </div>
                    </div>
                    <div className="row">
          
                      <div className="col-md-4">
                        <div className="white-box">
                          <h3 className="box-title m-b-0">Trước mặt sau khi làm</h3>
                          
                            <div className="fallback">
                              <input className="form-control" name="truocmatafter" accept="image/*" type="file" onChange={this.handleFieldChange} /> </div>
                        
                        </div>
                      </div>
                      <div className="col-md-4">
                        <div className="white-box">
                          <h3 className="box-title m-b-0">Hàm trái sau khi làm</h3>
                         
                            <div className="fallback">
                              <input className="form-control" name="hamtrenafter" accept="image/*" type="file" onChange={this.handleFieldChange} /> </div>
                         
                        </div>
                      </div>
                      <div className="col-md-4">
                        <div className="white-box">
                          <h3 className="box-title m-b-0">Hàm phải sau khi làm</h3>
                         
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
      </div>
    )
  }
}

export default AllCustomer