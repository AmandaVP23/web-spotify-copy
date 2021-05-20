import React, { FunctionComponent } from 'react';
import PauseIcon from '../icons/PauseIcon';
import PlayIcon from '../icons/PlayIcon';

interface OwnProps {
    showPause?: boolean;
}

const PlayButton: FunctionComponent<OwnProps> = (props: OwnProps) => {
    const { showPause } = props;

    return (
        <div className={showPause ? 'play-button play-button--show' : 'play-button'}>
            {showPause ? <PauseIcon /> : <PlayIcon />}
        </div>
    );
}

export default PlayButton;