import style from './index.module.scss';

type Props = {
    size: string;
    color: string;
    onClick?: any;
    team?: string;
    github?: string;
    documentation?: string;
};

export const Banner = ({ size, color, team, github, documentation }: Props) => {
    return (
        <div
            data-team={team}
            data-github={github}
            data-documentation={documentation}
            className={`${style.banner} ${style[color]}  ${style[size]}`}
        />
    );
};
