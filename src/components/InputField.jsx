export default function InputField({ isEditing, labelHtmlFor, labelTitle, inputPlaceholder, inputValue, onChange }) {
	return (
		<div>
			{isEditing ? (
				<>
					<label htmlFor={labelHtmlFor}>{labelTitle}</label>
					<input type='text' placeholder={inputPlaceholder} value={inputValue} onChange={onChange} />{' '}
				</>
			) : (
				<p>Name: {inputValue}</p>
			)}
		</div>
	);
}
