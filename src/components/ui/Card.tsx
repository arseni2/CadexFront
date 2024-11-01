interface IProps {
	title: string
	description: string
}

const Card = ({description, title}: IProps) => {
	return (
		<div className={"flex flex-col gap-2"}>
			<h3 className={"text-[24px] font-semibold"}>{title}</h3>
			<p className={"text-gray-500"}>{description}</p>
		</div>
	);
};

export default Card;