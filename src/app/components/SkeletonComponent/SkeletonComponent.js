import { Skeleton } from '@mui/material';

const SkeletonContainer = () => {
  return (
    <div className='skeleton-container'>
      <div className='skeleton-current-container'>
        <Skeleton width={'12rem'} />
        <Skeleton variant='rectangular' width={'5rem'} height={'5rem'} />
        <Skeleton width={'8rem'} />
        <div className='skeleton-main-temp-container'>
          <Skeleton width={'2rem'} />
          <Skeleton width={'2rem'} />
        </div>
      </div>
      <div className='skeleton-forecast-container'>
        <Skeleton variant='rectangular' width={'18rem'} height={'3rem'} />
        <Skeleton variant='rectangular' width={'18rem'} height={'3rem'} />
        <Skeleton variant='rectangular' width={'18rem'} height={'3rem'} />
        <Skeleton variant='rectangular' width={'18rem'} height={'3rem'} />
      </div>
    </div>
  );
};

export default SkeletonContainer;
