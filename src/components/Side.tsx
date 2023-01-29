import { IconSourceCode } from '@tabler/icons-react';
import { useAppStore } from '../store/useAppStore';

export const Side: React.FC<{ className?: string }> = ({ className }) => {
	const currentIndex = useAppStore((state) => state.currentIndex);
	const files = useAppStore((state) => state.files);
	const addFile = useAppStore((state) => state.addFile);
	const setIndex = useAppStore((state) => state.setIndex);

	return (
		<>
			<div
				className={`menu flex flex-col p-4 overflow-y-auto w-80 bg-base-100 text-base-content dark:bg-base-100 overflow-hidden ${className}`}
			>
				<p className='text-2xl font-bold dark:text-white'>Reacktor</p>

				{/* Workspace List */}
				<div className='flex flex-auto flex-col gap-2 overflow-y-auto h-8'>
					{files.map((item, i) => (
						<div
							onClick={() => setIndex(i)}
							key={i}
							className={`flex flex-row gap-1 w-64 bg-base-200 select-none cursor-pointer p-2 rounded-xl ${
								currentIndex === i && 'border-2 border-primary'
							}`}
						>
							<IconSourceCode size={20}></IconSourceCode>
							<p className='my-auto'>Workspace</p>
						</div>
					))}
				</div>

				{/* Add Button */}
				<button
					className='mt-auto bg-primary text-black font-bold p-3 rounded-xl'
					onClick={() => addFile()}
				>
					Add
				</button>
			</div>
		</>
	);
};
