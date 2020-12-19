<?php

namespace App\Http\Controllers;
use App\Thoigianbieu;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
class ThoiGianBieuController extends Controller
{
    public function index()
    {
        $thoigianbieu = Thoigianbieu::all();
                                 

        return $thoigianbieu->toJson();
    }
    public function store(Request $request)
    {
           
          $thoigianbieu = Thoigianbieu::create([
            'idkhachhang' => $request->idkhachhang,
            'dichvu' => $request->dichvu,
            'trangthai' => $request->trangthai,
            'ghichu' => $request->ghichu,
            'start' => $request->start,
            'end' => $request->end,
            'idbacsi' => $request->idbacsi,
          ]);
     
      return response()->json('Thời gian biểu đã tạo created!');
    }
    public function lichlamviecchitiet($id)
    {
      $thoigianbieu = Thoigianbieu::find($id);
      return $thoigianbieu->toJson();
    }
    public function lichlamvieckhachhang($id)
    {
      $thoigianbieu = DB::table('lichhen')->where("idkhachhang",'=',$id)->get();
      return $thoigianbieu->toJson();
    }
    public function update(Request $request, $id)
    {
        $thoigianbieu = Thoigianbieu::find($id);
        $thoigianbieu->idkhachhang = $request->get('idkhachhang');
        $thoigianbieu->dichvu = $request->get('dichvu');
        $thoigianbieu->trangthai = $request->get('trangthai');
        $thoigianbieu->ghichu = $request->get('ghichu');
        $thoigianbieu->start = $request->get('start');
        $thoigianbieu->end = $request->get('end');
        $thoigianbieu->idbacsi = $request->get('idbacsi');
        $thoigianbieu->save();

        return response()->json('Successfully Updated');
    }
    public function destroy($id)
    {
      
      $thoigianbieu = Thoigianbieu::find($id);
      $thoigianbieu->delete();

      return response()->json('Successfully Deleted');
    }
}
