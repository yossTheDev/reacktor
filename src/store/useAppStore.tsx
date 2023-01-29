import { create } from 'zustand';

export interface AppState {
	currentIndex: number;
	files: string[];
	addFile: () => void;
	setIndex: (index: number) => void;
	saveFile: (text: string) => void;
}

export const useAppStore = create<AppState>((set) => ({
	files: ['<div>Hello World!<div> Hola </div></div>'],
	currentIndex: 0,
	addFile: () =>
		set((state) => ({
			files: [...state.files, '<div>Hello World!<div> Hola </div></div>'],
		})),

	saveFile: (text) =>
		set((state) => ({
			files: state.files.map((item, index) =>
				index === state.currentIndex ? text : item
			),
		})),

	setIndex: (index) =>
		set((state) => ({
			currentIndex: index,
		})),
}));
