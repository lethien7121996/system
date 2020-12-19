<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Thoigianbieu extends Model
{
    protected $table = 'lichhen';
    protected $fillable = ['idkhachhang', 'dichvu', 'trangthai', 'ghichu', 'start', 'end', 'idbacsi'];
}
