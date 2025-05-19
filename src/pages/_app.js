import "@/styles/globals.css";
import Header from "@/components/header/header";
import TailwindIndicator from "@/components/tailwind-indicator";

export default function App({ Component, pageProps }) {
	return (
		<>
			<Header />
			<Component {...pageProps} />
			<TailwindIndicator />
		</>
	);
}
