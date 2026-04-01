export default function Education({ isEditing, formData, setFormData }) {
	return (
		<>
			<h2>Experience</h2>
			<fieldset>
				{isEditing ? (
					<input
						type='text'
						placeholder='Your experience...'
						value={formData.experience}
						onChange={(e) =>
							setFormData({
								...formData,
								experience: e.target.value,
							})
						}
					/>
				) : (
					<p>{formData.experience}</p>
				)}
			</fieldset>
		</>
	);
}
