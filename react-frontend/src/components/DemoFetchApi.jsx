import React, { useEffect, useState } from "react";
import axios from "axios";
function DemoFetchApi() {
  // Khởi tạo state user để lưu dữ liệu
  const [user, setUser] = useState([]);
  //   // Get fetch Api (lấy dữ liệu từ api thông qua fetch)
  //   const handleGetApi = () => {
  //     fetch("http://localhost:8000/users")
  //       .then((res) => res.json()) // Ép kiểu dữ liệu về dạng json
  //       .then((data) => setUser(data)) //Lấy dữ liệu về
  //       .catch((err) => console.log(err)); // Báo lỗi
  //   };

  //   Get API axios
  const handleGetApi = () => {
    axios
      .get("http://localhost:8000/users")
      .then((res) => setUser(res.data)) //Lấy dữ liệu
      .catch((err) => console.log(err)); // Báo lỗi
  };

  //   //   Post fetch Api (thêm dữ liệu từ api thông qua fetch)
  //   const handlePostApi = () => {
  //     fetch("http://localhost:8000/users", {
  //       method: "POST",
  //       headers: {
  //         "Content-type": "application/json",
  //       },
  //       body: JSON.stringify({
  //         id: 3,
  //         name: "Đức Nguyễn",
  //         email: "ducnguyen@gmail.com",
  //       }),
  //     })
  //       .then((res) => res.json()) // Ép kiểu dữ liệu về dạng json
  //       .then((data) => console.log(data)) //Lấy dữ liệu về
  //       .catch((err) => console.log(err)); // Báo lỗi
  //   };

  //   Post with axios
  const handlePostApi = () => {
    axios
      .post("http://localhost:8000/users", {
        id: 4,
        name: "Khôi Nguyên",
        email: "khoinguyen@gmail.com",
      })
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  };

  //   //   Put fetch Api (thêm dữ liệu từ api thông qua fetch)- demo sửa theo id user
  //   const handlePutApi = () => {
  //     fetch("http://localhost:8000/users/3", {
  //       method: "PUT",
  //       headers: {
  //         "Content-type": "application/json",
  //       },
  //       body: JSON.stringify({
  //         email: "ducnguyen123@gmail.com",
  //       }),
  //     })
  //       .then((res) => res.json()) // Ép kiểu dữ liệu về dạng json
  //       .then((data) => console.log(data)) //Lấy dữ liệu về
  //       .catch((err) => console.log(err)); // Báo lỗi
  //   };

  //   Put with axios
  const handlePutApi = () => {
    axios
      .put("http://localhost:8000/users/4", {
        email: "khoinguyen123@gmail.com",
      })
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  };

  //   //   Patch fetch Api (thêm dữ liệu từ api thông qua fetch)- demo sửa theo id user
  //   const handlePatchApi = () => {
  //     fetch("http://localhost:8000/users/4", {
  //       method: "PATCH",
  //       headers: {
  //         "Content-type": "application/json",
  //       },
  //       body: JSON.stringify({
  //         email: "ducnguyen456@gmail.com",
  //       }),
  //     })
  //       .then((res) => res.json()) // Ép kiểu dữ liệu về dạng json
  //       .then((data) => console.log(data)) //Lấy dữ liệu về
  //       .catch((err) => console.log(err)); // Báo lỗi
  //   };

  //   Patch with axios
  const handlePatchApi = () => {
    axios
      .patch("http://localhost:8000/users/1", {
        email: "vietanh123@gmail.com",
      })
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  };

  //   //   Delete fetch Api (thêm dữ liệu từ api thông qua fetch)- demo xóa theo id user
  //   const handleDeleteApi = () => {
  //     fetch("http://localhost:8000/users/5", {
  //       method: "DELETE",
  //       headers: {
  //         "Content-type": "application/json",
  //       },
  //     })
  //       .then((res) => res.json()) // Ép kiểu dữ liệu về dạng json
  //       .then((data) => console.log(data)) //Lấy dữ liệu về
  //       .catch((err) => console.log(err)); // Báo lỗi
  //   };

  //   Delete with axios
  const handleDeleteApi = () => {
    axios
      .delete("http://localhost:8000/users/2")
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  };

  //   //   Demo fetch Api với useEffect
  //   useEffect(() => {
  //     fetch("http://localhost:8000/users")
  //       .then((res) => res.json()) // Ép kiểu dữ liệu về dạng json
  //       .then((data) => setUser(data)) //Lấy dữ liệu về
  //       .catch((err) => console.log(err)); // Báo lỗi
  //   }, []);
  return (
    <div>
      <h1>DemoFetchApi</h1>
      <button onClick={handleGetApi}>Get Feth Api</button>
      <button onClick={handlePostApi}>Post Fetch Api</button>
      <button onClick={handlePutApi}>Put Fetch Api</button>
      <button onClick={handlePatchApi}>Patch Fetch Api</button>
      <button onClick={handleDeleteApi}>Delete Fetch Api</button>
      <table border={1}>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {user.map((e, i) => (
            <tr key={i}>
              <td>{e.id}</td>
              <td>{e.name}</td>
              <td>{e.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default DemoFetchApi;
