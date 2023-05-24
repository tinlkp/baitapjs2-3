var nhap = document.getElementById("nhap");
nhap.onclick = function () {
    // thông tin về ngày lương
    var ngayluong = document.getElementById("ngayluong").value * 1;
    var luongngay = 100000 * 1;
    // tính tổng =số ngày lương * lương ngày (100.000)
    var total = ngayluong * luongngay;
    console.log(total);
    // xuất ra kết quả
    var result = "Tổng lương là:" + total + "VNĐ";
    var tResult = document.getElementById("tResult");
    tResult.innerHTML = result;



};


var ketqua= document.getElementById("ketqua");
ketqua.onclick = function(){
    // thông tin 5 số thực
    var so1=document.getElementById("so1").value *1;
    var so2=document.getElementById("so2").value *1;
    var so3=document.getElementById("so3").value *1;
    var so4=document.getElementById("so4").value *1;
    var so5=document.getElementById("so5").value *1;
    // tính trung bình tổng 5 số thực
    var total5so= (so1+so2+so3+so4+so5)/5;
    console.log(total5so);
    // xuất ra kết quả
    var pResult= "Kết quả là:"+total5so
    var trungbinhtong=document.getElementById("trungbinhtong");
    trungbinhtong.innerHTML=pResult;
    

}










