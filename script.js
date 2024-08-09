let balance = 0;

function showSection(sectionId) {
  // Ẩn tất cả các section
  document.querySelectorAll(".section").forEach((section) => {
    section.style.display = "none";
  });
  // Hiển thị section được chọn
  document.getElementById(sectionId).style.display = "block";
}

function watchVideo(url) {
  // Tăng số dư thêm 100 đồng
  balance += 100;
  document.getElementById("balanceAmount").innerText = balance;

  // Mở video trong một tab mới
  window.open(url, "_blank");
}

function withdraw() {
  document.getElementById("withdrawForm").style.display = "block";
  document.getElementById("depositForm").style.display = "none";
}

function deposit() {
  document.getElementById("depositForm").style.display = "block";
  document.getElementById("withdrawForm").style.display = "none";
}

function attemptWithdraw() {
  if (balance >= 100000) {
    alert("Rút tiền thành công!");
    balance = 0;
    document.getElementById("balanceAmount").innerText = balance;
  } else {
    document.getElementById("withdrawError").style.display = "block";
  }
}
