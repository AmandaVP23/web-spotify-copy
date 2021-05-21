import React, { FunctionComponent } from 'react';
import PlayButton from './PlayButton';

interface OwnProps {
    imgUrl: string;
    imgRounded?: boolean;
    title: string;
    subtitle?: string;
    showPause?: boolean;
}

const ElementCard: FunctionComponent<OwnProps> = (props: OwnProps) => {
    const {
        imgUrl,
        title,
        subtitle,
        imgRounded,
        showPause,
    } = props;

    return (
        <div className="element-card">
            <div className="element-card__top">
                <div className="element-card__top__wrapper">
                    <img
                        className={imgRounded ? 'element-card__top__img element-card__top__img--rounded' : 'element-card__top__img'}
                        src={imgUrl}
                        alt={title}
                    />
                </div>
                <PlayButton showPause={showPause} />
            </div>
            <p className="paragraph">{title}</p>
            {subtitle && <p className="element-card__subtitle">{subtitle}</p>}
        </div>
    );
}

export default ElementCard;