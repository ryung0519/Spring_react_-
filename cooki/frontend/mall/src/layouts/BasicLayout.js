import BasicMenu from "../components/menus/BasicMenu";

const BasicLayout = ({children}) => {
  
    return (
        <>
        <BasicMenu/>
        <div className="bg-white w-full flex flex-col space-y-4 md:flex-row md:space-x-4 md:space-y-0">
            <main className="bg-sky-300 md:w-2/3 lg:w-3/4 px-5 py-5">
                {children}
            </main>
            <aside className="bg-green-300 md:w-1/3 lg:w-1/4 px-5 flex py-5">
                <h1 className="text-2xl md:text-4xl">SideBar </h1>
        </aside> 
        </div>
        </>
    );
}
export default BasicLayout;

//최상단 태그가 필수적 , 
// () - return  x/ {} -- return   o
// common JS   -- require  
// ES 6 -- > 문법을 따라감 , react , next, react native 
// import 
//기존에는 function /  arrow fucntion  = const 
