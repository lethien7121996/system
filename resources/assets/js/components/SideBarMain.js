import React from 'react'
import { Link } from 'react-router-dom'

    const SideBarMain = () => (
        <div className="navbar-default sidebar" role="navigation">
        <div className="sidebar-nav navbar-collapse slimscrollsidebar">
          <ul className="nav" id="side-menu">
            <li className="sidebar-search hidden-sm hidden-md hidden-lg">
              {/* input-group */}
              <div className="input-group custom-search-form">
                <input type="text" className="form-control" placeholder="Search..." /> <span className="input-group-btn">
                  <button className="btn btn-default" type="button"> <i className="fa fa-search" /> </button>
                </span> </div>
              {/* /input-group */}
            </li>
            <li className="user-pro">
            <Link to='/tong-quan' className="waves-effect"><img src="./public/app_assets/plugins/images/users/d1.jpg" alt="user-img" className="img-circle" /> <span className="hide-menu">Thanh Sang<span className="" /></span>
              </Link>
            
            </li>
            <li className="nav-small-cap m-t-10">--- Menu Chính</li>
            <li> <Link to='/tong-quan' className="waves-effect"><i className="ti-dashboard p-r-10" /> <span className="hide-menu">Tổng Quan</span></Link> </li>
            <li> <Link to='/tat-ca-khach-hang' className="waves-effect"><i className="icon-people p-r-10" /> <span className="hide-menu"> Khách hàng </span></Link>
         
            </li>
            <li> <Link to='/tat-ca-bac-si' className="waves-effect"><i className="fa fa-user-md p-r-10" /> <span className="hide-menu"> Bác sĩ</span></Link>
             
            </li>
            <li> <Link to='/lich-hen-bac-si' id="lichhenrender" className="waves-effect"><i className="ti-calendar p-r-10" /> <span className="hide-menu"> Lịch hẹn</span> </Link>
            
            </li>
            <li> <a href="#" onClick={e => e.preventDefault()}  className="waves-effect"><i className="ti-dashboard p-r-10" /> <span className="hide-menu">Thiết lập hệ thống<span className="fa arrow" /></span></a> 
            <ul className="nav nav-second-level">
            <li> <Link to='/thiet-lap-chan-doan'>Thiết lập chẩn đoán</Link></li>
                <li> <Link to='/thiet-lap-dich-vu'>Thiết lập dịch vụ</Link> </li>
                <li> <Link to='/thiet-lap-dieu-tri'>Thiết lập điều trị</Link> </li>
              
               
                <li> <Link to='/thiet-lap-nguon-gioi-thieu'>Thiết lập giới thiệu</Link></li>
                <li> <Link to='/thiet-lap-tien-su-benh'>Thiết lập tiền sử bệnh</Link></li>
     
    
              </ul>
            </li>
          </ul>
        </div>
      </div>
      
    )

    export default SideBarMain