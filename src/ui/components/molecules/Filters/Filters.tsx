import './filters.css';

const Filters = () => {
	return (
		<div className="rmt-filters">
			<input
				className="rmt-filters__search-input"
				type="search"
				name="name"
				placeholder="Type a character name..."
			/>
			<label className="rmt-filters__label" for="status">
				Status
			</label>
			<select className="rmt-filters__select-input" name="status">
				<option value="value1">Value 1</option>
				<option value="value2" selected>
					Value 2
				</option>
				<option value="value3">Value 3</option>
			</select>
			<label className="rmt-filters__label" for="status">
				Species
			</label>
			<select className="rmt-filters__select-input" name="status">
				<option value="value1">Value 1</option>
				<option value="value2" selected>
					Value 2
				</option>
				<option value="value3">Value 3</option>
			</select>
			<label className="rmt-filters__label" for="status">
				Type
			</label>
			<select className="rmt-filters__select-input" name="status">
				<option value="value1">Value 1</option>
				<option value="value2" selected>
					Value 2
				</option>
				<option value="value3">Value 3</option>
			</select>
			<label className="rmt-filters__label" for="status">
				Gender
			</label>
			<select className="rmt-filters__select-input" name="status">
				<option value="value1">Value 1</option>
				<option value="value2" selected>
					Value 2
				</option>
				<option value="value3">Value 3</option>
			</select>
		</div>
	);
};

export default Filters;
