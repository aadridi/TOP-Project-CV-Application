import InputField from './InputField';

export default function Experience({ isEditing, formData, setFormData }) {
	return (
		<>
			<h2>Experience</h2>
			<fieldset>
				<InputField
					isEditing={isEditing}
					labelHtmlFor='experience'
					labelTitle='Experience: '
					inputPlaceholder='Your experience...'
					inputValue={formData.experience}
					onChange={(e) =>
						setFormData({
							...formData,
							experience: e.target.value,
						})
					}
				/>
			</fieldset>
		</>
	);
}
