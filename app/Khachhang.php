<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Khachhang extends Model
{
    protected $table = 'khachhang';
    protected $fillable = ['hoten', 'gioitinh', 'ngaysinh', 'diachi', 'dienthoai', 'tiensubenh', 'gioithieu', 'dichvudieutri', 'nguongioithieu', 'anhdaidien', 'truocmatbefore', 'hamtrenbefore', 'hamduoibefore', 'truocmatafter', 'hamtrenafter', 'hamduoiafter', 'danhgia', 'sosao', 'bacsidieutri', 'trangthai'];
}
