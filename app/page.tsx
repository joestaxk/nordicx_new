import Link from "next/link";

export default function Home() {
   return (
      <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
         <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
            <ol className="list-inside list-decimal text-sm text-center sm:text-left font-[family-name:var(--font-geist-mono)]">

               <li className="mb-2">
                  <Link href={"wallet-overview"}>Wallet Overview</Link>
               </li>
               <li className="mb-2">
                  <Link href={"trading"}>Trading page</Link>
               </li>

               <li className="mb-2">
                  <Link href={"buy-crypto"}>Buy Crypto</Link>
               </li>
               <li className="mb-2">
                  <Link href={"withdrawal"}>Withdrawal</Link>
               </li>
               <li className="mb-2">
                  <Link href={"deposit"}>Deposit</Link>
               </li>
               <li className="mb-2">
                  <Link href={"nordic-card"}>Nordic Card</Link>
               </li>

               <li className="mb-2">
                  <Link href={"market"}>Market</Link>
               </li>
            </ol>
         </main>
      </div>
   );
}
