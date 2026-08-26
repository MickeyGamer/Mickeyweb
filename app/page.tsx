import Image from "next/image";
import BlogsCard from "@/components/BlogCard";

export default function Home() {
  return (
    <div>
      <h2>ยินดีต้อนรับเข้าสู่ Website ของผมครับ</h2>
      <p>โดย ธนกรณ์ รัศมีจันทร์</p>

      <BlogsCard />

    </div>
  );
}