import Image from "next/image";
import Link from "next/link";

export default function SignInPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="flex items-center flex-row justify-between relative h-[var(--header-height)]">
        <Link href="/" className="left-0 px-5 absolute">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-chevron-left">
            <path d="m15 18-6-6 6-6"/>
          </svg>
        </Link>
      </header>

      <main className="scrollable container pt-[10px]">
        <section
          className="container h-full flex justify-center flex-col rounded-[20px]"
          style={{
            backgroundImage: "url(https://ext.same-assets.com/274825464/413581859.png)",
            backgroundSize: "cover",
            backgroundPosition: "center"
          }}
        >
          <div className="flex justify-center mb-4">
            <Image
              src="https://ext.same-assets.com/274825464/303293626.png"
              alt="Logo"
              width={100}
              height={50}
              className="w-16 h-auto"
            />
          </div>

          <h1 className="mb-4 text-center text-2xl font-bold">Welcome Back!</h1>
          <span className="t16 mb-8 text-center">Use social networks or your email</span>

          <section>
            <div className="flex flex-row items-center gap-[14px] rounded-[25px] h-[50px] pl-5 border border-[#C8CDD9] bg-white mb-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full h-full border-none outline-none"
              />
              <div className="clickable p-[10px 19px]">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-check">
                  <path d="M20 6 9 17l-5-5"/>
                </svg>
              </div>
            </div>

            <div className="flex flex-row items-center gap-[14px] rounded-[25px] h-[50px] pl-5 border border-[#C8CDD9] bg-white mb-4">
              <input
                type="password"
                placeholder="Enter your password"
                className="w-full h-full border-none outline-none"
              />
              <div className="clickable p-[10px 19px]">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-eye">
                  <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"/>
                  <circle cx="12" cy="12" r="3"/>
                </svg>
              </div>
            </div>
          </section>

          <section className="mb-8 flex flex-row justify-between">
            <div className="gap-2.5 flex flex-row items-center clickable">
              <input type="checkbox" id="remember" className="h-5 w-5 rounded-sm" />
              <span className="t18" style={{ lineHeight: "1.2" }}>Remember me</span>
            </div>
            <span
              className="t18 clickable"
              style={{
                color: "var(--main-color)",
                lineHeight: "1.2"
              }}
            >
              Lost your password?
            </span>
          </section>

          <section className="mb-6">
            <div>
              <Link
                href="/home"
                className="h-[50px] w-full rounded-[50px] flex justify-center items-center text-lg capitalize font-normal bg-[var(--accent-color)] text-[var(--main-color)]"
              >
                Sign In
              </Link>
            </div>
          </section>

          <section className="flex justify-center mb-4">
            <span className="t18">
              No account? <Link href="/sign-up" className="text-[var(--main-color)]">Register now</Link>
            </span>
          </section>
        </section>
      </main>
    </div>
  );
}
