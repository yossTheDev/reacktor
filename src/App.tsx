import { useState } from 'react';
import { Drawer, Navbar } from 'react-daisyui';
import './App.css';
import CodeMirror from '@uiw/react-codemirror';
import { javascript } from '@codemirror/lang-javascript';
import { LiveProvider, LiveEditor, LiveError, LivePreview } from 'react-live';
import { materialInit } from '@uiw/codemirror-theme-material';
import { createTheme } from '@uiw/codemirror-themes';
import { tags as t } from '@lezer/highlight';
import { IconBug, IconCode, IconEye } from '@tabler/icons-react';
import { useAppStore } from './store/useAppStore';
import { Side } from './components/Side';

const myTheme = createTheme({
	theme: 'light',
	settings: {
		background: '#07090e',
		foreground: '#75baff',
		caret: '#5d00ff',
		selection: '#036dd626',
		selectionMatch: '#036dd626',
		lineHighlight: '#8a91991a',
		gutterBackground: '#07090e',
		gutterForeground: '#8a919966',
	},
	styles: [
		{ tag: t.comment, color: '#787b8099' },
		{ tag: t.variableName, color: '#0080ff' },
		{ tag: [t.string, t.special(t.brace)], color: '#5c6166' },
		{ tag: t.number, color: '#5c6166' },
		{ tag: t.bool, color: '#5c6166' },
		{ tag: t.null, color: '#5c6166' },
		{ tag: t.keyword, color: '#5c6166' },
		{ tag: t.operator, color: '#5c6166' },
		{ tag: t.className, color: '#5c6166' },
		{ tag: t.definition(t.typeName), color: '#5c6166' },
		{ tag: t.typeName, color: '#5c6166' },
		{ tag: t.angleBracket, color: '#5c6166' },
		{ tag: t.tagName, color: '#5c6166' },
		{ tag: t.attributeName, color: '#5c6166' },
	],
});

function App() {
	const [open, setOpen] = useState(false);
	const [code, setCode] = useState('<div>Hello World!<div> Hola </div></div>');
	const saveFile = useAppStore((state) => state.saveFile);
	const currentIndex = useAppStore((state) => state.currentIndex);
	const files = useAppStore((state) => state.files);

	return (
		<Drawer
			onClickOverlay={() => setOpen(!open)}
			open={open}
			side={<Side></Side>}
		>
			<LiveProvider code={files[currentIndex]}>
				<div
					className='bg-base-100 h-screen w-screen flex flex-col flex-auto overflow-hidden text-gray-400'
					id='main'
				>
					{/* Nav Bar */}
					<Navbar className='flex lg:hidden shrink h-2 bg-base-100'>
						<Navbar.Start>
							<p className='md:flex hidden dark:text-white font-bold text-black poppins-font-family ml-2 text-2xl select-none'>
								Reacktor
							</p>
						</Navbar.Start>

						<Navbar.Center>
							<p className='md:hidden flex dark:text-white text-black poppins-font-family ml-2 text-2xl select-none'>
								Reacktor
							</p>
						</Navbar.Center>

						<Navbar.End></Navbar.End>
					</Navbar>

					{/* Content*/}
					<div className='flex flex-auto lg:mt-2 flex-row overflow-hidden'>
						{/* File Browser */}
						<Side className='relative w-24  lg:flex hidden shrink-0 grow-0'></Side>

						<div className='flex flex-auto gap-5'>
							{/* Code Editor */}
							<div className='flex flex-col w-1/2 overflow-hidden'>
								<div className='flex flex-row gap-1 mb-2 bg-base-200 p-3 rounded-2xl'>
									<IconCode className='ml-2'></IconCode>
									<p className='font-bold'>Code</p>
								</div>

								<CodeMirror
									className='flex flex-auto my-2 overflow-auto'
									value={files[currentIndex]}
									width='100%'
									extensions={[javascript({ jsx: true, typescript: true })]}
									onChange={(e) => {
										saveFile(e);
									}}
									basicSetup={{
										autocompletion: true,
										rectangularSelection: true,
									}}
									theme={materialInit({
										settings: {
											background: '#07090e',
											gutterBackground: '#07090e',
											selection: '#036dd626',
											selectionMatch: '#036dd626',
											lineHighlight: '#8a91991a',
										},
									})}
								/>
							</div>

							{/* Live Preview */}
							<div className='flex flex-col shrink-0 w-1/2 overflow-auto'>
								<div className='flex flex-auto flex-col'>
									<div className='flex flex-row gap-1 mb-2 bg-base-200 p-3 rounded-2xl'>
										<IconEye className='ml-2'></IconEye>
										<p className='font-bold'>Live</p>
									</div>

									<LivePreview className='flex flex-auto rounded bg-base-200 p-2' />
								</div>

								<div className='flex flex-auto max-h-10 my-2 bg-base-200 rounded p-2 gap-1'>
									<IconBug className='my-auto'></IconBug>
									<LiveError className='flex overflow-hidden my-auto' />
								</div>
							</div>
						</div>
					</div>

					{/* Status Bar */}
					<div className='flex flex-auto max-h-5 gap-2'>
						<p className='text-xs my-auto ml-2'>
							Mady with ReactJS by @yossthedev
						</p>
					</div>
				</div>
			</LiveProvider>
		</Drawer>
	);
}

export default App;
