import React from 'react';
import StarIcon from '@/utils/StarIcon';

const StarRating = ({ rating, maxRating = 5, starHeight, starWidth }) => {
    const stars = Array.from({ length: maxRating }, (_, i) => i < rating ? '#ffc703' : '#dfdfdf');

    return (
        <div className="flex gap-1">
            {stars.map((fill, index) => (
                <StarIcon key={index} fill={fill} width={starWidth} height={starHeight} />
            ))}
        </div>
    );
};

export default StarRating;
