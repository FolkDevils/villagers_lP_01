import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#dfffde] font-work">
      <h1 className="text-4xl font-medium text-[#078930] mb-12">
        Design Options
      </h1>
      <div className="flex flex-col gap-6">
 
        <Link
          href="/design_02"
          className="px-8 py-4 bg-[#dfffde] text-[#0ac200] font-semibold rounded-full border-2 border-[#0ac200] hover:bg-[#0ac200] hover:text-[#dfffde]  transition-colors text-center min-w-[200px]"
        >
         Store Owner Page 
        </Link>
        <Link
          href="/design_03"
          className="px-8 py-4 bg-[#dfffde] text-[#0ac200] font-semibold rounded-full border-2 border-[#0ac200] hover:bg-[#0ac200] hover:text-[#dfffde]  transition-colors text-center min-w-[200px]"
        >
          Customer Page
        </Link>
      </div>
    </div>
  );
}

