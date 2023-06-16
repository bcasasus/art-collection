import { FormEvent } from 'react';
import { FilterProps } from './types';
import { Button } from '@rmt/atoms';
import './filters.css';

export const Filters = ({ onSubmit }: FilterProps): JSX.Element => {
	const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();

		const form = new FormData(e.target as HTMLFormElement);
		const parsedData = Object.fromEntries(form.entries());

		const filters = Object.keys(parsedData).reduce((filters, key) => {
			if (parsedData[key] !== 'All' && parsedData[key] !== '') {
				return {
					...filters,
					[key]: parsedData[key],
				};
			}

			return filters;
		}, {});

		onSubmit(filters);
	};

	return (
		<form onSubmit={handleSubmit} className="rmt-filters-form">
			<input
				className="rmt-filters-form__search-input"
				type="search"
				name="name"
				placeholder="Type a character name..."
			/>
			<label className="rmt-filters-form__label" htmlFor="select-status">
				Status
			</label>
			<select
				className="rmt-filters-form__select-input"
				name="status"
				id="select-status"
			>
				<option value="All">All</option>
				<option value="Alive">Alive</option>
				<option value="Dead">Dead</option>
				<option value="unknown">unknown</option>
			</select>
			<label className="rmt-filters-form__label" htmlFor="select-gender">
				Gender
			</label>
			<select
				className="rmt-filters-form__select-input"
				name="gender"
				id="select-gender"
			>
				<option value="All">All</option>
				<option value="Female">Female</option>
				<option value="Male">Male</option>
				<option value="Genderless">Genderless</option>
				<option value="unknown">unknown</option>
			</select>
			<Button className="rmt-filters-form__submit-button" type="submit">
				FILTER
			</Button>
			<Button className="rmt-filters-form__reset-button" type="reset">
				RESET
			</Button>
		</form>
	);
};
