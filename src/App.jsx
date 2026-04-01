import { useState } from 'react';
import GeneralInfo from './components/GeneralInfo';
import Education from './components/Education';
import Experience from './components/Experience';
import './App.css';

function App() {
	const [isEditing, setIsEditing] = useState(true);
	const [formData, setFormData] = useState({
		name: '',
		email: '',
		phone: '',
		education: '',
		experience: '',
	});

	function handleSubmit(e) {
		e.preventDefault();
		setIsEditing(false);
	}

	function handleReset() {
		setFormData({
			name: '',
			email: '',
			phone: '',
			education: '',
			experience: '',
		});
	}

	return (
		<>
			<form onSubmit={handleSubmit}>
				<GeneralInfo isEditing={isEditing} formData={formData} setFormData={setFormData} />
				<Education isEditing={isEditing} formData={formData} setFormData={setFormData} />
				<Experience isEditing={isEditing} formData={formData} setFormData={setFormData} />
				{isEditing && (
					<>
						<button type='submit' onClick={() => setIsEditing(false)}>
							Submit
						</button>
						<button type='button' onClick={handleReset}>
							Reset
						</button>
					</>
				)}
			</form>
			{!isEditing && (
				<button type='button' onClick={() => setIsEditing(true)}>
					Edit
				</button>
			)}
			<pre>{JSON.stringify(formData, 2, null)}</pre>
		</>
	);
}

export default App;
