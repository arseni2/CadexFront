import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

const SubmissionPage = () => {
	const location = useLocation();
	const [response, setResponse] = useState("");

	useEffect(() => {
		if (location.state && location.state.formData) {
			sendDataToServer(location.state.formData);
		}
	}, [location]);

	const sendDataToServer = async (data: { username: string; email: string; message: string; }) => {
		try {
			const response = await fetch('https://cadexserver.onrender.com/api', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify(data),
			});
			if (!response.ok) {
				throw new Error('Ошибка отправки данных');
			}
			const jsonResponse = await response.text();
			setResponse(jsonResponse);
			console.log('Данные успешно отправлены на сервер');
		} catch (error) {
			console.error('Ошибка:', error);
		}
	};

	return (
		<>
			<Helmet>
				<title>Submission Page</title>
				<meta name="description" content="Page displaying the result of the submission." />
			</Helmet>
			<section className={"bg-gray-100 h-[calc(100vh-232px)] flex flex-col gap-4 items-center justify-center"}>
				<h1 className={"text-[48px] text-center font-bold"}>
					{response ? response : "Loading..."}
				</h1>
			</section>
		</>
	);
};

export default SubmissionPage;
