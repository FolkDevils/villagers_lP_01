import Button from "./components/Button";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#FCFBF5] font-poppins">
      <h1 className="text-4xl font-bold text-[#332E2E] mb-12">
        Design Options
      </h1>
      <div className="flex flex-col gap-6">

        <Button
          href="/page_owner"
          variant="secondary"
          size="medium"
          className="min-w-[200px]"
        >
         Store Owner Page 
        </Button>
        <Button
          href="/page_customer"
          variant="secondary"
          size="medium"
          className="min-w-[200px]"
        >
          Customer Page
        </Button>
      </div>
    </div>
  );
}

