import style from './index.module.scss';

type Props = {
    size: string;
    color: string;
    onClick?: any;
    github?: string;
    confluence?: string;
};

export const Banner = ({ size, color, github, confluence }: Props) => {
    return (
        <div
            data-github={github}
            data-confluence={confluence}
            className={`${style.banner} ${style[color]}  ${style[size]}`}
        />
    );
};
