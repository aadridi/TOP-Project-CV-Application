export default function InputField({ isEditing, labelHtmlFor, labelTitle, inputPlaceholder, inputValue, onChange }) {
	return (
		<div>
			{isEditing ? (
				<div className="inputFields">
					<label htmlFor={labelHtmlFor}>{labelTitle}</label>
					<input type='text' placeholder={inputPlaceholder} value={inputValue} onChange={onChange} />{' '}
				</div>
			) : (
				<p>Name: {inputValue}</p>
			)}
		</div>
	);
}
