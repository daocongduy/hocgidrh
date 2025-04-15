document.getElementById("actionButton").addEventListener("click", function () {
  alert("Nhóm gồm: Tran Minh Dien, Dao Cong Duy, Nguyen Le Duy");

  // Nếu form upload chưa tồn tại thì tạo mới
  if (!document.getElementById("uploadForm")) {
    const form = document.createElement("form");
    form.id = "uploadForm";
    form.style.marginTop = "20px";

    const fileInput = document.createElement("input");
    fileInput.type = "file";
    fileInput.accept = "image/*";
    fileInput.id = "selfieInput";

    // Khi người dùng chọn ảnh, hiển thị ảnh đó
    fileInput.addEventListener("change", function (event) {
      const file = event.target.files[0];
      if (file) {
        const reader = new FileReader();
        reader.onload = function (e) {
          let img = document.getElementById("selfieImage");
          if (!img) {
            img = document.createElement("img");
            img.id = "selfieImage";
            img.style.width = "300px";
            img.style.marginTop = "20px";
            img.style.borderRadius = "10px";
            form.appendChild(img);
          }
          img.src = e.target.result;
          img.alt = "Selfie";
        };
        reader.readAsDataURL(file);
      }
    });

    form.appendChild(fileInput);
    document.body.appendChild(form);
  }
});