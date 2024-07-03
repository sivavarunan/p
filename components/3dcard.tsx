import React from 'react';
import Image from 'next/image';
import { projects } from './ui/data';
import { CardBody, CardContainer, CardItem } from './ui/3d-card';

const ThreeDCardDemo = () => {
  return (
    <div className='py-20' id='projects'>
      <h1 className="heading">
        A small selection of <span className='text-purple'>Recent projects</span>
      </h1>
      <div className="flex flex-wrap items-center justify-center p-4 gap-x-24 gap-y-8 mt-10">
        {projects.map(({ id, title, des, img, iconLists }) => (
          <div key={id} className="lg:min-h-[32.5rem] h-[32rem] flex items-center justify-center sm:w-[570px] w-[80vw] sm:h-[41rem]">
            <CardContainer className="inter-var">
              <CardBody className="bg-gray-50 relative group hover:shadow-2xl hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border">
                <div className="relative flex items-center justify-center w-full h-64">
                  <CardItem translateZ="100" className="w-full mt-4">
                    <Image src={img} alt={title} objectFit='cover' height={1000} width={1000} className="h-60 w-full object-cover rounded-xl group-hover:shadow-xl" />
                  </CardItem>
                </div>
                <CardItem translateZ="50" className="text-xl font-bold text-neutral-600 dark:text-white">
                  {title}
                </CardItem>
                <CardItem as="p" translateZ="60" className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300">
                  {des}
                </CardItem>
                <div className='flex items-center justify-between mt-7 mb-3'>
                  <div className='flex items-center'>
                    {iconLists.map((icon, index) => (
                      <div key={icon} className='border border-white/[0.2] rounded-full bg-black lg:w-10 lg:h-10 w-8 h-8 flex justify-center items-center'
                        style={{ transform: `translateX(-${5 * index * 2}px)` }}>
                        <CardItem translateZ="100" className="w-full group">
                          <Image src={icon} alt={`icon-${index}`} height={1000} width={1000} className="h-fill w-full object-cover rounded-xl group-hover:shadow-xl" />
                        </CardItem>
                      </div>
                    ))}
                  </div>
                </div>
              </CardBody>
            </CardContainer>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ThreeDCardDemo;
