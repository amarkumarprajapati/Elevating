import Header from '../components/Header';
import Footer from '../components/Footer';

export default function MyApp({ Component, pageProps }) {
  return (
    <div className="min-h-screen flex flex-col font-sans">
      <Header />
      <main className="flex-grow">
        <Component {...pageProps} />
      </main>
      <Footer />
    </div>
  );
}
