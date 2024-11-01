import Header from "@/components/ui/header.tsx";
import Footer from "@/components/ui/footer.tsx";

interface IProps {
	children: React.ReactElement
}

const MainLayout = (props: IProps) => {
	return (
		<div className={"max-w-[1200px] mx-auto"}>
			<Header />
			{props.children}
			<Footer />
		</div>
	);
};

export default MainLayout;