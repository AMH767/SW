import Image from "next/image";
import Link from "next/link";

export default function OnboardingPage() {
  return (
    <div className="flex flex-col min-h-screen"
         style={{
           backgroundImage: "url(https://ext.same-assets.com/274825464/517608865.png)",
           backgroundSize: "cover",
           backgroundPosition: "center"
         }}>
      <section className="flex justify-center items-center mt-[6%] mb-[6%] z-10">
        <Image
          src="https://ext.same-assets.com/274825464/303293626.png"
          alt="Logo"
          width={150}
          height={100}
          className="w-24 h-auto"
        />
      </section>

      <section className="container mb-[8%]">
        <h1 className="text-center text-3xl capitalize font-bold">Welcome To</h1>
        <h1 className="text-center text-3xl capitalize font-bold">World Of Fun!</h1>
        <p className="t16 mt-[14px] text-center">
          Explore fun and learning for all ages.<br />
          Enjoy a world of educational toys and games.
        </p>
      </section>

      <section className="container flex items-center justify-center gap-[6px] mb-[8%]">
        <div className="w-[22px] h-[6px] rounded-[4px] bg-white"></div>
        <div className="w-[6px] h-[6px] rounded-full bg-white opacity-50"></div>
        <div className="w-[6px] h-[6px] rounded-full bg-white opacity-50"></div>
      </section>

      <section className="w-full h-full flex justify-center items-center">
        <Image
          src="https://ext.same-assets.com/1512998/1929321685.png"
          alt="Onboarding"
          width={650}
          height={400}
          className="w-1/2 h-auto mx-auto"
        />
      </section>

      <section className="p-5 mt-auto">
        <div>
          <Link
            href="/sign-in"
            className="h-[50px] w-full rounded-[50px] flex justify-center items-center text-lg capitalize font-normal bg-[var(--accent-color)] text-[var(--main-color)]"
          >
            Get Started
          </Link>
        </div>
      </section>
    </div>
  );
}
