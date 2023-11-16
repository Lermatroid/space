import { cn } from "@/utils/cn";

export default function Vertical({
	children,
	classname,
}: {
	children: React.ReactNode;
	classname?: string;
}) {
	return (
		<div
			className={cn(
				"flex font-inter absolute top-0 items-center min-h-screen text-white z-10",
				classname
			)}
		>
			{children}
		</div>
	);
}
