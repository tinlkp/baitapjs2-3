var nhap = document.getElementById("nhap");
nhap.onclick = function () {
    // thông tin về ngày lương
    var ngayluong = document.getElementById("ngayluong").value * 1;
    var luongngay = 100 * 1;
    // tính tổng =số ngày lương * lương ngày (100.000)
    var total = ngayluong * luongngay;
    console.log(total);
    // xuất ra kết quả
    var result = "Tổng lương là: " + total + ",000";
    var tResult = document.getElementById("tResult");
    tResult.innerHTML = result;



};


var ketqua = document.getElementById("ketqua");
ketqua.onclick = function () {
    // thông tin 5 số thực
    var so1 = document.getElementById("so1").value * 1;
    var so2 = document.getElementById("so2").value * 1;
    var so3 = document.getElementById("so3").value * 1;
    var so4 = document.getElementById("so4").value * 1;
    var so5 = document.getElementById("so5").value * 1;
    // tính trung bình tổng 5 số thực
    var total5so = (so1 + so2 + so3 + so4 + so5) / 5;
    console.log(total5so);
    // xuất ra kết quả
    var pResult = "Kết quả là:" + total5so
    var trungbinhtong = document.getElementById("trungbinhtong");
    trungbinhtong.innerHTML = pResult;


}

var doi = document.getElementById("doi");
doi.onclick = function () {
    // lấy thông tin số usd cần đổi
    var usd = document.getElementById("usd").value *1;
    // tính tỉ giá USĐ > VNĐ
    var usdt=parseFloat(23500);
    var tigia = usd * usdt;
    var le =parseFloat(tigia);
    var numberFormat=new Intl.NumberFormat("VN-vn");
    // xuất ra kết quả
    var giatriusd = "Số VNĐ sau khi quy đổi: " + numberFormat.format(le) + " VNĐ";
    var vnd = document.getElementById("vnd");
    vnd.innerHTML = giatriusd;
}



var kqcv = document.getElementById("kqcv");
kqcv.onclick = function () {
    // lấy thông tin về chiều dài và chiều rộng
    var chieudai = document.getElementById("chieudai").value * 1;
    var chieurong = document.getElementById("chieurong").value * 1;
    // tính chu vi
    var tcv = (chieudai + chieurong) * 2;
    console.log(tcv);
    // xuất ra kết quả
    var cv = document.getElementById("cv");
    cv.innerHTML = "Kết quả chu vi là: " + tcv;
}

var kqdt = document.getElementById("kqdt");
kqdt.onclick = function () {
    // lấy thông tin về chiều dài và chiều rộng
    var chieudai = document.getElementById("chieudai").value * 1;
    var chieurong = document.getElementById("chieurong").value * 1;
    // tính diện tích
    var tdt = chieudai * chieurong;
    console.log(tdt);
    // xuất ra
    var dt = document.getElementById("dt");
    dt.innerHTML = "Kết quả Diện tích là: " + tdt;
}

var chuvidientich = document.getElementById("chuvidientich");
chuvidientich.onclick = function () {
    // lấy thông tin về chiều dài và chiều rộng
    var chieudai = document.getElementById("chieudai").value * 1;
    var chieurong = document.getElementById("chieurong").value * 1;
    // tính chu vi
    var tcv = (chieudai + chieurong) * 2;
    // tính diện tích
    var tdt = chieudai * chieurong;
    // hiện thị chu vi và diện tích
    var tcvdt = "Chu Vi: " + tcv + " và " + " Diện Tích: " + tdt;
    var cvdt = document.getElementById("cvdt");
    cvdt.innerHTML = tcvdt;


}


var kiso = document.getElementById("kiso");
kiso.onclick = function () {
    // lấy thông tin từ input
    var nhapso = document.getElementById("nhapso").value * 1;
    // lấy số hàng chục và hàng đơn vị
    var sohangdv  = nhapso % 10;
    sohangdv=parseInt(sohangdv);
    var sohangchuc=nhapso /10;
    sohangchuc=parseInt(sohangchuc);
    // tính tổng 2 kí số
    var tong2kiso= sohangdv+sohangchuc;
    // xuất ra màn hình
    var hienthikiso=document.getElementById("hienthikiso");
    hienthikiso.innerHTML= "kí số là: " +tong2kiso;
 
    



}






