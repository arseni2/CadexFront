import {Route, Routes} from "react-router-dom"
import MainPage from "@/pages/MainPage.tsx";
import MainLayout from "@/layouts/MainLayout.tsx";
import ContactUsPage from "@/pages/ContactUsPage.tsx";
import SubmissionPage from "@/pages/SubmissionPage.tsx";

function App() {
    return (
		<MainLayout>
			<Routes>
				<Route path="/" element={<MainPage/>}/>
				<Route path="contact" element={ <ContactUsPage/> } />
				<Route path="submission" element={ <SubmissionPage/> } />
			</Routes>
		</MainLayout>
	)
}

export default App
