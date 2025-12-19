function openPhoto(num) {
  document.getElementById(`photo${num}`).click();
}

// 사진 1 선택
document.getElementById("photo1").addEventListener("change", function(e) {
  previewImage(e, 1);
});

// 사진 2 선택 → 내용 자동 복사
document.getElementById("photo2").addEventListener("change", function(e) {
  previewImage(e, 2);

  const content1 = document.getElementById("content1");
  const content2 = document.getElementById("content2");

  if (content2.value.trim() === "") {
    content2.value = content1.value;
  }
});

// 이미지 미리보기
function previewImage(e, num) {
  const file = e.target.files[0];
  if (!file) return;

  const reader = new FileReader();
  reader.onload = function(evt) {
    document.getElementById(`preview${num}`).src = evt.target.result;
  };
  reader.readAsDataURL(file);
}

// PDF 저장
function savePDF() {
  window.print();
}
