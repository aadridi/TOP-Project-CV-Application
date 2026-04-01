import InputField from './InputField';

export default function GeneralInfo({ isEditing, formData, setFormData }) {
	return (
		<>
			<h2>General Info</h2>

			{isEditing ? (
				<fieldset>
					<InputField
						isEditing={isEditing}
						labelHtmlFor='name'
						labelTitle='Name: '
						inputPlaceholder='Your name...'
						inputValue={formData.name}
						onChange={(e) =>
							setFormData({
								...formData,
								name: e.target.value,
							})
						}
					/>
					<InputField
						isEditing={isEditing}
						labelHtmlFor='email'
						labelTitle='Email: '
						inputPlaceholder='Your email...'
						inputValue={formData.email}
						onChange={(e) =>
							setFormData({
								...formData,
								email: e.target.value,
							})
						}
					/>
					<InputField
						isEditing={isEditing}
						labelHtmlFor='phone'
						labelTitle='Phone: '
						inputPlaceholder='Your phone...'
						inputValue={formData.phone}
						onChange={(e) =>
							setFormData({
								...formData,
								phone: e.target.value,
							})
						}
					/>
				</fieldset>
			) : (
				<div>
					<p>{formData.name}</p>
					<p>{formData.email}</p>
					<p>{formData.phone}</p>
				</div>
			)}
		</>
	);
}
