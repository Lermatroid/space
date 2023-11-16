"use client";

import Vertical from "@/components/Vertical";
import SpaceBody from "./SpaceBody";
import { useScroll, useMotionValueEvent } from "framer-motion";
import { useState, useRef } from "react";
import Image from "next/image";

export default function Space() {
	const universalRef = useRef(null);
	const { scrollX } = useScroll({ container: universalRef });
	const [distance, setDistance] = useState(0);

	useMotionValueEvent(scrollX, "change", (latest) => {
		setDistance(latest * 100);
	});

	// return (
	// 	<div className="max-h-screen overflow-y-hidden">
	// 		<div
	// 			className="relative flex items-center justify-start h-screen max-h-screen w-min overflow-y-hidden overflow-x-scroll p-0"
	// 			id="space"
	// 			ref={universalRef}
	// 		>
	// 			<p className="bg-black text-white fixed z-20">Distance Srolled: {distance}km</p>
	// 			<Vertical>
	// 				<div className="pl-10 space-y-10">
	// 					<div className="floating">
	// 						<div className="hover:scale-110 duration-1000">
	// 							<h1 className="font-pixelify text-9xl font-black">Space</h1>
	// 							<h2 className="font-pixelify text-4xl">By Pixels</h2>
	// 						</div>
	// 					</div>
	// 					<div className="space-y-5">
	// 						<p className="font-bold">
	// 							Every pixel is 100 Kilometers. Scroll to the right to begin &rarr;
	// 						</p>
	// 						<p className="text-xs font-mono text-gray-500">
	// 							{"Psst. Scroll right with a mouse is shift + scroll."}
	// 						</p>
	// 					</div>
	// 				</div>
	// 			</Vertical>
	// 			{/* Sun */}
	// 			<SpaceBody classname="bg-gradient-to-r from-yellow-300 to-orange-400" widthKm={696340} />
	// 			{/* Sun > Mercury */}
	// 			<SpaceBody classname="bg-black" widthKm={58000000} />
	// 			{/* Sun > Venus */}
	// 		</div>
	// 	</div>
	// );

	return (
		<main className="max-h-screen h-screen bg-black w-min flex items-center justify-start overflow-y-hidden flex-nowrap font-inter">
			<div className="bg-black border-white border-2 rounded p-5 text-white fixed z-20 bottom-0 mb-10 mr-2 right-0">
				<p>{distance.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}km Travelled</p>
			</div>
			<SpaceBody
				classname="bg-gradient-to-r from-white via-yellow-300 to-orange-400"
				widthKm={696340}
			>
				<Vertical classname="text-black relative">
					<div className="pl-10 space-y-10">
						<div className="floating">
							<div className="hover:scale-110 cursor-grab duration-1000">
								<h1 className="font-pixelify text-9xl font-black">Space</h1>
								<h2 className="font-pixelify text-4xl">By Pixels</h2>
							</div>
						</div>
						<div className="space-y-5">
							<p className="font-bold">
								Every pixel is 100 Kilometers. Scroll to the right to begin &rarr;
							</p>
							<p className="text-xs font-mono text-gray-500">
								{"Psst. Scroll right with a mouse is shift + scroll."}
							</p>
						</div>
					</div>
					<p className="absolute text-xl -rotate-12 left-0 ml-10 bottom-[15%] font-inter font-bold ">
						📍 The center of the Sun
					</p>
				</Vertical>
			</SpaceBody>
			<SpaceBody classname="bg-black" widthKm={58000000} />
			<SpaceBody widthKm={4879}>
				<Image
					id="mercury"
					fill
					src={"/img/bodies/mercury.png"}
					alt="Mercury"
					className="object-contain"
				/>
			</SpaceBody>
			<SpaceBody classname="bg-black" widthKm={31000000}>
				<div>
					<p className="font-bold">&larr; Thats mercury, blink and you might have missed it!</p>
				</div>
				<div className="absolute font-bold bottom-[15%] max-w-[500px] text-xs">
					<p>
						🧠 Every single pixel is 100km. This means that mercury's diameter of 4879km takes up a
						total of ~ 48 pixels out of the ~ 58 million you have scrolled so far.
					</p>
				</div>
			</SpaceBody>
			<SpaceBody widthKm={12104}>
				<Image
					id="venus"
					fill
					src={"/img/bodies/venus.png"}
					alt="Venus"
					className="object-contain"
				/>
			</SpaceBody>
			<SpaceBody classname="bg-black" widthKm={25000000} />
			<SpaceBody widthKm={12742}>
				<Image
					id="earth"
					fill
					src={"/img/bodies/earth.png"}
					alt="Earth"
					className="object-contain"
				/>
			</SpaceBody>
		</main>
	);
}
