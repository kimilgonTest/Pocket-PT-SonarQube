'use client';

import { useEffect, useRef, useState } from 'react';
import DeleteIcon from '../../../../public/icons/DeleteIcon';
import EditIcon from '../../../../public/icons/EditIcon';
import { cls } from '@/utils/cls';
import Link from 'next/link';

const CompetitionCard = () => {
  const [isActive, setIsActive] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  const handleClick = () => {
    setIsActive((prev) => !prev);
  };

  const propagation = (e: React.MouseEvent) => {
    handleClick();
    e.stopPropagation();
  };

  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        setIsActive(false);
      }
    };

    document.addEventListener('click', handleOutsideClick);
    return () => {
      document.removeEventListener('click', handleOutsideClick);
    };
  }, []);

  return (
    <div className="relative w-full">
      <div
        ref={ref}
        className={cls(
          'relative flex flex-row items-center w-full h-auto py-3 mb-1 bg-white border rounded z-10',
          isActive
            ? 'border-dark mb-12 duration-300'
            : 'border-lightGray duration-300',
        )}
        onClick={propagation}
        role="presentation"
      >
        <div className="flex flex-col pl-6">
          <div className="text-lg font-bold text-mainPurple">대회명</div>
          <div className="text-sm text-gray">대회날짜</div>
        </div>
        <div className="absolute right-6">몇등</div>
      </div>
      <div
        className={cls(
          'absolute flex flex-row gap-6 right-2 top-12',
          isActive ? 'animate-slide-down mt-1' : 'animate-slide-up',
        )}
      >
        <div className="w-7 h-7 p-[2px] border rounded-full text-gray border-gray">
          <EditIcon />
        </div>
        <div className="w-7 h-7 p-[2px] border rounded-full text-gray border-gray">
          <DeleteIcon />
        </div>
      </div>
    </div>
  );
};

const PortfolioPage = () => {
  return (
    <div className="w-full h-full">
      <div className="flex items-center justify-center w-full h-24 text-xl font-bold text-center text bg-gray text-mainPurple">
        총 경력갯수 <br /> 배경 대충 멋진이미지
      </div>
      <div className="px-6">
        <div className="mt-8 mb-1 text-lg font-bold">대회</div>
        <CompetitionCard />
        <CompetitionCard />
        <CompetitionCard />
        <CompetitionCard />
        <CompetitionCard />
      </div>
    </div>
  );
};

export default PortfolioPage;
