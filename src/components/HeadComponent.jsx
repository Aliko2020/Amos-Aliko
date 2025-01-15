import { useState, useEffect } from 'react';
import amos from '../images/amos.png';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

const HeadComponent = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const img = new Image();
    img.src = amos;
    img.onload = () => setLoading(false);
  }, []);

  return (
    <section className="flex flex-col gap-2 mt-10">
      <div className="">
        <div className='flex flex-col gap-2 items-center'> 
          <div className="max-w-64 dark:opacity-60 border border-lighttxt border-opacity-20 dark:border-lightbg dark:border-opacity-50 rounded-lg overflow-hidden animated-moveLeft">
            {loading ? (
              <Skeleton height={256} width={318} baseColor="#5b5e62" highlightColor="#c0c0c0" />
            ) : (
              <img src={amos} alt="official photo" className="w-full h-full object-cover"/>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeadComponent;
