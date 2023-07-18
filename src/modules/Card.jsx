export default function Card({ label, src, children, cover }) {
  return (
    <div className="border-2 border-[#E8A005] rounded-3xl p-3 flex flex-col items-center w-[18rem] lg:w-[24rem] place-self-center">
      <h3 className="text-white mb-2">{label}</h3>
      <div className="border relative border-[#aaa] group object-contain w-[80%] h-auto rounded-3xl z-0 overflow-hidden">
        {children}
        <div>
          <img
            src={src}
            alt=""
            className={`rounded-3xl w-full h-full aspect-square ${
              cover ? 'object-cover' : ''
            } `}
          />
        </div>
      </div>
    </div>
  );
}
