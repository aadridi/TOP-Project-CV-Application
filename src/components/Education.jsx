export default function Education({ isEditing, formData, setFormData }) {
	return (
		<>
			<h2>Education</h2>
			<fieldset>
				{isEditing ? (
					<input
						type='text'
						placeholder='Your education...'
						value={formData.education}
						onChange={(e) =>
							setFormData({
								...formData,
								education: e.target.value,
							})
						}
					/>
				) : (
					<p>{formData.education}</p>
				)}
			</fieldset>
		</>
	);
}
