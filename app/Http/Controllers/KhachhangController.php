<?php

namespace App\Http\Controllers;
use App\Khachhang;
use App\Http\Requests;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\File;
use Illuminate\Support\Facades\DB;

class KhachhangController extends Controller
{
    public function index()
    {
        $customer = Khachhang::all();

        return $customer->toJson();
    }
    public function store(Request $request)
    {
      
      $path = 'uploads\customer';
      $imageName="";
      $imagetruocmatbefore="";      
      $imagehamduoibefore="";  
      $imagetruocmatafter="";  
      $imagehamtrenafter="";  
      $imagehamduoiafter="";  
      if ($request->anhdaidien){
        $image_64 =  $request->anhdaidien;
        
        $extension = explode('/', explode(':', substr($image_64, 0, strpos($image_64, ';')))[1])[1];   // .jpg .png .pdf

        $replace = substr($image_64, 0, strpos($image_64, ',')+1); 
      
      // find substring fro replace here eg: data:image/png;base64,
      
       $image = str_replace($replace, '', $image_64); 
      
       $image = str_replace(' ', '+', $image); 
      
       $imageName = "anhdaidien-".str_random(10).'.'.$extension;
        \File::put(public_path(). '/uploads/customer/' .$imageName, base64_decode($image));        
      }
      else
      {
        $imageName="nonuser.jpg";
      }
      if ($request->hamduoi){
        $image_64hd =  $request->hamduoi;
        
        $extensionhd = explode('/', explode(':', substr($image_64hd, 0, strpos($image_64hd, ';')))[1])[1];   // .jpg .png .pdf

        $replacehd = substr($image_64hd, 0, strpos($image_64hd, ',')+1); 
      
      // find substring fro replace here eg: data:image/png;base64,
      
       $imagehd = str_replace($replacehd, '', $image_64hd); 
      
       $imagehd = str_replace(' ', '+', $imagehd); 
      
       $imageNamehd ="hamduoi-".str_random(10).'.'.$extensionhd;
        \File::put(public_path(). '/uploads/customer/' . $imageNamehd, base64_decode($imagehd));        
      }
      else
      {
        $imageNamehd="nonuser.jpg";
      }
        // UP ẢNH TRƯỚC MẶT BEFORE
        if ($request->truocmatbefore){
          $image_64tmbf =  $request->truocmatbefore;
          
          $extensiontmbf = explode('/', explode(':', substr($image_64tmbf, 0, strpos($image_64tmbf, ';')))[1])[1];   // .jpg .png .pdf
  
          $replacetmbf = substr($image_64tmbf, 0, strpos($image_64tmbf, ',')+1); 
        
        // find substring fro replace here eg: data:image/png;base64,
        
         $imagetmbf = str_replace($replacetmbf, '', $image_64tmbf); 
        
         $imagetmbf = str_replace(' ', '+', $imagetmbf); 
        
         $imagetruocmatbefore ="hamtren-".str_random(10).'.'.$extensiontmbf;
          \File::put(public_path(). '/uploads/customer/' .$imagetruocmatbefore , base64_decode($imagetmbf));        
        }
        else
        {
          $imagetruocmatbefore ="nonuser.jpg";
        }
      // UP ẢNH HÀM TRÊN BEFORE
      if ($request->hamtrenbefore){
        $image_64htbf =  $request->hamtrenbefore;
        
        $extensionhtbf = explode('/', explode(':', substr($image_64htbf, 0, strpos($image_64htbf, ';')))[1])[1];   // .jpg .png .pdf

        $replacehtbf = substr($image_64htbf, 0, strpos($image_64htbf, ',')+1); 
      
      // find substring fro replace here eg: data:image/png;base64,
      
       $imagehtbf = str_replace($replacehtbf, '', $image_64htbf); 
      
       $imagehtbf = str_replace(' ', '+', $imagehtbf); 
      
       $imagehamtrenbefore ="hamtren-".str_random(10).'.'.$extensionhtbf;
        \File::put(public_path(). '/uploads/customer/' .$imagehamtrenbefore, base64_decode($imagehtbf));        
      }
      else
      {
        $imagehamtrenbefore="nonuser.jpg";
      }
      // UP ẢNH HÀM DƯỚI BEFORE
      if ($request->hamduoibefore){
        $image_64hdbf =  $request->hamduoibefore;
        
        $extensionhdbf = explode('/', explode(':', substr($image_64hdbf, 0, strpos($image_64hdbf, ';')))[1])[1];   // .jpg .png .pdf

        $replacehdbf = substr($image_64htbf, 0, strpos($image_64hdbf, ',')+1); 
      
      // find substring fro replace here eg: data:image/png;base64,
      
       $imagehdbf = str_replace($replacehdbf, '', $image_64hdbf); 
      
       $imagehdbf = str_replace(' ', '+', $imagehdbf); 
      
       $imagehamduoibefore ="hamtren-".str_random(10).'.'.$extensionhdbf;
        \File::put(public_path(). '/uploads/customer/' .$imagehamduoibefore , base64_decode($imagehdbf));        
      }
      else
      {
        $imagehamduoibefore ="nonuser.jpg";
      }
      // UP ẢNH TRƯỚC MẶT AFTER
      if ($request->truocmatafter){
        $image_64tmat =  $request->truocmatafter;
        
        $extensiontmat = explode('/', explode(':', substr($image_64tmat, 0, strpos($image_64tmat, ';')))[1])[1];   // .jpg .png .pdf

        $replacetmat = substr($image_64tmat, 0, strpos($image_64tmat, ',')+1); 
      
      // find substring fro replace here eg: data:image/png;base64,
      
       $imagetmat = str_replace($replacetmat, '', $image_64tmat); 
      
       $imagetmat = str_replace(' ', '+', $imagetmat); 
      
       $imagetruocmatafter ="hamtren-".str_random(10).'.'.$extensiontmat;
        \File::put(public_path(). '/uploads/customer/' .$imagetruocmatafter , base64_decode($imagetmat));        
      }
      else
      {
        $imagetruocmatafter ="nonuser.jpg";
      }
      // UP ẢNH HÀM TRÊN AFTER
      if ($request->hamtrenafter){
        $image_64htat =  $request->hamtrenafter;
        
        $extensionhtat = explode('/', explode(':', substr($image_64htat, 0, strpos($image_64htat, ';')))[1])[1];   // .jpg .png .pdf

        $replacehtat = substr($image_64htat, 0, strpos($image_64htat, ',')+1); 
      
      // find substring fro replace here eg: data:image/png;base64,
      
       $imagehtat = str_replace($replacehtat, '', $image_64htat); 
      
       $imagehtat = str_replace(' ', '+', $imagehtat); 
      
       $imagehamtrenafter ="hamtren-".str_random(10).'.'.$extensionhtat;
        \File::put(public_path(). '/uploads/customer/' .$imagehamtrenafter , base64_decode($imagehtat));        
      }
      else
      {
        $imagehamtrenafter ="nonuser.jpg";
      }
      // UP ẢNH HÀM DƯỚI AFTER
      if ($request->hamduoiafter){
        $image_64hdat =  $request->hamduoiafter;
        
        $extensionhdat = explode('/', explode(':', substr($image_64hdat, 0, strpos($image_64hdat, ';')))[1])[1];   // .jpg .png .pdf

        $replacehdat = substr($image_64hdat, 0, strpos($image_64hdat, ',')+1); 
      
      // find substring fro replace here eg: data:image/png;base64,
      
       $imagehdat = str_replace($replacehdat, '', $image_64hdat); 
      
       $imagehdat = str_replace(' ', '+', $imagehdat); 
      
       $imagehamduoiafter ="hamtren-".str_random(10).'.'.$extensionhdat;
        \File::put(public_path(). '/uploads/customer/' .$imagehamduoiafter , base64_decode($imagehdat));        
      }
      else
      {
        $imagehamduoiafter ="nonuser.jpg";
      }
      $hoten = $request->hoten;
      $gioitinh = $request->gioitinh;
      $ngaysinh = $request->ngaysinh;
      $diachi = $request->diachi;
      $dienthoai = $request->dienthoai;
      $tiensubenh = $request->tiensubenh;
      $gioithieu = $request->gioithieu;
      $dichvudieutri = $request->dichvudieutri;
      $nguongioithieu = $request->nguongioithieu;
      $danhgia = $request->danhgia;
      $sosao = $request->sosao;
      $bacsidieutri = $request->bacsidieutri;
      $trangthai = $request->trangthai;
      $customer =  Khachhang::create([
        'hoten' => $hoten,
        'gioitinh' => $gioitinh,
        'ngaysinh' => $ngaysinh,
        'diachi' => $diachi,
        'dienthoai' => $dienthoai,
        'tiensubenh' => json_encode($tiensubenh),
        'gioithieu' => $gioithieu,
        'dichvudieutri' => json_encode($dichvudieutri),
        'nguongioithieu' => json_encode($nguongioithieu),
        'anhdaidien' => $imageName,
        'truocmatbefore' => $imagetruocmatbefore,
        'hamtrenbefore' => $imagehamtrenbefore,
        'hamduoibefore' =>$imagehamduoibefore,
        'truocmatafter' => $imagetruocmatafter,
        'hamtrenafter' => $imagehamtrenafter,
        'hamduoiafter' =>$imagehamduoiafter,
        'danhgia' => $danhgia,
        'sosao' => $sosao,
        'bacsidieutri' => $bacsidieutri,
        'trangthai' => $trangthai
      ]);
    return response()->json('Tạo thành công');
    }
    public function update(Request $request, $id)
    {
      $path = 'uploads\customer';
      
      $imageNameNew= $request->get('anhdaidien');
      if(strpos($imageNameNew, 'anhdaidien-') !== false || strpos($imageNameNew, 'nonuser') !== false) { 
        
      }
      else
      {
        $image_64 =  $request->get('anhdaidien');
        
        $extension = explode('/', explode(':', substr($image_64, 0, strpos($image_64, ';')))[1])[1];   // .jpg .png .pdf

        $replace = substr($image_64, 0, strpos($image_64, ',')+1); 
      
       $image = str_replace($replace, '', $image_64); 
      
       $image = str_replace(' ', '+', $image); 
      
       $imageNameNew = "anhdaidien-".str_random(10).'.'.$extension;
        \File::put(public_path(). '/uploads/customer/' .$imageNameNew, base64_decode($image));  
      }
      
      $imagetruocmatbefore= $request->get('truocmatbefore');      
      if(strpos($imagetruocmatbefore, 'hamtren-') !== false || strpos($imagetruocmatbefore, 'nonuser') !== false) { 
        
      }
      else
      {
        $image_64tmbf =  $request->get('truocmatbefore');
          
        $extensiontmbf = explode('/', explode(':', substr($image_64tmbf, 0, strpos($image_64tmbf, ';')))[1])[1];   // .jpg .png .pdf

        $replacetmbf = substr($image_64tmbf, 0, strpos($image_64tmbf, ',')+1); 
      
      // find substring fro replace here eg: data:image/png;base64,
      
       $imagetmbf = str_replace($replacetmbf, '', $image_64tmbf); 
      
       $imagetmbf = str_replace(' ', '+', $imagetmbf); 
      
       $imagetruocmatbefore ="hamtren-".str_random(10).'.'.$extensiontmbf;
        \File::put(public_path(). '/uploads/customer/' .$imagetruocmatbefore , base64_decode($imagetmbf));  
      }
      
      $imagehamduoibefore = $request->get('hamduoibefore');
      if(strpos($imagehamduoibefore, 'hamduoi-') !== false || strpos($imagehamduoibefore, 'hamtren-') !== false  || strpos($imagehamduoibefore, 'nonuser') !== false) { 
        
      }
      else
      {
         $image_64hd =  $request->get('hamduoibefore');
            
         $extensionhd = explode('/', explode(':', substr($image_64hd, 0, strpos($image_64hd, ';')))[1])[1];   // .jpg .png .pdf

         $replacehd = substr($image_64hd, 0, strpos($image_64hd, ',')+1); 
          
          // find substring fro replace here eg: data:image/png;base64,
          
          $imagehd = str_replace($replacehd, '', $image_64hd); 
          
          $imagehd = str_replace(' ', '+', $imagehd); 
          
          $imagehamduoibefore ="hamduoi-".str_random(10).'.'.$extensionhd;
            \File::put(public_path(). '/uploads/customer/' . $imagehamduoibefore, base64_decode($imagehd));  
      }

      $imagehamtrenbefore = $request->get('hamtrenbefore');
      if(strpos($imagehamtrenbefore, 'hamtren-') !== false || strpos($imagehamtrenbefore, 'nonuser') !== false) { 
        
      }
      else
      {
        $image_64htbf =  $request->get('hamtrenbefore');
        
        $extensionhtbf = explode('/', explode(':', substr($image_64htbf, 0, strpos($image_64htbf, ';')))[1])[1];   // .jpg .png .pdf

        $replacehtbf = substr($image_64htbf, 0, strpos($image_64htbf, ',')+1); 
      
      // find substring fro replace here eg: data:image/png;base64,
      
       $imagehtbf = str_replace($replacehtbf, '', $image_64htbf); 
      
       $imagehtbf = str_replace(' ', '+', $imagehtbf); 
      
       $imagehamtrenbefore ="hamtren-".str_random(10).'.'.$extensionhtbf;
        \File::put(public_path(). '/uploads/customer/' .$imagehamtrenbefore, base64_decode($imagehtbf)); 
      }
      $imagetruocmatafter= $request->get('truocmatafter'); 
      if(strpos($imagetruocmatafter, 'hamtren-') !== false || strpos($imagetruocmatafter, 'nonuser') !== false) { 
        
      }
      else
      {
        $image_64tmat = $request->get('truocmatafter'); 
        
        $extensiontmat = explode('/', explode(':', substr($image_64tmat, 0, strpos($image_64tmat, ';')))[1])[1];   // .jpg .png .pdf

        $replacetmat = substr($image_64tmat, 0, strpos($image_64tmat, ',')+1); 
      
      // find substring fro replace here eg: data:image/png;base64,
      
       $imagetmat = str_replace($replacetmat, '', $image_64tmat); 
      
       $imagetmat = str_replace(' ', '+', $imagetmat); 
      
       $imagetruocmatafter ="hamtren-".str_random(10).'.'.$extensiontmat;
        \File::put(public_path(). '/uploads/customer/' .$imagetruocmatafter , base64_decode($imagetmat));
      }
      $imagehamtrenafter= $request->get('hamtrenafter');
      if(strpos($imagehamtrenafter, 'hamtren-') !== false || strpos($imagehamtrenafter, 'nonuser') !== false) { 
        
      }
      else
      {
        $image_64htat =  $request->get('hamtrenafter');
        
        $extensionhtat = explode('/', explode(':', substr($image_64htat, 0, strpos($image_64htat, ';')))[1])[1];   // .jpg .png .pdf

        $replacehtat = substr($image_64htat, 0, strpos($image_64htat, ',')+1); 
      
      // find substring fro replace here eg: data:image/png;base64,
      
       $imagehtat = str_replace($replacehtat, '', $image_64htat); 
      
       $imagehtat = str_replace(' ', '+', $imagehtat); 
      
       $imagehamtrenafter ="hamtren-".str_random(10).'.'.$extensionhtat;
        \File::put(public_path(). '/uploads/customer/' .$imagehamtrenafter , base64_decode($imagehtat));    
      }
      $imagehamduoiafter= $request->get('hamduoiafter');  
      if(strpos($imagehamduoiafter, 'hamtren-') !== false || strpos($imagehamduoiafter, 'nonuser') !== false) { 
        
      }
      else
      {
        $image_64hdat =  $request->get('hamduoiafter');
        
        $extensionhdat = explode('/', explode(':', substr($image_64hdat, 0, strpos($image_64hdat, ';')))[1])[1];   // .jpg .png .pdf

        $replacehdat = substr($image_64hdat, 0, strpos($image_64hdat, ',')+1); 
      
      // find substring fro replace here eg: data:image/png;base64,
      
       $imagehdat = str_replace($replacehdat, '', $image_64hdat); 
      
       $imagehdat = str_replace(' ', '+', $imagehdat); 
      
       $imagehamduoiafter ="hamtren-".str_random(10).'.'.$extensionhdat;
        \File::put(public_path(). '/uploads/customer/' .$imagehamduoiafter , base64_decode($imagehdat));    
      }
      $imageName = $imageNameNew;
      $customer = Khachhang::find($id);
      DB::table('khachhang')
            ->where('ID', $id)
            ->update([
             'hoten' => $request->get('hoten'),
             'gioitinh' => $request->get('gioitinh'),
             'ngaysinh' => $request->get('ngaysinh'),
             'diachi' => $request->get('diachi'),
             'dienthoai' => $request->get('dienthoai'),
             'tiensubenh' => json_encode($request->get('tiensubenh')),
             'gioithieu' => $request->get('gioithieu'),
             'dichvudieutri' => json_encode($request->get('dichvudieutri')),
             'nguongioithieu' => json_encode($request->get('nguongioithieu')),
             'anhdaidien' => $imageName,
             'truocmatbefore' => $imagetruocmatbefore,
             'hamtrenbefore' => $imagehamtrenbefore,
             'hamduoibefore' => $imagehamduoibefore,
             'truocmatafter' => $imagetruocmatafter,
             'hamtrenafter' => $imagehamtrenafter,
             'hamduoiafter' => $imagehamduoiafter,
             'danhgia' => $request->get('danhgia'),
             'sosao' => $request->get('sosao'),
             'bacsidieutri' => $request->get('bacsidieutri'),
             'trangthai' => $request->get('trangthai')
             ]);
     
     
    
      return response()->json($customer);
      
    }
    public function xoakhachhang($id)
    {
      $customer = Khachhang::where('ID',$id);
      $customer->delete();
      return response()->json('Xóa thành công');
    }
    public function chitietkhachhang($id)
    {
      $customer = Khachhang::where('ID',$id)->first();
      return $customer->toJson();
    }
}
