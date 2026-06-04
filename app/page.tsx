import Image from "next/image";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div>
        <Navbar />
        <h2>ยินดีต้อนรับเข้าสู่ Website ของผมครับ</h2>
        <p>โดย ธนกรณ์ รัศมีจันทร์</p>
    </div>
  );
}
