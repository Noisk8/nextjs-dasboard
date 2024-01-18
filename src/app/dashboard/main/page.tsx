import { SimpleWidget } from "@/components";



export const metadata = {
 title: 'Admin Dashboard',
 description: 'SEO Title',
};

export default function MainPage() {
  return (
    <div className="text-black p-2">
      <h1 className="mt-2 text-3xl">Hello Page</h1>
      <span className="text-xl">Informacion general </span>



      <div className="flex flex-wrap p2 justify-center items-center">
<SimpleWidget />
      </div>
    </div>
  );
}