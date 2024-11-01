import {Button} from "@/components/ui/button.tsx";
import {Link} from "react-router-dom";

const Header = () => {
	return (
		<header className={"sticky top-0 flex justify-between px-4 py-8 bg-white"}>
			<Link to={"/"}>
				<h2 className={"text-2xl font-semibold"}>Some Company</h2>
			</Link>

			<Link to={"contact"} className={"w-full max-w-[200px] flex"}>
				<Button className={"w-full max-w-[200px]"}>Contact us</Button>
			</Link>
		</header>
	);
};

export default Header;