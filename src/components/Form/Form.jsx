import React from 'react';
import s from './Form.module.scss'
import { useForm } from 'react-hook-form';

export function SearchForm({ onSearch }) {
  const { register, handleSubmit } = useForm();

  const onSubmit = (formData) => {
    onSearch(formData.q);
  };

return (
  <>
    <form onSubmit={handleSubmit(onSubmit)} className={s.searchForm}>
      <input
        {...register('q')}
        placeholder="enter"
        defaultValue=""
        className={s.searchInput}
      />
      <button type="submit" className={s.searchButton}>Search</button>
    </form>

    <div className={s.bottomStripe}></div>
  </>
);
}