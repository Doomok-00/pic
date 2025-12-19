function openPhoto(num) {
  document.getElementById(`photo${num}`).click();
}

// 사진 1
document.getElementById("photo1").addEventListener("change", function(e) {
  preview(e, 1);
});

// 사진 2
document.getElementById("photo2").addEventListener("change", function(e) {
  preview(e, 2);

  const c1 = document.getElementById("content1");
  const c2 = document.getElementById("content2");

  if (c2.value.trim() === "") {
    c2.value = c1.value;
  }
});

function preview(e, num) {
  const file = e.target.files[0];
  if (!file) return;

  const reader = new FileReader();
  reader.onload = function(evt) {
    document.getElementById(`preview${num}`).src = evt.target.result;
  };
  reader.readAsDataURL(file);
}