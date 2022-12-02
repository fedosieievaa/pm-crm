import Header from './header';

type MainLayoutProps = {
  children: any;
};

export const Main = ({ children }: MainLayoutProps) => {
    return (
        <>
            <Header />
            {children}
        </>
    );
};
