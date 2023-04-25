import axios from "axios";

const BASE_URL = "http://localhost:5000/api/";
// const TOKEN = JSON.parse(JSON.parse(localStorage.getItem("persist:root")).user)
//   .currentUser.accessToken;

//adminToken
const TOKEN =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzZjVmOGYwOTZlMzFhNDk5N2IyNTEwNiIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY4MjIzMDUyMCwiZXhwIjoxNjgyNDg5NzIwfQ.3oY4qXZFa-f4Tcxy2M9NTi0lR21VG47zT9nZUgN2TPU";

//UserToken
//const TOKEN =
// "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzZjVmOGYwOTZlMzFhNDk5N2IyNTEwNiIsImlzQWRtaW4iOmZhbHNlLCJpYXQiOjE2NzczMDc3ODgsImV4cCI6MTY3NzU2Njk4OH0._cjx5_Q3I6wF61DKeS5QEO55yMSUNBweRzlP7NFGnsw";

export const publicRequest = axios.create({
  baseURL: BASE_URL,
});

export const userRequest = axios.create({
  baseURL: BASE_URL,
  headers: { token: `Bearer ${TOKEN}` },
});
