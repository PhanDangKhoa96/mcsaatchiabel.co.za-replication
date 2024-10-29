import Link from "next/link";
import StickyScroll1 from "./_components/OnWebComponents/StickyScroll1";
import StickyScroll2 from "./_components/OnWebComponents/StickyScroll2";
import CTAButton from "./_components/OnWebComponents/CTAButton";

export default function Home() {
    return (
        <div>
            <div className="grid min-h-[100vh] place-items-center bg-white py-20 text-black">
                <div className="container text-center">
                    <h1 className="heading-60-150 mb-8">Website Replication</h1>
                    <div className="flex justify-between text-center">
                        <Link
                            href={"https://www.mcsaatchiabel.co.za/"}
                            className="heading-16-40 text-blue hover:underline">
                            Credit
                        </Link>
                        <Link
                            href={"#"}
                            className="heading-16-40 text-blue hover:underline">
                            Source code (Will update soon!)
                        </Link>
                        <Link
                            href={"https://www.pldkhoa.dev/playground"}
                            className="heading-16-40 text-blue hover:underline">
                            All demos
                        </Link>
                    </div>
                </div>
            </div>
            <div className="h-px bg-black"></div>
            <StickyScroll1 />
            <StickyScroll2 />
            <CTAButton />

            <div className="heading-60-150 container grid h-screen place-items-center text-balance text-center text-blue">
                There are more to come!
                <br />
                Stay tuned! :D
            </div>
        </div>
    );
}
