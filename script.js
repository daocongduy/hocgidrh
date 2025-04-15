document.getElementById("actionButton").addEventListener("click", function () {
  alert("Nhóm gồm: Tran Minh Dien, Dao Cong Duy, Nguyen Le Duy");

  // Tạo thẻ img mới
  const img = document.createElement("img");
  img.src = "images.png"; // Thay bằng đường dẫn tới ảnh thật
  img.alt = "Ảnh nhóm";
  img.style.width = "300px";
  img.style.marginTop = "20px";
  img.style.borderRadius = "10px";

  // Kiểm tra nếu ảnh đã tồn tại thì không thêm nữa
  if (!document.getElementById("teamImage")) {
    img.id = "teamImage";
    document.body.appendChild(img);
  }
});
  
