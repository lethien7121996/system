<?php



/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});

Route::get('nguongioithieu', 'NguonGioiThieuController@index');

	 Route::get('phieuchi', 'PhieuChiController@index');
Route::post('phieuchi', 'PhieuChiController@store');
Route::get('phieuchidelete/{id}', 'PhieuChiController@destroy');
Route::post('phieuchiupdate/{id}', 'PhieuChiController@update');
Route::post('phieuchixemngay', 'PhieuChiController@loctheongay');



Route::get('dichvusanpham', 'SanPhamDichVuController@index');
Route::post('dichvusanpham', 'SanPhamDichVuController@store');
Route::get('dichvusanphamdelete/{id}', 'SanPhamDichVuController@destroy');
Route::post('dichvusanphamupdate/{id}', 'SanPhamDichVuController@update');
Route::post('danhsachdichvu', 'SanPhamDichVuController@sanphamdichvutheonguoidung');
Route::get('sanphamdichvutheoid/{id}', 'SanPhamDichVuController@sanphamdichvutheoid');

Route::get('donthuoc', 'DonThuocController@index');
Route::post('donthuoc', 'DonThuocController@store');
Route::get('donthuoc/{id}', 'DonThuocController@show');
Route::get('donthuocdelete/{id}', 'DonThuocController@destroy');
Route::get('donthuoctheokhachhang/{id}', 'DonThuocController@donthuoctheokhachhang');
Route::post('donthuocupdate/{id}', 'DonThuocController@update');

Route::get('chandoan', 'ChanDoanCacLoaiController@index');
Route::post('chandoan', 'ChanDoanCacLoaiController@store');
Route::get('chandoandelete/{id}', 'ChanDoanCacLoaiController@destroy');
Route::post('chandoanupdate/{id}', 'ChanDoanCacLoaiController@update');

Route::get('tiensubenh', 'TienSuBenhController@index');
Route::post('tiensubenh', 'TienSuBenhController@store');
Route::get('tiensubenhdelete/{id}', 'TienSuBenhController@destroy');
Route::post('tiensubenhupdate/{id}', 'TienSuBenhController@update');

Route::get('labocongty', 'LaboCongTyController@index');
Route::post('labocongty', 'LaboCongTyController@store');
Route::get('labocongtydelete/{id}', 'LaboCongTyController@destroy');
Route::post('labocongtyupdate/{id}', 'LaboCongTyController@update');
Route::get('chitietlabocongty/{id}', 'LaboCongTyController@chitietlabocongty');

Route::get('labocongviec', 'LaboCongViecController@index');
Route::post('labocongviec', 'LaboCongViecController@store');
Route::get('labocongviecdelete/{id}', 'LaboCongViecController@destroy');
Route::post('labocongviecupdate/{id}', 'LaboCongViecController@update');
Route::get('chitietlabocongviec/{id}', 'LaboCongViecController@chitietlabocongviec');

Route::get('tiensubenh', 'TienSuBenhController@index');
Route::post('tiensubenh', 'TienSuBenhController@store');
Route::get('tiensubenhdelete/{id}', 'TienSuBenhController@destroy');
Route::post('tiensubenhupdate/{id}', 'TienSuBenhController@update');
Route::post('danhsachtiensubenh', 'TienSuBenhController@tiensubenhtheonguoidung');

Route::get('nguongioithieu', 'NguonGioiThieuController@index');
Route::post('nguongioithieu', 'NguonGioiThieuController@store');
Route::get('nguongioithieudelete/{id}', 'NguonGioiThieuController@destroy');
Route::post('nguongioithieuupdate/{id}', 'NguonGioiThieuController@update');
Route::get('nguongioithieudetail/{id}', 'NguonGioiThieuController@xemchitiet');

Route::get('dichvu', 'DichVuDieuTriController@index');
Route::post('dichvu', 'DichVuDieuTriController@store');
Route::get('dichvudelete/{id}', 'DichVuDieuTriController@destroy');
Route::post('dichvuupdate/{id}', 'DichVuDieuTriController@update');
Route::get('dichvudetail/{id}', 'DichVuDieuTriController@xemchitiet');
Route::post('danhsachdichvu', 'DichVuDieuTriController@dichvutheonguoidung');

Route::get('nhomkhachhang', 'NhomKhachHangController@index');
Route::post('nhomkhachhang', 'NhomKhachHangController@store');
Route::get('nhomkhachhangdelete/{id}', 'NhomKhachHangController@destroy');
Route::post('nhomkhachhangupdate/{id}', 'NhomKhachHangController@update');
Route::get('tennhomkhachhang/{id}', 'NhomKhachHangController@tennhomkhachhang');

Route::get('thuoc', 'ThuocDuocPhamController@index');
Route::post('thuoc', 'ThuocDuocPhamController@store');
Route::get('thuocdelete/{id}', 'ThuocDuocPhamController@destroy');
Route::post('thuocupdate/{id}', 'ThuocDuocPhamController@update');
Route::get('laytenthuoc/{id}', 'ThuocDuocPhamController@gettenthuoc');

Route::get('dungcu', 'DungCuVatLieuController@index');
Route::post('dungcu', 'DungCuVatLieuController@store');
Route::get('dungcudelete/{id}', 'DungCuVatLieuController@destroy');
Route::post('dungcuupdate/{id}', 'DungCuVatLieuController@update');

Route::get('chuongtrinh', 'ChuongTrinhKhuyenMaiController@index');
Route::post('chuongtrinh', 'ChuongTrinhKhuyenMaiController@store');
Route::get('chuongtrinhdelete/{id}', 'ChuongTrinhKhuyenMaiController@destroy');
Route::post('chuongtrinhupdate/{id}', 'ChuongTrinhKhuyenMaiController@update');
Route::get('chuongtrinh/{id}', 'ChuongTrinhKhuyenMaiController@show');

Route::get('phieudieutri', 'PhieuDieuTriController@index');
Route::post('phieudieutri', 'PhieuDieuTriController@store');
Route::get('phieudieutridelete/{id}', 'PhieuDieuTriController@destroy');
Route::post('phieudieutriupdate/{id}', 'PhieuDieuTriController@update');
Route::get('phieudieutri/{id}', 'PhieuDieuTriController@show');
Route::get('phieudieutrikhachhang/{id}', 'PhieuDieuTriController@indexkhachhang');

Route::get('ketquadieutri', 'KetQuaDieuTriController@index');
Route::post('ketquadieutri', 'KetQuaDieuTriController@store');
Route::get('ketquadieutridelete/{id}', 'KetQuaDieuTriController@destroy');
Route::post('ketquadieutriupdate/{id}', 'KetQuaDieuTriController@update');
Route::get('ketquadieutri/{id}', 'KetQuaDieuTriController@indexkhachhang');
Route::get('ketquadieutrikhachhang/{id}', 'KetQuaDieuTriController@indexkhachhang');
Route::get('ketquadieutriid/{id}', 'KetQuaDieuTriController@indexketqua');

Route::get('quatrinhdieutri', 'QuaTrinhDieuTriController@index');
Route::post('quatrinhdieutri', 'QuaTrinhDieuTriController@store');
Route::get('quatrinhdieutridelete/{id}', 'QuaTrinhDieuTriController@destroy');
Route::post('quatrinhdieutriupdate/{id}', 'QuaTrinhDieuTriController@update');
Route::get('quatrinhdieutri/{id}', 'QuaTrinhDieuTriController@indexkhachhang');
Route::get('quatrinhdieutrikhachhang/{id}', 'QuaTrinhDieuTriController@indexkhachhang');

Route::get('thongkenhap', 'ThongKeNhapController@index');
Route::post('thongkenhap', 'ThongKeNhapController@store');
Route::post('thongkeupdate/{id}', 'ThongKeNhapController@update');
Route::get('thongkenhapdelete/{id}', 'ThongKeNhapController@destroy');
Route::get('thongkenhapchitiet/{id}', 'ThongKeNhapController@show');
Route::post('thongkenhapxemngay', 'ThongKeNhapController@loctheongay');
Route::post('thongkenhapdungcu', 'ThongKeNhapController@locdungcu');
Route::get('thongkenhaptongcong', 'ThongKeNhapController@tongcong');
Route::get('thongkenhapdatra', 'ThongKeNhapController@datra');
Route::get('thongkenhapconlai', 'ThongKeNhapController@conlai');

Route::get('tongsotienchi', 'PhieuChiController@tinhtong');
Route::get('tiensubenh', 'TienSuBenhController@index');



Route::post('doctor', 'DoctorController@store');
Route::get('doctor', 'DoctorController@index');
Route::get('doctordelete/{id}', 'DoctorController@destroy');
Route::get('bacsitheoid/{id}', 'DoctorController@bacsitheoid');

Route::post('lichlamviec', 'ThoiGianBieuController@store');
Route::get('lichlamviec', 'ThoiGianBieuController@index');
Route::get('lichlamviecdelete/{id}', 'ThoiGianBieuController@destroy');
Route::post('lichlamviecupdate/{id}', 'ThoiGianBieuController@update');
Route::get('lichlamviecchitiet/{id}', 'ThoiGianBieuController@lichlamviecchitiet');
Route::get('deletelichlamviec/{id}', 'ThoiGianBieuController@destroy');
Route::get('lichlamviectheokhachhang/{id}', 'ThoiGianBieuController@lichlamvieckhachhang');

Route::get('customers', 'KhachhangController@index');
Route::post('customers', 'KhachhangController@store');
Route::post('customers/{id}', 'KhachhangController@update');
Route::get('customersdelete/{id}', 'KhachhangController@xoakhachhang');
Route::get('chitietkhachhang/{id}', 'KhachhangController@chitietkhachhang');

Route::get('projects', 'ProjectController@index');
Route::post('signup', 'FrontEndUserController@signUp');
Route::post('projects', 'ProjectController@store');
Route::get('projects/{id}', 'ProjectController@show');
Route::put('projects/{project}', 'ProjectController@markAsCompleted');
Route::post('tasks', 'TaskController@store');
Route::put('tasks/{task}', 'TaskController@markAsCompleted');