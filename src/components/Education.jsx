import InputField from './InputField';

export default function Education({ isEditing, formData, setFormData }) {
	return (
		<>
			<h2>Education</h2>
			<fieldset>
				<InputField
					isEditing={isEditing}
					labelHtmlFor='education'
					labelTitle='Education: '
					inputPlaceholder='Your education...'
					inputValue={formData.education}
					onChange={(e) =>
						setFormData({
							...formData,
							education: e.target.value,
						})
					}
				/>
			</fieldset>
		</>
	);
}
