import { AppProps } from 'next/app';

export interface NextPageWithLayout<T = {}> extends React.FC<T> {
    getLayout?: (page: React.ReactElement) => React.ReactNode;
}

export type AppPropsWithLayout = AppProps & {
    Component: NextPageWithLayout;
};

export interface IPageLayoutProps {
    children: React.ReactNode;
    contentContainerStyle?: React.HTMLAttributes<HTMLDivElement>['style'];
}

export type PageLayout<T = {}> = React.FC<IPageLayoutProps & T>;
