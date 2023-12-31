<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ThayDoiGia extends Model
{
    public $timestamps = true;
    use HasFactory;
    protected $table = 'thaydoigia';
    protected $fillable = [
        'id',
        'masp',
        'ngayapdung',
        'giamoi'];
}
