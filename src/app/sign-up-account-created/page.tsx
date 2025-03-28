import Image from "next/image";
import Link from "next/link";

export default function AccountCreatedPage() {
  return (
    <div className="flex flex-col min-h-screen"
         style={{
           backgroundImage: "url(https://ext.same-assets.com/274825464/517608865.png)",
           backgroundSize: "cover",
           backgroundPosition: "center"
         }}>
      <main className="scrollable container">
        <section className="h-full flex flex-col justify-center items-center rounded-[10px] py-10">
          <Image
            src="https://ext.same-assets.com/1512998/3686079128.png"
            alt="Account created"
            width={250}
            height={250}
            className="status-image"
          />

          <h2 className="mb-3 text-2xl capitalize font-bold">Account created!</h2>
          <p className="t18 mb-8 text-center">
            Your account had been created <br/>
            successfully.
          </p>

          <div className="w-full">
            <Link
              href="/home"
              className="h-[50px] w-full rounded-[50px] flex justify-center items-center text-lg capitalize font-normal bg-[var(--accent-color)] text-[var(--main-color)]"
            >
              Shop Now
            </Link>
          </div>
        </section>
      </main>
    </div>
  );
}
