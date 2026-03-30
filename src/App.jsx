import { useState } from 'react';
import GeneralInfo from './components/GeneralInfo';
import Education from './components/Education';
import Experience from './components/Experience';
import './App.css';

function App() {
	const [isEditing, setIsEditing] = useState(true);

	return (
		<>
			{isEditing && (
				<form>
					<GeneralInfo />
					<Education />
					<Experience />
				</form>
			)}
			{!isEditing && (
				<div>
					<GeneralInfo />
					<Education />
					<Experience />
				</div>
			)}
		</>
	);
}

export default App;
