import { useForm } from 'react-hook-form';
import {
	Form,
	FormControl,
	FormDescription,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button.tsx";
import { useNavigate } from "react-router-dom";
import { Helmet } from 'react-helmet-async';

interface IFormValues {
	username: string;
	email: string;
	message: string;
}

const ContactUsPage = () => {
	const form = useForm<IFormValues>({
		defaultValues: {
			username: "",
			email: "",
			message: "",
		},
	});

	const navigate = useNavigate();

	const onSubmit = async (values: IFormValues) => {
		console.log(values);
		navigate("/submission", { state: { formData: values } });
	};

	return (
		<>
			<Helmet>
				<title>Contact Us</title>
				<meta name="description" content="Contact us page for sending messages." />
			</Helmet>
			<section className={"bg-gray-100 h-[calc(100vh-232px)] flex flex-col gap-4 items-center justify-center"}>
				<h1 className={"text-[48px] font-semibold text-center font-bold"}>Only CTA on the page</h1>
				<Form {...form}>
					<form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
						<FormField
							control={form.control}
							name="username"
							render={({ field }) => (
								<FormItem>
									<FormLabel>Username</FormLabel>
									<FormControl>
										<Input placeholder="shadcn" {...field} />
									</FormControl>
									<FormDescription>
										This is your public display name.
									</FormDescription>
									<FormMessage />
								</FormItem>
							)}
						/>
						<FormField
							control={form.control}
							name="email"
							render={({ field }) => (
								<FormItem>
									<FormLabel>Email</FormLabel>
									<FormControl>
										<Input type="email" placeholder="example@example.com" {...field} />
									</FormControl>
									<FormDescription>
										We will use this email to contact you.
									</FormDescription>
									<FormMessage />
								</FormItem>
							)}
						/>
						<FormField
							control={form.control}
							name="message"
							render={({ field }) => (
								<FormItem className={"flex flex-col gap-1"}>
									<FormLabel>Message</FormLabel>
									<FormControl>
                    <textarea
						placeholder="Your message..."
						{...field}
						className="block outline-none p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:border-black" />
									</FormControl>
									<FormDescription>
										Please enter your message here.
									</FormDescription>
									<FormMessage />
								</FormItem>
							)}
						/>
						<Button className={"w-full"} type="submit">Submit</Button>
					</form>
				</Form>
			</section>
		</>
	);
};

export default ContactUsPage;
