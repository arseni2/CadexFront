import { Button } from "@/components/ui/button.tsx";
import Card from "@/components/ui/Card.tsx";
import { Link } from "react-router-dom";
import { Helmet } from 'react-helmet-async';

const MainPage = () => {
	const cards = [
		{ title: "Title", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam mattis, leo et condimentum." },
		{ title: "Title", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam mattis, leo et condimentum." },
		{ title: "Title", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam mattis, leo et condimentum." },
		{ title: "Title", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam mattis, leo et condimentum." },
		{ title: "Title", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam mattis, leo et condimentum." },
		{ title: "Title", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam mattis, leo et condimentum." },
	];

	return (
		<div>
			<Helmet>
				<title>Main Page</title>
				<meta name="description" content="Main page featuring important information." />
			</Helmet>
			<section className={"flex justify-between p-4 bg-gray-100 px-12 py-8 border-t-gray-200 border-t-[1px]"}>
				<div className={"flex flex-col gap-4 max-w-[380px]"}>
					<h1 className={"text-[48px] font-semibold"}>Most important title on the page</h1>
					<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam mattis, leo et condimentum ultricies, sem urna convallis metus, vel suscipit nibh lacus tincidunt ante</p>
				</div>

				<div>
					<iframe width="560" height="315" src="https://www.youtube.com/embed/dQw4w9WgXcQ?si=IRQYh6q3QZN_c_f2" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
				</div>
			</section>

			<section className={"mt-[50px] pb-[20px] flex flex-col justify-center"}>
				<h1 className={"pb-[40px] text-[48px] font-semibold text-center"}>Also very important title</h1>

				<div className={"grid grid-cols-3 gap-20"}>
					{cards.map((card, index) => {
						return <Card key={index} title={card.title} description={card.description} />;
					})}
				</div>

				<Link to={"contact"} className={"w-full max-w-[200px] mx-auto"}>
					<Button className={"mt-[50px] w-full max-w-[200px]"}>Contact us</Button>
				</Link>
			</section>

			<section className={"mt-[50px] flex flex-col justify-center items-center pb-[60px] bg-gray-100 pt-[50px]"}>
				<h1 className={"text-[48px] font-semibold text-center"}>Most important title on the page</h1>

				<Link to={"contact"} className={"w-full max-w-[200px]"}>
					<Button className={"mt-[50px] w-full max-w-[200px]"}>Contact us</Button>
				</Link>
			</section>
		</div>
	);
};

export default MainPage;
