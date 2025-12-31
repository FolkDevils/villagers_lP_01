import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#FCFBF5] font-poppins">
      <h1 className="text-4xl font-bold text-[#332E2E] mb-12">
        Design Options
      </h1>
      <div className="flex flex-col gap-6">

        <Link
          href="/design_02"
          className="px-8 py-4 bg-[#FCFBF5] text-[#FF5C4D] font-semibold rounded-full border-2 border-[#FF5C4D] hover:bg-[#FF5C4D] hover:text-[#FCFBF5]  transition-colors text-center min-w-[200px]"
        >
         Store Owner Page 
        </Link>
        <Link
          href="/design_03"
          className="px-8 py-4 bg-[#FCFBF5] text-[#FF5C4D] font-semibold rounded-full border-2 border-[#FF5C4D] hover:bg-[#FF5C4D] hover:text-[#FCFBF5]  transition-colors text-center min-w-[200px]"
        >
          Customer Page
        </Link>
      </div>
    </div>
  );
}

