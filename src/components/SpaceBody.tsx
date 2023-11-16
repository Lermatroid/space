import { cn } from "@/utils/cn";

export default function SpaceBody({
	children,
	classname,
	widthKm,
}: {
	children?: React.ReactNode;
	classname?: string;
	widthKm: number;
}) {
	return (
		<div
			className={cn("flex font-inter relative items-center h-full text-white", classname)}
			style={{ width: `${Math.round(widthKm / 100)}px` }}
		>
			{children}
		</div>
	);
}
