import Link from "next/link";
import StickyScroll1 from "./_components/OnWebComponents/StickyScroll1";

export default function Home() {
    return (
        <div>
            <div className="grid min-h-[100vh] place-items-center bg-white py-20 text-black">
                <div className="container text-center">
                    <h1 className="heading-60-150 mb-8">Website Replication</h1>
                    <div className="flex justify-between text-center">
                        <Link
                            href={"#"}
                            className="heading-16-40 text-blue hover:underline">
                            Credit
                        </Link>
                        <Link
                            href={"#"}
                            className="heading-16-40 text-blue hover:underline">
                            Source code
                        </Link>
                        <Link
                            href={"#"}
                            className="heading-16-40 text-blue hover:underline">
                            All demos
                        </Link>
                    </div>
                </div>
            </div>
            <StickyScroll1 />
        </div>
    );
}
