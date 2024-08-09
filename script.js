let balance = 0;
let users = []; // Mảng lưu trữ người dùng (dữ liệu giả lập cho ví dụ)
let isLoggedIn = false; // Biến để kiểm tra trạng thái đăng nhập

function showSection(sectionId) {
  if (
    !isLoggedIn &&
    sectionId !== "home" &&
    sectionId !== "register" &&
    sectionId !== "login"
  ) {
    alert("Vui lòng đăng nhập trước!");
    return;
  }

  document.querySelectorAll(".section").forEach((section) => {
    section.style.display = "none";
  });
  document.getElementById(sectionId).style.display = "block";

  // Hiển thị hoặc ẩn các liên kết tùy theo trạng thái đăng nhập
  document.getElementById("tasksLink").style.display = isLoggedIn
    ? "inline"
    : "none";
  document.getElementById("balanceLink").style.display = isLoggedIn
    ? "inline"
    : "none";
  document.getElementById("registerLink").style.display = isLoggedIn
    ? "none"
    : "inline";
  document.getElementById("loginLink").style.display = isLoggedIn
    ? "none"
    : "inline";
  document.getElementById("logoutLink").style.display = isLoggedIn
    ? "inline"
    : "none";
}

function watchVideo(url) {
  balance += 100;
  document.getElementById("balanceAmount").innerText = balance;
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

function register() {
  const username = document.getElementById("registerUsername").value;
  const password = document.getElementById("registerPassword").value;

  if (users.some((user) => user.username === username)) {
    document.getElementById("registerMessage").innerText =
      "Tên đăng nhập đã tồn tại.";
    return false;
  }

  users.push({ username, password });
  document.getElementById("registerMessage").innerText = "Đăng ký thành công!";
  return false; // Ngăn không cho form gửi dữ liệu thực tế
}

function login() {
  const username = document.getElementById("loginUsername").value;
  const password = document.getElementById("loginPassword").value;

  const user = users.find(
    (user) => user.username === username && user.password === password
  );

  if (user) {
    isLoggedIn = true;
    document.getElementById("loginMessage").innerText = "Đăng nhập thành công!";
    showSection("home"); // Quay về trang chủ sau khi đăng nhập
  } else {
    document.getElementById("loginMessage").innerText =
      "Tên đăng nhập hoặc mật khẩu không đúng.";
  }
  return false; // Ngăn không cho form gửi dữ liệu thực tế
}

function logout() {
  isLoggedIn = false;
  showSection("home");
}
