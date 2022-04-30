import Header from "./Header";
import Footer from "./Footer";
import Head from 'next/head';

const Layout = (props) => {
    return (
        <div>
            <Head>
                <title>Juniper Bee's Bakery</title>
                <meta name="description" content="Juniper Bee's Bakery"/>
            </Head>
            <Header/>
            <div className="container">
                {props.children}
            </div>
            <Footer/>
        </div>
    );
}
Layout.displayName = "Layout";
export default Layout;