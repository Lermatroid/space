"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

interface TabletProps {
	distance: number;
}

export default function Tablet({ distance }: TabletProps) {
	const [currentView, setCurrentView] = useState<"overview" | "directory" | "minified">("overview");
	return currentView == "overview" ? (
		<div className="w-[450px] h-[300px] bg-gray-700 rounded-xl fixed bottom-0 right-0 z-50 mr-5 mb-5 p-3 font-inter">
			<div className="bg-gray-400 h-full w-full rounded-xl p-3 grid grid-cols-2 grid-rows-4 gap-3">
				<div className="col-span-2 grid grid-cols-2 bg-white rounded-xl p-3">
					<div className="flex flex-col justify-center">
						<p className="text-xs font-bold">Distance (km)</p>
						<p className="font-bold text-sm">
							{distance.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}km
						</p>
					</div>
					<div className="flex flex-col justify-center">
						<p className="text-xs font-bold">Next Stop</p>
						<p className="font-bold text-sm">The Sun</p>
					</div>
				</div>
				<div className="col-span-2 row-span-2 bg-white rounded-xl h-full p-3">
					Completing some details for here. More soon :)
				</div>
				<div className="col-span-2 grid grid-cols-2 gap-1 bg-white rounded-xl h-14 p-1">
					<button
						onClick={() => setCurrentView("directory")}
						className="bg-green-500 hover:bg-green-600 p-2 rounded-lg font-bold"
					>
						Open Directory
					</button>
					<button
						onClick={() => setCurrentView("minified")}
						className="bg-red-500 hover:bg-red-600 p-2 rounded-lg font-bold"
					>
						Close Tablet
					</button>
				</div>
			</div>
		</div>
	) : currentView == "directory" ? (
		<div className="w-[450px] h-[300px] bg-gray-700 rounded-xl fixed bottom-0 right-0 z-50 mr-5 mb-5 p-3 font-inter">
			<div className="bg-gray-400 h-full w-full rounded-xl p-3 grid relative grid-cols-3 overflow-y-auto gap-3">
				<button
					className="absolute z-10 top-0 right-0 bg-red-500 hover:bg-red-600 p-2 rounded-lg font-bold m-3"
					onClick={() => setCurrentView("overview")}
				>
					Close
				</button>
				<Link href="#mercury">
					<button className="aspect-square w-full relative bg-white rounded-xl">
						<Image
							alt="mercury"
							src="/img/bodies/mercury.png"
							fill
							className="object-contain pb-5"
						/>
						<p className="absolute bottom-0 text-center w-full font-bold">Mercury</p>
					</button>
				</Link>
				<Link href="#venus">
					<button className="aspect-square w-full relative bg-white rounded-xl">
						<Image alt="venus" src="/img/bodies/venus.png" fill className="object-contain pb-5" />
						<p className="absolute bottom-0 text-center w-full font-bold">Venus</p>
					</button>
				</Link>
				<Link href="#earth">
					<button className="aspect-square w-full relative bg-white rounded-xl">
						<Image alt="earth" src="/img/bodies/earth.png" fill className="object-contain pb-5" />
						<p className="absolute bottom-0 text-center w-full font-bold">Earth</p>
					</button>
				</Link>
				<Link href="#mars">
					<button className="aspect-square w-full relative bg-white rounded-xl">
						<Image alt="mars" src="/img/bodies/mars.png" fill className="object-contain pb-5" />
						<p className="absolute bottom-0 text-center w-full font-bold">Mars</p>
					</button>
				</Link>
			</div>
		</div>
	) : (
		<button
			onClick={() => setCurrentView("overview")}
			className="bg-green-500 hover:bg-green-600 p-2 rounded-lg font-bold fixed bottom-0 right-0 z-50 mr-5 mb-5"
		>
			Open Tablet
		</button>
	);
}
