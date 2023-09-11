import Link from "next/link";
import Image from 'next/image'
import logos from "../../public/assets/logos.png"

export const Navbar = () => {
  return (
    <nav className="bg-gray-950 py-5 mb-2">
      <div className="container px-10 md:px-0 mx-auto flex justify-between">
        <Link href="/">
          <div className="flex flex-row items-center">
            {/* <i className="gg-list mr-3"></i> */}
            <h1 className="text-2xl font-bold mr-5">CRUD</h1>
            <Image 
              src={logos}
              alt="Logos"
              width={176}
              height={42}
            />

            
          </div>
        </Link>
        <ul className="flex gap-x-4">
          <li>
            <div>
              <Link className="flex flex-row items-center" href="/tasks/new">
                <i className="gg-add mr-2"></i>Task
              </Link>
            </div>
          </li>
        </ul>
      </div>
    </nav>
  );
};
