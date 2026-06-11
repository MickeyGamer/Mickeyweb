"use client";

export default function Login() {
  return (
    <div className="auth-page">
      <form className="auth-card">
        <h2>เข้าสู่ระบบ</h2>
        <input
          placeholder="Email"
          type="email"
        />
        <input
          placeholder="Password"
          type="password"
        />
        <button>Login</button>
      </form>
    </div>
  );
}