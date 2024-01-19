import { SimpleWidget, WidgetsGrid } from "@/components";



export const metadata = {
 title: 'Admin Dashboard',
 description: 'SEO Title',
};

export default function MainPage() {
  return (
    <div className="text-black p-2 text-center">
      <h1 className="mt-2 text-3xl  p-4">Hello Page</h1>
      <span className="text-xl pb-4 ">Informacion general </span>
<WidgetsGrid />


   
    </div>
  );
}