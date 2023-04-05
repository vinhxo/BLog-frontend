import Header from "./components/header/Header";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/forms/Login";
import Register from "./pages/forms/Register";
import CreatePost from "./pages/create-post/CreatePost";
import Home from "./pages/home/Home";
import PostsPage from "./pages/posts-page/PostsPage";
import AdminDashboard from "./pages/admin/AdminDashboard";
import PostDetails from "./pages/post-details/PostDetails";
import Category from "./pages/category/Category";
import Profile from "./pages/profile/Profile";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/posts" element={<PostsPage />} />
          <Route path="/profile/:id" element={<Profile />} />
          <Route path="posts">
            <Route index element={<PostsPage />} />
            <Route path="create" element={<CreatePost />} />
            <Route path="details/:id" element={<PostDetails />} />
            <Route path="categories/:category" element={<Category />} />
          </Route>
          <Route path="/admin-dashboard" element={<AdminDashboard />} />
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
