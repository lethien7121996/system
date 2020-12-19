import React, { Component } from 'react'
import { Link } from 'react-router-dom'


class DashBoard extends Component {
  
  componentDidMount() {
    const scripts = [
      './app_assets/plugins/bower_components/raphael/raphael-min.js',
      './app_assets/plugins/bower_components/morrisjs/morris.js',
      './app_assets/js/dashboard1.js',
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
  componentWillMount() {
    const scripts = [
      './public/app_assets/plugins/bower_components/raphael/raphael-min.js',
      './public/app_assets/plugins/bower_components/morrisjs/morris.js',
      './public/app_assets/js/dashboard1.js',
  ];
  const scripttag = document.getElementById("tagscripts");
  scripttag.innerHTML = '';
  scripts.forEach(s => {
    const script = document.createElement("script");
    script.type = 'text/javascript';
    script.src = s;
    script.async = false
    scripttag.appendChild(script);
  })

    
  }
  render () {
  
    return (
     
        <div>
          
        <div className="row">
          <div className="col-md-3 col-sm-6">
            <div className="white-box">
              <div className="r-icon-stats"> <i className="ti-user bg-megna" />
                <div className="bodystate">
                  <h4>370</h4> <span className="text-muted">Khách hàng mới</span> </div>
              </div>
            </div>
          </div>
          <div className="col-md-3 col-sm-6">
            <div className="white-box">
              <div className="r-icon-stats"> <i className="ti-shopping-cart bg-info" />
                <div className="bodystate">
                  <h4>342</h4> <span className="text-muted">Đang điều trị</span> </div>
              </div>
            </div>
          </div>
          <div className="col-md-3 col-sm-6">
            <div className="white-box">
              <div className="r-icon-stats"> <i className="ti-wallet bg-success" />
                <div className="bodystate">
                  <h4>13</h4> <span className="text-muted">Lịch hẹn hôm nay</span> </div>
              </div>
            </div>
          </div>
          <div className="col-md-3 col-sm-6">
            <div className="white-box">
              <div className="r-icon-stats"> <i className="ti-wallet bg-inverse" />
                <div className="bodystate">
                  <h4>34650 VNĐ</h4> <span className="text-muted">Doanh thu tổng</span> </div>
              </div>
            </div>
          </div>
        </div>
        {/*/row */}
        {/* .row */}
        <div className="row">
          <div className="col-md-4 col-sm-12 col-xs-12">
            <div className="white-box">
              <h3 className="box-title"><small className="pull-right m-t-10 text-success"><i className="fa fa-sort-asc" /> 18% cao so với tháng trước</small> Khách hàng mới</h3>
              <div className="stats-row">
                <div className="stat-item">
                  <h6>Tổng quan</h6> <b>80.40%</b></div>
                <div className="stat-item">
                  <h6>Tháng</h6> <b>15.40%</b></div>
                <div className="stat-item">
                  <h6>Ngày</h6> <b>5.50%</b></div>
              </div>
              <div id="sparkline8" className="minus-mar" />
            </div>
          </div>
          <div className="col-md-4 col-sm-12 col-xs-12">
            <div className="white-box">
              <h3 className="box-title"><small className="pull-right m-t-10 text-danger"><i className="fa fa-sort-desc" /> Giảm 18% so với tháng trước</small>Khách hàng tháng</h3>
              <div className="stats-row">
                <div className="stat-item">
                  <h6>Tổng quan</h6> <b>80.40%</b></div>
                <div className="stat-item">
                  <h6>Tháng</h6> <b>15.40%</b></div>
                <div className="stat-item">
                  <h6>Ngày</h6> <b>5.50%</b></div>
              </div>
              <div id="sparkline9" className="minus-mar" />
            </div>
          </div>
          <div className="col-md-4 col-sm-12 col-xs-12">
            <div className="white-box">
              <h3 className="box-title"><small className="pull-right m-t-10 text-success"><i className="fa fa-sort-asc" /> 18% cao so với tháng trước</small>Khách hàng lẻ</h3>
              <div className="stats-row">
                <div className="stat-item">
                  <h6>Tổng quan tăng trưởng</h6> <b>80.40%</b></div>
                <div className="stat-item">
                  <h6>Tháng</h6> <b>15.40%</b></div>
                <div className="stat-item">
                  <h6>Ngày</h6> <b>5.50%</b></div>
              </div>
              <div id="sparkline10" className="minus-mar" />
            </div>
          </div>
        </div>
        {/* /.row */}
        {/*row */}
        <div className="row">
          <div className="col-md-6 col-lg-6 col-sm-12 col-xs-12">
            <div className="white-box">
              <h3 className="box-title">Khách hàng sử dụng dịch vụ</h3>
              <ul className="list-inline text-center">
                <li>
                  <h5><i className="fa fa-circle m-r-5" style={{color: '#00bfc7'}} />Khách hàng gói tháng</h5> </li>
                <li>
                  <h5><i className="fa fa-circle m-r-5" style={{color: '#b4becb'}} />Khách hàng lẻ</h5> </li>
              </ul>
              <div id="morris-area-chart1" style={{height: '370px'}} />
            </div>
          </div>
          <div className="col-md-6 col-lg-6 col-sm-12 col-xs-12">
            <div className="white-box">
              <h3 className="box-title">Doanh thu phòng khám</h3>
              <ul className="list-inline text-center">
                <li>
                  <h5><i className="fa fa-circle m-r-5" style={{color: '#00bfc7'}} />Khách hàng gói tháng</h5> </li>
                <li>
                  <h5><i className="fa fa-circle m-r-5" style={{color: '#b4becb'}} />Khách hàng lẻ</h5> </li>
              </ul>
              <div id="morris-area-chart2" style={{height: '370px'}} />
            </div>
          </div>
        </div>
        {/* row */}
        {/* /row */}
        <div className="row">
          <div className="col-sm-12">
            <div className="white-box">
              <h3 className="box-title m-b-0">Danh sách khách hàng mới</h3>
              <p className="text-muted" />
              <div className="table-responsive">
                <table className="table">
                  <thead>
                    <tr>
                      <th>#</th>
                      <th>Họ</th>
                      <th>Tên</th>
                      <th>Số điện thoại</th>
                      <th>Loại dịch vụ</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>1</td>
                      <td>Nguyễn</td>
                      <td>Văn Thi</td>
                      <td>0987234567</td>
                      <td><span className="label label-danger">Tẩy trắng răng</span> </td>
                    </tr>
                    <tr>
                      <td>2</td>
                      <td>Lê</td>
                      <td>Tấn Sinh</td>
                      <td>0989234567</td>
                      <td><span className="label label-info">Cạo vôi răng</span> </td>
                    </tr>
                    <tr>
                      <td>3</td>
                      <td>Phạm</td>
                      <td>Gusikowski</td>
                      <td>0123456789</td>
                      <td><span className="label label-warning">Cấy ghép Implant</span> </td>
                    </tr>
                    <tr>
                      <td>4</td>
                      <td>Đỗ</td>
                      <td>Hữu Đan</td>
                      <td>0988345678</td>
                      <td><span className="label label-success">Cạo vôi răng</span> </td>
                    </tr>
                    <tr>
                      <td>5</td>
                      <td>Lê</td>
                      <td>Anh Hào</td>
                      <td>0989228480</td>
                      <td><span className="label label-info">Cấy ghép Implant</span> </td>
                    </tr>
                    <tr>
                      <td>6</td>
                      <td>Huỳnh</td>
                      <td>Văn A</td>
                      <td>0345678901</td>
                      <td><span className="label label-success">Tẩy trắng răng</span> </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
     
      </div>
      
    )
  }
}

export default DashBoard