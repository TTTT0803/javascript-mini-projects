let hour = 1;
let minute = 30;
let second = 0;

const hourElement = document.getElementById("hour");
const minuteElement = document.getElementById("minute");
const secondElement = document.getElementById("second");

function updateTime() {
  // Kiểm tra và giảm giây
  if (second === 0) {
    if (minute === 0) {
      if (hour === 0) {
        clearInterval(countdown); // Dừng đồng hồ khi hết thời gian
        alert("DONE"); // Thông báo khi đồng hồ đếm ngược xong
      } else {
        hour--; // Giảm giờ
        minute = 59; // Đặt lại phút về 59
        second = 59; // Đặt lại giây về 59
      }
    } else {
      minute--; // Giảm phút
      second = 59; // Đặt lại giây về 59
    }
  } else {
    second--; // Giảm giây
  }

  // Cập nhật hiển thị giờ, phút, giây
  hourElement.textContent = hour < 10 ? `0${hour}` : hour;
  minuteElement.textContent = minute < 10 ? `0${minute}` : minute;
  secondElement.textContent = second < 10 ? `0${second}` : second;
}

// Thiết lập đồng hồ đếm ngược mỗi giây
const countdown = setInterval(updateTime, 1000);
