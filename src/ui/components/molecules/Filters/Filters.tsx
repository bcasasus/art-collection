import './filters.css';

export const Filters = () => {
	return (
		<div className="rmt-filters">
			<input
				className="rmt-filters__search-input"
				type="search"
				name="name"
				placeholder="Type a character name..."
			/>
			<label className="rmt-filters__label" htmlFor="select-status">
				Status
			</label>
			<select
				className="rmt-filters__select-input"
				name="status"
				id="select-status"
			>
				<option value="value1">Value 1</option>
				<option value="value2" selected>
					Value 2
				</option>
				<option value="value3">Value 3</option>
			</select>
			<label className="rmt-filters__label" htmlFor="select-species">
				Species
			</label>
			<select
				className="rmt-filters__select-input"
				name="species"
				id="select-species"
			>
				<option value="value1">Value 1</option>
				<option value="value2" selected>
					Value 2
				</option>
				<option value="value3">Value 3</option>
			</select>
			<label className="rmt-filters__label" htmlFor="select-type">
				Type
			</label>
			<select
				className="rmt-filters__select-input"
				name="type"
				id="select-type"
			>
				<option value="value1">Value 1</option>
				<option value="value2" selected>
					Value 2
				</option>
				<option value="value3">Value 3</option>
			</select>
			<label className="rmt-filters__label" htmlFor="select-gender">
				Gender
			</label>
			<select
				className="rmt-filters__select-input"
				name="gender"
				id="select-gender"
			>
				<option value="value1">Value 1</option>
				<option value="value2" selected>
					Value 2
				</option>
				<option value="value3">Value 3</option>
			</select>
		</div>
	);
};
