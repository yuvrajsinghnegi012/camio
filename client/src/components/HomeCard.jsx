'use client';

const HomeCard = ({ className, img, title, description, handleClick }) => {
  return (
    <section
      className={`bg-orange-1 px-4 py-6 flex flex-col justify-between w-full xl:max-w-[260px] min-h-[240px] rounded-[14px] cursor-pointer ${className} `}
      onClick={handleClick}
    >
      <div className="flex-center glassmorphism size-11 rounded-[10px]">
        <img src={img} alt="meeting w-[22px] h-[22px]"
        />
      </div>
      
      <div className="flex flex-col gap-2">
        <h1 className="text-2xl font-bold">{title}</h1>
        <p className="text-lg font-normal">{description}</p>
      </div>
    </section>
  );
};

export default HomeCard;
