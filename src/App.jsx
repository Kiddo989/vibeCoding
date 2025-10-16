import { BrowserRouter as Router, Routes, Route, Link, useParams } from "react-router-dom";
import { motion } from "framer-motion";

const posts = [
  { id: 1, title: "春日隨想", summary: "微風拂面，萬物初醒。", content: "這是關於春天的日記，柔和的色彩與光線，讓人心情平靜。" },
  { id: 2, title: "夜色與燈光", summary: "城市的夜，有自己的節奏。", content: "夜色下的街道，燈光柔和，反映出人們生活的片段。" },
  { id: 3, title: "咖啡的香氣", summary: "一杯咖啡，一段時光。", content: "早晨的第一口咖啡，總能喚醒沉睡的靈感。" },
];

function HomePage() {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="p-6 max-w-3xl mx-auto">
      <h1 className="text-3xl font-semibold mb-6 text-gray-700">最新文章</h1>
      <div className="space-y-4">
        {posts.map((post) => (
          <div key={post.id} className="bg-white rounded-2xl shadow-sm p-5 hover:shadow-md transition-shadow">
            <h2 className="text-2xl font-medium mb-2">{post.title}</h2>
            <p className="text-gray-600 mb-3">{post.summary}</p>
            <Link to={`/post/${post.id}`} className="text-blue-500 hover:text-blue-700">閱讀更多 →</Link>
          </div>
        ))}
      </div>
    </motion.div>
  );
}

function PostPage() {
  const { id } = useParams();
  const post = posts.find((p) => p.id === Number(id));
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="p-6 max-w-3xl mx-auto">
      <h1 className="text-3xl font-semibold mb-4 text-gray-700">{post.title}</h1>
      <p className="text-gray-600 leading-relaxed">{post.content}</p>
      <Link to="/" className="text-blue-500 hover:text-blue-700 block mt-4">← 返回首頁</Link>
    </motion.div>
  );
}

function AboutPage() {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="p-6 max-w-3xl mx-auto">
      <h1 className="text-3xl font-semibold mb-4 text-gray-700">關於本站</h1>
      <p className="text-gray-600 leading-relaxed">
        這是一個使用 React + Vite + Tailwind CSS 建立的部落格網站，設計採用柔和色彩與圓角風格，營造舒適閱讀體驗。
      </p>
    </motion.div>
  );
}

export default function App() {
  return (
    <Router>
      <div className="min-h-screen bg-[#f9fafb] text-gray-700">
        <nav className="bg-white shadow-sm p-4 flex justify-between items-center rounded-b-2xl">
          <h1 className="text-2xl font-semibold text-[#4b5563]">MyBlog</h1>
          <div className="space-x-4">
            <Link to="/" className="text-[#4b5563] hover:text-[#2563eb]">首頁</Link>
            <Link to="/about" className="text-[#4b5563] hover:text-[#2563eb]">關於</Link>
          </div>
        </nav>

        <main className="mt-6">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/post/:id" element={<PostPage />} />
          </Routes>
        </main>

        <footer className="text-center py-4 text-sm text-gray-400">© 2025 MyBlog. All rights reserved.</footer>
      </div>
    </Router>
  );
}
export default function App() {
  return (
    <div className="p-10 text-center text-3xl font-bold text-blue-600">
      ✅ 网站部署成功！
    </div>
  );
}
