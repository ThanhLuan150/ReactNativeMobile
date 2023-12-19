 //Callback trong JavaScript là một hàm được truyền vào như một đối số của một hàm khác và được thực thi 
// sau khi một nhiệm vụ cụ thể hoàn thành hoặc tại một sự kiện nhất định. Callback thường được sử dụng
//  trong các hoạt động bất đồng bộ, nơi bạn muốn thực hiện một số hành động sau khi một nhiệm vụ cụ thể 
//  kết thúc mà không làm chặn việc thực thi của mã khác.
function fetchData(callback) {
    // Giả lập một hoạt động bất đồng bộ (ví dụ: lấy dữ liệu từ API)
    setTimeout(function() {
      const data = "Một số dữ liệu đã được lấy";
      callback(data); // Thực thi hàm callback với dữ liệu đã lấy được
    }, 2000); // Giả lập thời gian chậm 2 giây
  }
  function processData(data) {
    console.log("Dữ liệu nhận được:", data);
  } 
  // Gọi fetchData và truyền hàm processData làm callback
  fetchData(processData);
//Callback là một khái niệm cơ bản trong JavaScript, đặc biệt là khi xử lý các tác vụ bất đồng bộ như xử lý đầu vào người dùng, 
// thực hiện cuộc gọi API, đọc tập tin, hoặc thực hiện bất kỳ hoạt động nào mất thời gian để hoàn thành. Tuy nhiên, khi mã nguồn
// phức tạp hơn, sử dụng callback nhiều có thể dẫn đến việc lồng ghép hàm. Vấn đề này đã dẫn đến sự phát
// triển của các kỹ thuật khác như Promises và async/await để xử lý các hoạt động bất đồng bộ một cách có cấu trúc và dễ đọc hơn.