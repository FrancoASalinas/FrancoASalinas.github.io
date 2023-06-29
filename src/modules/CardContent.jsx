export default function CardContent({ desc, linkCode, linkPage, children }) {
  return (
    <div className="absolute w-full h-full rounded-3xl bg-black group-hover:bg-opacity-70 group-hover:visible invisible z-10 duration-200 bg-opacity-0 grid justify-center items-center">
      <p className="text-center">{desc}</p>
      <div className="lg:flex grid justify-center">
        {linkPage && (
          <button className="bg-[#E8A005] text-secondary rounded-md p-1 m-1">
            <a href={linkPage} target="_blank">
              Visit the Page
            </a>
          </button>
        )}
        {linkCode && (
          <button className="bg-primary text-secondary rounded-md p-1 m-1">
            <a href={linkCode} target="_blank">
              Watch the Code
            </a>
          </button>
        )}
        {children}
      </div>
    </div>
  );
}
