export default axios.create({
  baseURL: "http://localhost:5003/api",
  headers: { "Content-Type": "application/json" }
});
