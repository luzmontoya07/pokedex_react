import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { Navigation } from './components/Navigation';
import { HomePage, PokemonPage, SearchPage } from './pages';

export const AppRouter = () => {
	return (
		<Routes>
			<Route path='/' element={<Navigation />}>
				<Route index element={<HomePage />} />
				<Route path='pokemon/:id' element={<PokemonPage />} />    {/* Tiene que existir un pokemon para que funcione por eso tiene el id */}
				<Route path='search' element={<SearchPage />} />
			</Route>

            <Route path='*' element={<Navigate to='/' />} />       {/* si no encuentra ruta se redirecciona o se navega a otra pagina o ruta */}
		</Routes>
	);
}; 